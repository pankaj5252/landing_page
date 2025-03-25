import AboutUs from '../components/AboutUs.jsx';
import Events from '../components/Events.jsx';
import Footer from '../components/Footer.jsx';
import Groups from '../components/Groups.jsx';
import Navbar from '../components/Navbar.jsx';
import Membership from '../components/Membership.jsx';
import NavHeadline from '../components/NavHeadline.jsx';
import Offers from '../components/Offers.jsx';
import PersonalTraining from '../components/PersonalTraining.jsx';
import Slider from '../components/Slider.jsx';
import StrengthTraining from '../components/StrengthTraining.jsx';

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