import logo from '../../../assets/images/logo.png';
const LogoComponent = ({ h = '56px', ml = "8px" }) => {
    return (
        <img src={logo} alt="Logo" style={{ height: h, marginRight: ml }} />
    )
}

export default LogoComponent