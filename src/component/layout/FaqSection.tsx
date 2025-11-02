import  { useState } from "react";
import { ChevronDown } from "lucide-react";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Animate UI?",
      answer:
        "Animate UI is a modern React animation toolkit that makes it easy to build fluid, interactive, and dynamic user interfaces using smooth motion effects.",
    },
    {
      question: "How is it different from other libraries?",
      answer:
        "Animate UI focuses on simplicity, speed, and flexibility. It uses native CSS transitions combined with React motion patterns — so animations feel buttery-smooth.",
    },
    {
      question: "Is Animate UI free to use?",
      answer:
        "Yes! Animate UI is completely free and open-source. You can use it in both personal and professional projects without any restrictions.",
    },
    {
      question: "Can I customize the animations?",
      answer:
        "Absolutely! You can customize animation speed, delay, direction, and even create your own presets to match your brand’s style.",
    },
  ];

  const toggle = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 transition-all duration-300">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8 tracking-tight">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${
                activeIndex === index ? "bg-white dark:bg-gray-800" : "bg-white/60 dark:bg-gray-900/60"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-5 text-left text-gray-800 dark:text-gray-100 font-semibold text-lg tracking-wide transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800/80"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`w-6 h-6 transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180 text-sky-500" : "text-gray-500"
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-5 pb-5 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
