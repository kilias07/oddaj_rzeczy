// import { NavHashLink} from 'react-router-hash-link';
// const Navbar = () => {
//   return (
//     <nav>
//       <h1>to jest navbar</h1>
//       <ul>
//         <li>
//         <NavHashLink smooth to="/#section_1" activeClassName="selected" activeStyle={{color: "red"}} >
//           link1
//         </NavHashLink>
//         </li>
//         <li>
//         <NavHashLink smooth to="/#section_2" activeClassName="selected" activeStyle={{color: "red"}}>
//           link2
//         </NavHashLink>
//         </li>
//         <li>
//         <NavHashLink smooth to="/#section_3" activeClassName="selected" activeStyle={{color: "red"}}>
//           link3
//         </NavHashLink>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;



import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const Navbar = () => {
  const onSetActiveHandler = () => {
    
  }

  return (
    <nav style={{position: "fixed", height: '70px', border: '4px solid blue', width: '100%'}}>
      <h1>to jest navbar</h1>
      <ul>
      <li>
        <Link hashSpy spy activeClass="green" to="section_1" smooth duration={500}>
          link1
        </Link>
        </li>
        <li>
        <Link hashSpy spy activeClass="green" to="section_2" smooth duration={500}>
          link2
        </Link>
        </li>
        <li>
        <Link hashSpy spy activeClass="green" to="section_3" smooth duration={500}>
          link3
        </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;