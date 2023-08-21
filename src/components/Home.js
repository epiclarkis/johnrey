import { useEffect } from "react";

const Home = () => {

    useEffect(() => {
        document.getElementById('about').classList.remove('active')
        document.getElementById('experience').classList.remove('active')
        document.getElementById('portfolio').classList.remove('active')
    }, [])

    return (
        <div className="hero bg">
            <h1 className="banner">hey! 👋🏻 <br /> i'm <span className="highlight">johnrey</span></h1>
            <p className="intro">
            an experienced <br />
            <span className="highlight">customer support</span> professional <br />
            with a background in <br />
            <span className="highlight">team management</span> and <br />
            <span className="highlight">web development</span>
            </p>
        </div>
    );
}
 
export default Home;