
import HeroSection from '../components/heroSection'


const Home = () => {
  const heroSectionHeadingOne ="Welcome__my__name__is..." 
  const heroSectionHeadingTwo = "Patel Raj AtulKumar" 
  const heroSectionHeadingThree  ="Full stack Developer & Machine Learning Engineer"
  return (
    <HeroSection heroSectionHeadingOne={heroSectionHeadingOne} heroSectionHeadingTwo={heroSectionHeadingTwo} heroSectionHeadingThree={heroSectionHeadingThree}/>
  )
}

export default Home