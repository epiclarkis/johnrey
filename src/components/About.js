import Logo from "./Logo";

const About = () => {
    const name = 'epiclarkis'
    const domain = 'gmail.com'
    const symbol = '@'
    return (
        <div className="about">
            <Logo />
            <div className="about-me">
                <p>i'm <span className="highlight">johnrey</span>, 34, he/him, born and raised in the philippines <br />
                i work remotely as an independent contractor at a SaaS company <br />
                i finished secondary school and studied web dev on my own <br />
                i do web development as a hobby <br />
                i built this website to practice my newly acquired skill in <a href="https://react.dev/" target="_blank">react</a> <br />
                if you have any questions, feel free to <a href={`mailto: ${name + symbol + domain}`}>email me</a>
                </p>
                <p className="mt-5">get a copy of my <a href="https://drive.google.com/file/d/16FILexkoCstOQGqXEC1v65STW2pALROE/view?usp=sharing" target="_blank">latest resume</a></p>
            </div>
        </div>
    );
}
 
export default About;