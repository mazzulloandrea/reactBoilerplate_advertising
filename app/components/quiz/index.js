import logo1 from '../../assets/images/logo1.jpg';
import logo2 from '../../assets/images/logo2.jpg';
import logo3 from '../../assets/images/logo3.jpg';
import logo4 from '../../assets/images/logo4.jpg';
import logo5 from '../../assets/images/logo5.jpg';
import logo6 from '../../assets/images/logo6.jpg';
import './style.css';

function Quiz() {
  return (
    <div className="containerQuiz">
      <div className="text">Se indovini è tua</div>
      <div className="logoContainer">
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
        <img src={logo5} alt="" />
        <img src={logo6} alt="" />
      </div>
    </div>
  );
}

export default Quiz;