import { Link } from "react-router-dom";
import decoration from "../../assets/images/Decoration.svg";
import icon1 from "../../assets/images/Icon-1.svg";
import icon2 from "../../assets/images/Icon-2.svg";
import icon3 from "../../assets/images/Icon-3.svg";
import icon4 from "../../assets/images/Icon-4.svg";

const Section2 = () => {
  return (
    <div id="o_co_chodzi" className="explain">
      <h1>Wystarczą 4 proste kroki</h1>
      <img src={decoration} alt="decoration" />
      <div className="explain__fourColumns">
      <ul>
        <li>
          <img src={icon1} alt="T-shirt Icon" />
          <h3>Wybierz rzeczy</h3>
          <hr></hr>
          <p>ubrania, zabawki, sprzęt i inne</p>
        </li>
        <li>
          <img src={icon2} alt="bag Icon" />
          <h3>Spakuj je</h3>
          <hr></hr>
          <p>skorzystaj z worków na śmieci</p>
        </li>
        <li>
          <img src={icon3} alt="magnifier Icon" />
          <h3>Zdecyduj komu chcesz pomóc</h3>
          <hr></hr>
          <p>wybierz zaufane miejsce</p>
        </li>
        <li>
          <img src={icon4} alt="feedback Icon" />
          <h3>Zamów kuriera</h3>
          <hr></hr>
          <p>kurier przyjedzie w dogodnym momencie</p>
        </li>
      </ul>
      </div>
      <div className="explain__button">
      <Link to="/oddaj_rzeczy"> oddaj rzeczy</Link>
      </div>
    </div>
  );
};

export default Section2;
