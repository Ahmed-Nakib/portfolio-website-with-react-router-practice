
import About from "@/component/layout/About"
import Comment from "@/component/layout/Comment"
import ExperienceSection from "@/component/layout/ExperienceSection"
import FaqSection from "@/component/layout/FaqSection"
import Form from "@/component/layout/From"
import Hero from "@/component/layout/Hero"
import Service from "@/component/layout/Service"
import PortfolioSlider from "@/component/PortfolioSlider"

const HomePage = () => {
  return (
    <>
      <Hero/>
      <About />
      <ExperienceSection />
      <Service />
      <PortfolioSlider />
      <FaqSection/>
      <Comment />
      <Form />
    </>
  )
}

export default HomePage
