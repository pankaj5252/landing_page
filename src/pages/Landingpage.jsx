import AboutUs from '../components/AboutUs.jsx';
import Footer from '../components/Footer.jsx';
import Groups from '../components/Groups.jsx';
import Navbar from '../components/Navbar.jsx';
import Membership from '../components/Membership.jsx';
import Category  from '../components/Category .jsx';
import Slider from '../components/Slider.jsx';

function Landingpage() {
  return (
    <>
      <Navbar />
      <Slider />
      <Category  />
      <Groups />
      <Membership />
      <AboutUs />
      <Footer />
    </>
  );
}

export default Landingpage;