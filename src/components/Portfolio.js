import { useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const xlf = require('../assets/xlf.png')
const notSoFast = require('../assets/notsofast.png')
const apes = require('../assets/apes.png')
const innovMDS = require('../assets/innovMDS.png')
const epicLarkis = require('../assets/epiclarkis.png')
const jgm = require('../assets/jgm.png')
const articleAstral = require('../assets/article_astral.png')
const articleChatGPT = require('../assets/article_chatGPT.png')
const bookAstral = require('../assets/book_astral.png')
const bookJob = require('../assets/book_job.png')

const Portfolio = () => {

    // Preview
    const xlfPreview =
        <Link to="https://xlfbeautifier.vercel.app/" target="_blank" className="preview-link">
            <img src={xlf} alt="xlf-app-preview" width={'500px'} height={'200px'} />
        </Link>
    const notSoFastPreview =
        <Link to="https://notsofast.netlify.app/" target="_blank" className="preview-link">
            <img src={notSoFast} alt="notsofast-app-preview" width={'500px'} height={'200px'} />
        </Link>
    const apesPreview =
        <Link to="https://www.adventapes.com/" target="_blank" className="preview-link">
            <img src={apes} alt="apes-site-preview" width={'500px'} height={'200px'} />
        </Link>
    const innovMDSPreview =
        <Link to="https://innovmds.vercel.app/" target="_blank" className="preview-link">
            <img src={innovMDS} alt="innovMDS-site-preview" width={'500px'} height={'200px'} />
        </Link>
    const epicLarkisPreview =
        <Link to="https://epiclarkis.netlify.app/" target="_blank" className="preview-link">
            <img src={epicLarkis} alt="epiclarkis-site-preview" width={'500px'} height={'200px'} />
        </Link>
    const jgmPreview =
        <Link to="https://jgmphilippines.com/" target="_blank" className="preview-link">
            <img src={jgm} alt="jgm-site-preview" width={'500px'} height={'200px'} />
        </Link>
    const articleAstralPreview =
        <Link to="https://medium.com/@larkis/conscious-astral-projection-a-primer-by-larkis-b256aa50cfbd" target="_blank" className="preview-link">
            <img src={articleAstral} alt="astral-article-preview" width={'500px'} height={'200px'} />
        </Link>
    const articleChatGPTPreview =
        <Link to="https://medium.com/@larkis/i-made-a-book-with-chatgpt-and-its-on-sale-in-amazon-e3a99d744b45" target="_blank" className="preview-link">
            <img src={articleChatGPT} alt="chatGPT-article-preview" width={'500px'} height={'200px'} />
        </Link>
    const bookAstralPreview =
        <Link to="https://www.amazon.com/dp/B0C7D397JS" target="_blank" className="preview-link">
            <img src={bookAstral} alt="astral-book-preview" width={'500px'} height={'200px'} />
        </Link>
    const bookJobPreview =
        <Link to="https://www.amazon.com/dp/B0C8GNWPTL" target="_blank" className="preview-link">
            <img src={bookJob} alt="job-book-preview" width={'500px'} height={'200px'} />
        </Link>

    // App
    const xlfTitleClick = () => {
        document.getElementById('xlf-title').classList.add('active')
        document.getElementById('xlf-title').classList.remove('inactive')
        document.getElementById('notSoFast-title').classList.add('inactive')
        setPreview(xlfPreview)
        setDetails(xlfDetails)
        setTags(xlfTags)
    }

    const notSoFastTitleClick = () => {
        document.getElementById('notSoFast-title').classList.add('active')
        document.getElementById('notSoFast-title').classList.remove('inactive')
        document.getElementById('xlf-title').classList.add('inactive')
        setPreview(notSoFastPreview)
        setDetails(notSoFastDetails)
        setTags(notSoFastTags)
    }

    const xlfTitle = <div className="d-flex">
        <h1 id="notSoFast-title" className="inactive me-5" onClick={notSoFastTitleClick}>not so fast!</h1>
        <h1 id="xlf-title" className="active" onClick={xlfTitleClick}>xlf beautifier</h1>
    </div>

    // Website
    const apesTitleClick = () => {
        document.getElementById('apes-title').classList.add('active')
        document.getElementById('apes-title').classList.remove('inactive')
        document.getElementById('innovMDS-title').classList.add('inactive')
        document.getElementById('epicLarkis-title').classList.add('inactive')
        document.getElementById('jgm-title').classList.add('inactive')
        setPreview(apesPreview)
        setDetails(apesDetails)
        setTags(apesTags)
    }

    const innovMDSTitleClick = () => {
        document.getElementById('innovMDS-title').classList.add('active')
        document.getElementById('innovMDS-title').classList.remove('inactive')
        document.getElementById('apes-title').classList.add('inactive')
        document.getElementById('epicLarkis-title').classList.add('inactive')
        document.getElementById('jgm-title').classList.add('inactive')
        setPreview(innovMDSPreview)
        setDetails(innovMDSDetails)
        setTags(innovMDSTags)
    }

    const epicLarkisTitleClick = () => {
        document.getElementById('epicLarkis-title').classList.add('active')
        document.getElementById('epicLarkis-title').classList.remove('inactive')
        document.getElementById('innovMDS-title').classList.add('inactive')
        document.getElementById('apes-title').classList.add('inactive')
        document.getElementById('jgm-title').classList.add('inactive')
        setPreview(epicLarkisPreview)
        setDetails(epicLarkisDetails)
        setTags(epicLarkisTags)
    }

    const jgmTitleClick = () => {
        document.getElementById('jgm-title').classList.add('active')
        document.getElementById('jgm-title').classList.remove('inactive')
        document.getElementById('epicLarkis-title').classList.add('inactive')
        document.getElementById('innovMDS-title').classList.add('inactive')
        document.getElementById('apes-title').classList.add('inactive')
        setPreview(jgmPreview)
        setDetails(jgmDetails)
        setTags(jgmTags)
    }

    const apesTitle = <div className="d-flex">
        <h1 id="jgm-title" className="inactive me-5" onClick={jgmTitleClick}>jgm philippines</h1>
        <h1 id="epicLarkis-title" className="inactive me-5" onClick={epicLarkisTitleClick}>epic larkis</h1>
        <h1 id="innovMDS-title" className="inactive me-5" onClick={innovMDSTitleClick}>innovMDS</h1>
        <h1 id="apes-title" className="active" onClick={apesTitleClick}>adventapes NFT</h1>
    </div>

    // Article
    const astralTitleClick = () => {
        document.getElementById('article-astral-title').classList.add('active')
        document.getElementById('article-astral-title').classList.remove('inactive')
        document.getElementById('article-chatGPT-title').classList.add('inactive')
        setPreview(articleAstralPreview)
        setDetails(articleAstralDetails)
        setTags(articleAstralTags)
    }

    const chatGPTTitleClick = () => {
        document.getElementById('article-chatGPT-title').classList.add('active')
        document.getElementById('article-chatGPT-title').classList.remove('inactive')
        document.getElementById('article-astral-title').classList.add('inactive')
        setPreview(articleChatGPTPreview)
        setDetails(articleChatGPTDetails)
        setTags(articleChatGPTTags)
    }
    
    const articleAstralTitle = <div className="d-flex">
        <h1 id="article-chatGPT-title" className="inactive me-5" onClick={chatGPTTitleClick}>write a book with ChatGPT</h1>
        <h1 id="article-astral-title" className="active" onClick={astralTitleClick}>simplified astral projection</h1>
    </div>

    // Book
    const bookAstralTitleClick = () => {
        document.getElementById('book-astral-title').classList.add('active')
        document.getElementById('book-astral-title').classList.remove('inactive')
        document.getElementById('book-job-title').classList.add('inactive')
        setPreview(bookAstralPreview)
        setDetails(bookAstralDetails)
        setTags(bookAstralTags)
    }

    const bookChatGPTTitleClick = () => {
        document.getElementById('book-job-title').classList.add('active')
        document.getElementById('book-job-title').classList.remove('inactive')
        document.getElementById('book-astral-title').classList.add('inactive')
        setPreview(bookJobPreview)
        setDetails(bookJobDetails)
        setTags(bookJobTags)
    }

    const bookAstralTitle = <div className="d-flex">
        <h1 id="book-job-title" className="inactive me-5" onClick={bookChatGPTTitleClick}>unlocking success</h1>
        <h1 id="book-astral-title" className="active" onClick={bookAstralTitleClick}>exploring the boundless realms</h1>
    </div>

    // Details
    const xlfDetails = 
        <p>
            a safe and simple web app to beautify XLF files
        </p>
    const notSoFastDetails = 
    <p>
        prevents accidental closing of chrome browser window
    </p>
    const apesDetails = 
    <p>
        brand website for advent apes NFT project
    </p>
    const innovMDSDetails = 
    <p>
        brand website for innovMDS business idea
    </p>
    const epicLarkisDetails = 
    <p>
        my first personal website
    </p>
    const jgmDetails = 
    <p>
        first brand website developed for a paying client
    </p>
    const articleAstralDetails = 
    <p>
        article about astral projection, other dimensions, and reality
    </p>
    const articleChatGPTDetails = 
    <p>
        article about writing a book using ChatGPT
    </p>
    const bookAstralDetails = 
    <p>
        non-fiction book about astral projection co-authored with ChatGPT
    </p>
    const bookJobDetails = 
    <p>
        non-fiction book about landing your dream job co-authored with ChatGPT
    </p>

    // Tags
    const xlfTags = 
        <p>
            react, javascript, html, css, bootstrap, npm, git, github, vercel
        </p>
    const notSoFastTags = 
        <p>
            javascript, html, css, bootstrap, netlify
        </p>
    const apesTags = 
        <p>
            html, css, bootstrap, github, vercel, solidity, solana, nft, crypto
        </p>
    const innovMDSTags = 
        <p>
            html, css, bootstrap, github, vercel
        </p>
    const epicLarkisTags = 
        <p>
            html, css, bootstrap, github, netlify
        </p>
    const jgmTags = 
        <p>
            html, css, javascript, bootstrap
        </p>
    const articleAstralTags = 
        <p>
            personal musings about reality and other dimensions
        </p>
    const articleChatGPTTags = 
        <p>
            guide on using AI in writing a book and selling it on Amazon
        </p>
    const bookAstralTags = 
        <p>
            an experiment with using AI in writing a book and selling it on Amazon
        </p>
    const bookJobTags = 
        <p>
            an experiment with using AI in writing a book and selling it on Amazon
        </p>
    
    const [preview, setPreview] = useState(xlfPreview)
    const [title, setTitle] = useState(xlfTitle)
    const [details, setDetails] = useState(xlfDetails)
    const [tags, setTags] = useState(xlfTags)

    const appHandleClick = () => {
        setPreview(xlfPreview)
        setTitle(xlfTitle)
        setDetails(xlfDetails)
        setTags(xlfTags)
        document.getElementById('book').classList.remove('active')
        document.getElementById('article').classList.remove('active')
        document.getElementById('website').classList.remove('active')
        document.getElementById('app').classList.add('active')
    }

    const websiteHandleClick = () => {
        setPreview(apesPreview)
        setTitle(apesTitle)
        setDetails(apesDetails)
        setTags(apesTags)
        document.getElementById('book').classList.remove('active')
        document.getElementById('article').classList.remove('active')
        document.getElementById('website').classList.add('active')
        document.getElementById('app').classList.remove('active')
    }

    const articleHandleClick = () => {
        setPreview(articleAstralPreview)
        setTitle(articleAstralTitle)
        setDetails(articleAstralDetails)
        setTags(articleAstralTags)
        document.getElementById('book').classList.remove('active')
        document.getElementById('article').classList.add('active')
        document.getElementById('website').classList.remove('active')
        document.getElementById('app').classList.remove('active')
    }

    const bookHandleClick = () => {
        setPreview(bookAstralPreview)
        setTitle(bookAstralTitle)
        setDetails(bookAstralDetails)
        setTags(bookAstralTags)
        document.getElementById('book').classList.add('active')
        document.getElementById('article').classList.remove('active')
        document.getElementById('website').classList.remove('active')
        document.getElementById('app').classList.remove('active')
    }

    return (
        <div className="portfolio">
            <Logo />
            <div className="timeline">
                <h1 onClick={bookHandleClick}><span id="book">book</span></h1>
                <h1 onClick={articleHandleClick}><span id="article">article</span></h1>
                <h1 onClick={websiteHandleClick}><span id="website">website</span></h1>
                <h1 onClick={appHandleClick}><span id="app" className="active">app</span></h1>
            </div>
            <div className="portfolio">
                <div className="portfolio-preview">{preview}</div>               
                <div className="portfolio-title">{title}</div>
                <div className="portfolio-details">{details}</div>
                <div className="portfolio-tags">{tags}</div>
            </div>
        </div>
    );
}
 
export default Portfolio;