import './About.css';

const About = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: ["JavaScript", "TypeScript", "HTML", "CSS", "Python", "C", "Java", "PHP"]
        },
        {
            title: "Frameworks & Libraries",
            skills: ["React.js", "Next.js", "Django", "Node.js", "Express.js", "Bootstrap", "Tailwind CSS", "Laravel"]
        },
        {
            title: "Databases",
            skills: ["MongoDB", "MySQL"]
        },
        {
            title: "DevOps & Tools",
            skills: ["Git", "GitHub", "VS Code", "Postman"]
        },
        {
            title: "Backend & APIs",
            skills: ["REST API", "JWT", "OAuth", "JSON"]
        },
        {
            title: "Other",
            skills: ["Figma", "Canva", "API Integration", "Problem Solving", "Responsive Design"]
        }
    ];

    return (
        <section id="about" className="section about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-main">
                        <p className="intro-text">
                            I am Hari Parajuli, a motivated problem-solver and tech enthusiast with a strong passion for web development and emerging technologies. I enjoy exploring new tools, building practical solutions, and continuously improving my skills through real-world projects.
                        </p>
                        <p className="intro-text">
                            Alongside development, I have been creating tech-focused content on my YouTube channel for over five years, helping others learn and stay updated with technology. I also have hands-on experience in Android app development and can design clean visuals such as logos and banners.
                        </p>

                        <div className="info-section">
                            <div className="info-card">
                                <h3>Education</h3>
                                <div className="info-item">
                                    <h4>Bachelor's of Information Management</h4>
                                    <p>NATIONAL COLLEGE OF COMPUTER STUDIES | 2021- 2026</p>
                                </div>
                                <div className="info-item">
                                    <h4>Computer Science</h4>
                                    <p>NCCS Secondary School | 2019 - 2021</p>
                                </div>
                            </div>

                            <div className="info-card">
                                <h3>Achievements</h3>
                                <ul className="achievements-list">
                                    <li>Published multiple Android applications on the Google Play Store.</li>
                                    <li>Worked as a Web Developer for a diverse range of international clients across the USA, UK, Australia, Nepal, Chile, India, Sri Lanka, Egypt, Kenya, Morocco, Turkey, Ghana, and other regions.</li>
                                    <li>Built and maintained a tech YouTube channel (Tricky4you) for 5+ years.</li>
                                    <li>4+ years of experience as a freelancer on Fiverr.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="technical-skills">
                            <h3>Technical Skills</h3>
                            <div className="skills-grid">
                                {skillCategories.map((category, index) => (
                                    <div key={index} className="skill-category">
                                        <div className="category-title">
                                            <div className="title-accent"></div>
                                            <h4>{category.title}</h4>
                                        </div>
                                        <div className="skill-items">
                                            {category.skills.map((skill, skillIndex) => (
                                                <span key={skillIndex} className="skill-badge">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
