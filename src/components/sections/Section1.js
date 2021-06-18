import { Link } from "react-router-dom";
import decoration from "../../assets/images/Decoration.svg";
const Start = () => {
  return (
    <div id="start">
      <div className="hero">
        <div className="hero__container">
          <div className="hero__image"></div>
          <div className="hero__action">
            <div>
              <p>Zacznij pomagać!</p>
              <p>Oddaj niechciane rzeczy w zaufane ręce</p>
              <img src={decoration} alt="decoration"></img>
              <ul className="hero__buttons">
                <Link to="/oddaj_rzeczy">
                  <li>oddaj rzeczy</li>
                </Link>
                <Link to="/zbiorka">
                  <li> zorganizuj zbiórkę</li>{" "}
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="threeColumns">
        <div>
          <ul className="threeColumns__description">
            <li>
              <h1>10</h1>
              <h3>ODDANYCH WARUNKÓW</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur dipisc Pellentesque vel
                enim a elit viverra elementuma. Aliquam erat volutpat.
              </p>
            </li>
            <li>
              <h1>5</h1>
              <h3>WSPARTYCH ORGANIZACJI</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur dipisc Pellentesque vel
                enim a elit viverra elementuma. Aliquam erat volutpat.
              </p>
            </li>
            <li>
              <h1>7</h1>
              <h3>ZORGANIZOWANY ZBIÓREK</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur dipisc Pellentesque vel
                enim a elit viverra elementuma. Aliquam erat volutpat.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Start;
