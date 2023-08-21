import { Link } from "react-router-dom";

const Nav = () => {

    return (
        <div className="main-nav">
            <Link to="/experience" className="nav-item" id="experience" onClick={() => {
                document.getElementById('experience').classList.add('active')
                document.getElementById('portfolio').classList.remove('active')
                document.getElementById('about').classList.remove('active')
            }}>experience</Link>
            <Link to="/portfolio" className="nav-item" id="portfolio" onClick={() => {
                document.getElementById('experience').classList.remove('active')
                document.getElementById('portfolio').classList.add('active')
                document.getElementById('about').classList.remove('active')
            }}>portfolio</Link>
            <Link to="/about" className="nav-item" id="about" onClick={() => {
                document.getElementById('experience').classList.remove('active')
                document.getElementById('portfolio').classList.remove('active')
                document.getElementById('about').classList.add('active')
            }}>about</Link>
        </div>
    );
}
 
export default Nav;