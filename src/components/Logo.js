import { Link } from "react-router-dom";

const Logo = () => {

    const handleClick = () => {
        document.getElementById('about').classList.remove('active')
        document.getElementById('experience').classList.remove('active')
        document.getElementById('portfolio').classList.remove('active')
    }

    return (
        <div className="logo">
            <Link to="/" className="logo-link" >
                <h1 className="logo-text">hey! 👋🏻 <br /> i'm <span className="highlight">johnrey</span></h1>
            </Link>
        </div>
    );
}
 
export default Logo;