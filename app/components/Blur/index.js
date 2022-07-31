import car from '../../assets/images/car.png';
import './style.css';

function Blur() {
  return (
    <div className="focus">
      <div className="focusMask">
        <div className="focusMaskInner">
          <img src={car} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Blur;