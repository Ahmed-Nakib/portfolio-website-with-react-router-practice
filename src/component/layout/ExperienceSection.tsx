
import React, { useState, useRef, useEffect } from "react"
import { Phone, Code, Atom, Braces, Boxes, Cpu, Type } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// --- Types ---
type Skill = {
  id: number
  icon: React.ElementType
  name: string
  desc: string
}

// --- Skills List ---
const icons: Skill[] = [
  { id: 1, icon: Code, name: "HTML", desc: "Semantic structure & accessibility." },
  { id: 2, icon: Braces, name: "CSS", desc: "Layouts, animations, responsive design." },
  { id: 3, icon: Cpu, name: "JavaScript", desc: "DOM, logic, async, functional patterns." },
  { id: 4, icon: Atom, name: "React", desc: "Components, hooks, performance patterns." },
  { id: 5, icon: Boxes, name: "Tailwind", desc: "Utility-first rapid UI styling." },
  { id: 6, icon: Type, name: "Node.js", desc: "Server, APIs, realtime & tooling." },
]

// --- WebAudio Beep Sound ---
const useBeep = () => {
  const ctxRef = useRef<AudioContext | null>(null)
  useEffect(() => { ctxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)() }, [])
  const play = (freq = 440, duration = 0.08) => {
    const ctx = ctxRef.current; if (!ctx) return
    const o = ctx.createOscillator(); const g = ctx.createGain()
    o.type = "sine"; o.frequency.value = freq; g.gain.value = 0.0001
    o.connect(g); g.connect(ctx.destination)
    const now = ctx.currentTime; g.gain.linearRampToValueAtTime(0.12, now + 0.001)
    o.start(now); g.gain.exponentialRampToValueAtTime(0.001, now + duration); o.stop(now + duration + 0.02)
  }
  return { play }
}

// --- Experience Section ---
const ExperienceSection: React.FC = () => {
  const [active, setActive] = useState<Skill | null>(null)
  const [hover, setHover] = useState<number | null>(null)
  const gridRef = useRef<HTMLDivElement | null>(null)
  const { play } = useBeep()

  // --- Mouse Parallax ---
  useEffect(() => {
    const el = gridRef.current
    if (!el) return
    let raf = 0
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const dx = (e.clientX - cx) / rect.width
        const dy = (e.clientY - cy) / rect.height
        Array.from(el.children).forEach((child, i) => {
          const depth = (i % 3) * 4 + 6
          const tx = dx * depth; const ty = dy * depth
          ;(child as HTMLElement).style.transform = `translate3d(${tx}px, ${ty}px, 0)`
        })
      })
    }
    const onLeave = () => Array.from(el.children).forEach(c => (c as HTMLElement).style.transform = "")
    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseleave", onLeave)
    return () => { window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseleave", onLeave); cancelAnimationFrame(raf) }
  }, [])

  return (
    <section className="w-full py-24 bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-neutral-900">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 px-6">

        {/* --- ICON GRID --- */}
        <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:col-span-2">
          {icons.map((item) => {
            const Icon = item.icon
            const isActive = active?.id === item.id
            const isHover = hover === item.id
            return (
              <motion.div
                key={item.id}
                onClick={() => { setActive(isActive ? null : item); play(660) }}
                onMouseEnter={() => { setHover(item.id); play(880, 0.03) }}
                onMouseLeave={() => setHover(null)}
                animate={{
                  scale: isActive ? 1.35 : 1,
                  rotate: isActive ? 360 : 0,
                  y: isActive ? -10 : [0, -6, 0],
                  boxShadow: isActive
                    ? "0 0 40px rgba(139,92,246,0.6)"
                    : isHover
                      ? "0 6px 18px rgba(0,0,0,0.15)"
                      : "0 0 0 rgba(0,0,0,0)"
                }}
                transition={{ type: "spring", stiffness: 200, damping: 18, repeat: isActive ? 0 : Infinity, repeatType: "mirror", duration: 0.6 }}
                whileHover={{ rotateX: 12, rotateY: -12, scale: 1.12 }}
                className={`
                  group relative w-full h-32 flex flex-col items-center justify-center rounded-2xl cursor-pointer
                  backdrop-blur-xl border transition
                  ${isActive ? "bg-purple-600 text-white" : "bg-white/10 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"}
                `}
              >
                {/* Tooltip */}
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100
                bg-black text-white text-xs px-2 py-1 rounded transition">
                  {item.name}
                </span>

                {/* Icon */}
                <Icon className="w-10 h-10" />
                <p className="text-[12px] font-bold pt-2">{item.name}</p>

                {/* Neon Ring Pulse */}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0.6, scale: 0.9 }}
                    animate={{ scale: [1, 1.08, 1], rotate: [0, 45, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="absolute rounded-full border border-purple-400 w-32 h-32 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                  />
                )}
              </motion.div>
            )
          })}
        </div>

        {/* --- RIGHT DETAIL PANEL --- */}
        <motion.div
          layout
          className="border rounded-3xl shadow-2xl p-8 min-h-[260px] bg-white/20 dark:bg-black/20 backdrop-blur-xl space-y-6 w-full"
        >
          {/* Years Experience */}
          <motion.div animate={{ scale: [1, 1.08, 1] }} transition={{ repeat: Infinity, duration: 3 }} className="flex items-start gap-4">
            <span className="text-7xl font-black text-purple-600">10</span>
            <p className="text-lg font-bold leading-tight">Years <br /> Experience <br /> Working</p>
          </motion.div>

          {/* Dynamic Content */}
          <AnimatePresence mode="popLayout">
            {active && (
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                className="space-y-2"
              >
                <h3 className="text-xl font-bold text-purple-600">{active.name}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{active.desc}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Call */}
          <div className="border-t border-purple-300 pt-4">
            <p className="text-xs uppercase text-purple-600 font-bold">Call us now</p>
            <motion.div animate={{ scale: [1,1.05,1] }} transition={{ duration: 2, repeat: Infinity }} className="flex items-center gap-3 mt-2 font-bold text-lg">
              <Phone className="w-6 h-6" />
              (+1)-800-555-6789
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ExperienceSection
