import { useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const articulate = require('../assets/articulate.png')
const teamspan = require('../assets/tslogo.png')
const avenue = require('../assets/avenue.webp')
const concentrix = require('../assets/concentrix.png')

const Experience = () => {

    // logo
    const articulateLogo =
        <Link to="https://articulate.com/" target="_blank" className="preview-link">
            <img src={articulate} alt="articulate-logo" width={'500px'} height={'90px'}/>
        </Link>
    const teamspanLogo =
        <Link to="https://www.teamspan.com/" target="_blank" className="preview-link">
            <img src={teamspan} alt="teamspan-logo" width={'500px'} height={'90px'}/>
        </Link>
    const avenueLogo = 
        <Link to="https://avenuetransport.com/us/" target="_blank" className="preview-link">
            <img src={avenue} alt="avenue-logo" width={'500px'} height={'90px'}/>
        </Link>
    const concentrixLogo =
        <Link to="https://www.concentrix.com/" target="_blank" className="preview-link">
            <img src={concentrix} alt="concentrix-logo" width={'500px'} height={'90px'}/>
        </Link>

    // job title
    const articulateTitle = <h1 className="active">sr tech support engineer</h1>
    const teamspanTitle = <h1 className="active">team manager</h1>
    const avenueTitle = <h1 className="active">dispatch coordinator</h1>
    const concentrixTitle = <h1 className="active">sales, customer service, tech support</h1>

    // company
    const articulateCompany =
        <Link to="https://articulate.com/" target="_blank" className="preview-link">
            <h1>articulate (SaaS)</h1>
        </Link>
    const teamspanCompany =
        <Link to="https://www.teamspan.com/" target="_blank" className="preview-link">
            <h1>teamspan (BPO)</h1>
        </Link>
    const avenueCompany =
        <Link to="https://avenuetransport.com/us/" target="_blank" className="preview-link">
            <h1>avenue transport (freight)</h1>
        </Link>
    const concentrixCompany =
        <Link to="https://www.concentrix.com/" target="_blank" className="preview-link">
            <h1>concentrix (BPO)</h1>
        </Link>

    // job type
    const remote = <h1>remote, full-time</h1>
    const office = <h1>office-based, full-time</h1>

    // job details
    const articulateDetails =
        <p>
            answer chat and emails <br />
            reproduce and isolate bugs <br />
            write high-quality bug reports <br />
            contribute to knowledge base
        </p>
    
    const teamspanDetails = 
    <p>
        conduct training and development <br />
        pioneered a new line of business <br />
        handle clerical and admin tasks <br />
        create tickets for dispatch
    </p>

    const avenueDetails = 
    <p>
        handle dispatch and scheduling <br />
        email and data entry <br />
        real-time tracking of truckers&#39; trips <br />
        provide assistance to truckers
    </p>

    const concentrixDetails = 
    <p>
        take calls and manage customer accounts <br />
        cs, billing, tech support, and inbound sales <br />
        handle training and development <br />
        of new hires as a subject matter expert
    </p>

    const [logo, setLogo] = useState(articulateLogo)
    const [title, setTitle] = useState(articulateTitle)
    const [company, setCompany] = useState(articulateCompany)
    const [type, setType] = useState(remote)
    const [details, setDetails] = useState(articulateDetails)
    
    const articulateClick = () => {
        setLogo(articulateLogo)
        setTitle(articulateTitle)
        setCompany(articulateCompany)
        setType(remote)
        setDetails(articulateDetails)
        document.getElementById("articulate").classList.add('active')
        document.getElementById("teamspan").classList.remove('active')
        document.getElementById("avenue").classList.remove('active')
        document.getElementById("concentrix").classList.remove('active')
    }

    const teamspanClick = () => {
        setLogo(teamspanLogo)
        setTitle(teamspanTitle)
        setCompany(teamspanCompany)
        setType(office)
        setDetails(teamspanDetails)
        document.getElementById("teamspan").classList.add('active')
        document.getElementById("articulate").classList.remove('active')
        document.getElementById("avenue").classList.remove('active')
        document.getElementById("concentrix").classList.remove('active')
    }

    const avenueClick = () => {
        setLogo(avenueLogo)
        setTitle(avenueTitle)
        setCompany(avenueCompany)
        setType(remote)
        setDetails(avenueDetails)
        document.getElementById("avenue").classList.add('active')
        document.getElementById("teamspan").classList.remove('active')
        document.getElementById("articulate").classList.remove('active')
        document.getElementById("concentrix").classList.remove('active')
    }

    const concentrixClick = () => {
        setLogo(concentrixLogo)
        setTitle(concentrixTitle)
        setCompany(concentrixCompany)
        setType(office)
        setDetails(concentrixDetails)
        document.getElementById("concentrix").classList.add('active')   
        document.getElementById("avenue").classList.remove('active')
        document.getElementById("teamspan").classList.remove('active')
        document.getElementById("articulate").classList.remove('active')
    }

    return (
        <div className="experience">
            <Logo />
            <div className="timeline">
                <h1 onClick={concentrixClick}><span id="concentrix">jun '11 - oct '15</span></h1>
                <h1 onClick={avenueClick}><span id="avenue">dec '15 - jan '17</span></h1>
                <h1 onClick={teamspanClick}><span id="teamspan">feb '17 - mar '20</span></h1>
                <h1 onClick={articulateClick}><span id="articulate" className="active">apr '20 - present</span></h1>
            </div>
            <div className="job">
                <div className="job-logo">{logo}</div>
                <div className="job-title">{title}</div>
                <div className="job-company">{company}</div>
                <div className="job-type">{type}</div>
                <div className="job-details">{details}</div>
            </div>
        </div>
    );
}
 
export default Experience;