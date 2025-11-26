import './About.css';

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I am Hari Parajuli, a motivated problem-solver and tech enthusiast with a strong passion for web development and emerging technologies. I enjoy exploring new tools, building practical solutions, and continuously improving my skills through real-world projects.
                        </p>
                        <p>
                            Alongside development, I have been creating tech-focused content on my YouTube channel for over five years, helping others learn and stay updated with technology. I also have hands-on experience in Android app development and can design clean visuals such as logos and banners.
                        </p>

                        <div className="education-section" style={{ marginTop: '2rem' }}>
                            <h3>Education</h3>
                            <div className="education-item" style={{ marginBottom: '1rem' }}>
                                <h4>Bachelor’s of Information Management</h4>
                                <p className="text-secondary">NATIONAL COLLEGE OF COMPUTER STUDIES | 2021- 2026</p>
                            </div>
                            <div className="education-item">
                                <h4>Computer Science</h4>
                                <p className="text-secondary">NCCS Secondary School | 2019 - 2021</p>
                            </div>
                        </div>

                        <div className="achievements-section" style={{ marginTop: '2rem' }}>
                            <h3>Achievements</h3>
                            <ul style={{ listStyle: 'disc', paddingLeft: '1.2rem', color: 'var(--color-text-secondary)' }}>
                                <li>Published multiple Android applications on the Google Play Store.</li>
                                <li>Built and maintained a tech YouTube channel (Tricky4you) for 5+ years.</li>
                                <li>4+ years of experience as a freelancer on Fiverr.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="skills-container">
                        <h3>My Skills</h3>
                        <div className="skills-grid">
                            {['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Python', 'C', 'JAVA', 'PHP', 'Django', 'React.js', 'Node.js', 'Express.js', 'Next.js', 'Bootstrap', 'Tailwind CSS', 'Laravel', 'MongoDB', 'MySQL', 'Git', 'Figma'].map((skill) => (
                                <div key={skill} className="skill-item">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
