import AboutUs from '../components/AboutUs';
import Events from '../components/Events';
import Footer from '../components/Footer';
import Groups from '../components/Groups';
import Navbar from '../components/Navbar';
import Membership from '../components/Membership';
import NavHeadline from '../components/NavHeadline';
import Offers from '../components/Offers';
import PersonalTraining from '../components/PersonalTraining';
import Slider from '../components/Slider';
import StrengthTraining from '../components/StrengthTraining';

function Landingpage() {
  return (
    <>
      <NavHeadline />
      <Navbar />
      <Slider />
      <Offers />
      <Groups />
      <StrengthTraining />
      <PersonalTraining />
      <Events />
      <Membership />
      <AboutUs />
      <Footer />
    </>
  );
}

export default Landingpage;