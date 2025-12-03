import profilePic from '../assets/profile-pic.png';
import resumePdf from '../assets/Hari_Parajuli_Resume.pdf';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <span className="greeting">Hello, I'm</span>
                    <h1 className="title">
                        Hari <span className="highlight">Parajuli</span>
                    </h1>
                    <p className="subtitle">
                        A motivated problem-solver and tech enthusiast with a strong passion for web development and emerging technologies.
                    </p>
                    <div className="hero-btns">
                        <a href="https://github.com/Hari-Parajuli" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Work</a>
                        <a href={resumePdf} download="Hari_Parajuli_Resume.pdf" className="btn btn-outline">Download Resume</a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="blob"></div>
                    <div className="blob blob-2"></div>
                    <img src={profilePic} alt="Hari Parajuli" className="hero-img" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
