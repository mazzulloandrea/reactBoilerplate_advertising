import close from '../../assets/images/close.png';
import './style.css';

function CloseButton({ closeAnimation }) {
  return (
    <div className="containerCloseBtn" onClick={() => closeAnimation()}>
      <img src={close} alt="" />
    </div>
  )
}

export default CloseButton;