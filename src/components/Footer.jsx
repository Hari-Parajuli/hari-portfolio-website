import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <p>&copy; {new Date().getFullYear()} Hari Parajuli. All rights reserved.</p>
                <div className="social-links">
                    <a href="https://github.com/Hari-Parajuli" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>
                    <a href="https://www.linkedin.com/in/hariparajuli/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
                    <a href="https://www.instagram.com/hareeparajuli/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
