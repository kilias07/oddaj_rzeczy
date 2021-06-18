import logoInstagram from '../../assets/images/Instagram.svg';
import logoFacebook from '../../assets/images/Facebook.svg';
const Footer = () => {
  return (
    <footer>
      <h1>Copyright by Kamil</h1>
      <img src={logoInstagram} alt="Logo Instagram" />
      <img src={logoFacebook} alt="Logo Facebook" />
    </footer>
  )
}

export default Footer
