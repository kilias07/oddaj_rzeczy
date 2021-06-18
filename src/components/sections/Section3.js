import decoration from "../../assets/images/Decoration.svg";
import sign from "../../assets/images/Signature.svg";
const Section3 = () => {
  return (
    <div id="o_nas" className="about-us">
      <div className="about-us__left">
        <h1>O nas</h1>
        <img src={decoration} alt="decoration" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ipsum consequatur obcaecati quaerat, error saepe repellat.</p>
        <img src={sign} alt="signature" />
      </div>
      <div className="about-us__right">
      </div>
    </div>
  )
}

export default Section3;
