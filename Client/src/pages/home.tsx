
import HeroSection from '../components/heroSection'

interface homeProps{
  heroSectionHeadingOne?: string;
  heroSectionHeadingTwo?: string;
  heroSectionHeadingThree?: string;
}

const Home = ({heroSectionHeadingOne, heroSectionHeadingTwo, heroSectionHeadingThree}:homeProps) => {
  heroSectionHeadingOne === "" ? "Welcome my name is...|" : heroSectionHeadingOne;
  heroSectionHeadingTwo === "" ? "Patel Raj AtulKumar" : heroSectionHeadingTwo;
  heroSectionHeadingThree === "" ? "Full stack Developer And Machine Learning Engineer": heroSectionHeadingThree;
  return (
    <HeroSection heroSectionHeadingOne={heroSectionHeadingOne} heroSectionHeadingTwo={heroSectionHeadingTwo} heroSectionHeadingThree={heroSectionHeadingThree}/>
  )
}

export default Home