import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuraNotes.css';

/* ── SVG Icons ─────────────────────────────────────────────────── */
const IconBook = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
);
const IconFlame = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.5 14.5A6 6 0 0 0 15 21a6 6 0 0 0 1-11.95C14.5 6 12 3 12 3s-1 4-4 5.5c-1.5.8-2.5 2.2-2.5 4 0 .7.2 1.4.5 2z" />
    </svg>
);
const IconBot = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="5" r="2" /><path d="M12 7v4" /><line x1="8" y1="16" x2="8" y2="16" /><line x1="16" y1="16" x2="16" y2="16" />
    </svg>
);
const IconPen = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
);
const IconShield = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
);
const IconBarChart = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" />
    </svg>
);

/* Stat icons */
const IconSmartphone = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
);
const IconBrain = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.14z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.14z" />
    </svg>
);
const IconTrophy = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="8 17 12 21 16 17" /><line x1="12" y1="12" x2="12" y2="21" />
        <path d="M20.88 18.09A5 5 0 0 0 18 9h-2.26A10 10 0 0 1 3.25 5.79M6.57 17.28A10 10 0 0 0 6 9H4a5 5 0 0 0-3.21 8.78" />
    </svg>
);
const IconZap = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
);
const IconLock = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
);

/* Tech icons */
const IconReact = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23 23 20.46">
        <circle r="2.05" fill="currentColor"/>
        <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
    </svg>
);
const IconNode = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5"/>
        <polyline points="12 22 12 15.5"/>
        <polyline points="22 8.5 12 15.5 2 8.5"/>
        <line x1="2" y1="15.5" x2="12" y2="8.5"/>
        <line x1="22" y1="15.5" x2="12" y2="8.5"/>
    </svg>
);
const IconServer = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
        <line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
    </svg>
);
const IconDatabase = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
    </svg>
);
const IconSparkles = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
    </svg>
);
const IconKey = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
    </svg>
);
const IconPhone = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.29 6.29l1.06-1.06a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
);
const IconCode = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
);

/* ── Data ───────────────────────────────────────────────────────── */
const features = [
    { Icon: IconBook,     title: 'Journal Entry Management', description: 'Create rich journal entries with text, images, and mood indicators. Date filtering lets you track emotional patterns over time.', color: '#38bdf8' },
    { Icon: IconFlame,    title: 'Streak Tracking',          description: 'Monitor your daily journaling habits with current and best streak counters. Milestone notifications keep you motivated.',       color: '#fb923c' },
    { Icon: IconBot,      title: 'AI-Powered Chat Assistant',description: 'Chat with an intelligent assistant that delivers personalised insights and reflections based on your journal history.',          color: '#f472b6' },
    { Icon: IconPen,      title: 'Daily Writing Prompts',    description: "Curated prompts are delivered daily to inspire meaningful reflection and help you overcome writer's block.",                    color: '#818cf8' },
    { Icon: IconShield,   title: 'Secure Authentication',    description: 'OTP-based password recovery and secure login keep your private thoughts safe at all times.',                                    color: '#4ade80' },
    { Icon: IconBarChart, title: 'Journaling Dashboard',     description: 'Access personal statistics, mood trends, and profile management all from an intuitive, centralised dashboard.',               color: '#a78bfa' },
];

const techStack = [
    { name: 'React Native', Icon: IconReact,    color: '#38bdf8', category: 'Frontend' },
    { name: 'Node.js',      Icon: IconNode,     color: '#4ade80', category: 'Backend'  },
    { name: 'Express.js',   Icon: IconServer,   color: '#818cf8', category: 'Backend'  },
    { name: 'MongoDB',      Icon: IconDatabase, color: '#4ade80', category: 'Database' },
    { name: 'Gemini AI',    Icon: IconSparkles, color: '#f472b6', category: 'AI'       },
    { name: 'JWT Auth',     Icon: IconKey,      color: '#fb923c', category: 'Security' },
    { name: 'OTP Verify',   Icon: IconPhone,    color: '#a78bfa', category: 'Security' },
    { name: 'REST APIs',    Icon: IconCode,     color: '#38bdf8', category: 'Backend'  },
];

const stats = [
    { Icon: IconSmartphone, value: 'Mobile',    label: 'Platform',    color: '#38bdf8' },
    { Icon: IconBrain,      value: 'Gemini AI', label: 'AI Engine',   color: '#f472b6' },
    { Icon: IconZap,        value: 'Streak',    label: 'Motivation',  color: '#fb923c' },
    { Icon: IconLock,       value: 'OTP',       label: 'Security',    color: '#4ade80' },
];

const screenshots = [
    { src: '/Samsung Galaxy S21 Ultra (1620x2880)/Samsung Galaxy S21 Ultra Screenshot 1.png', caption: 'Splash — A Journal Made Just for You' },
    { src: '/Samsung Galaxy S21 Ultra (1620x2880)/Samsung Galaxy S21 Ultra Screenshot 2.png', caption: 'Dashboard — Streak Tracking & Daily Prompts' },
    { src: '/Samsung Galaxy S21 Ultra (1620x2880)/Samsung Galaxy S21 Ultra Screenshot 3.png', caption: 'Journal — Browse & Filter Past Entries' },
    { src: '/Samsung Galaxy S21 Ultra (1620x2880)/Samsung Galaxy S21 Ultra Screenshot 4.png', caption: 'Entry Detail — Mood Indicators & Rich Text' },
    { src: '/Samsung Galaxy S21 Ultra (1620x2880)/Samsung Galaxy S21 Ultra Screenshot 5.png', caption: 'AI Assistant — Personalised Wellness Insights' },
];

/* ── Component ──────────────────────────────────────────────────── */
const AuraNotes = () => {
    const navigate = useNavigate();

    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="aura-page">

            {/* Hero */}
            <section className="aura-hero">
                <div className="aura-hero-glow" />
                <div className="container aura-hero-content">
                    <button className="aura-back-btn" onClick={() => { navigate('/'); setTimeout(() => { document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }, 100); }}>
                        ← Back to Projects
                    </button>
                    <div className="aura-badge">AI-Powered Mobile App</div>
                    <h1 className="aura-title">
                        Aura Notes
                        <span className="aura-title-gradient"> — Your Personal Journal</span>
                    </h1>
                    <p className="aura-subtitle">
                        A mobile-based journaling platform that combines mood tracking, streak motivation,
                        and an intelligent AI assistant to transform the way you reflect and grow.
                    </p>
                    <div className="aura-hero-tags aura-hero-tags--center">
                        {techStack.map((t) => (
                            <span key={t.name} className="aura-tech-tag" style={{ borderColor: t.color, color: t.color }}>
                                {t.name}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Screenshots */}
            <section className="aura-screenshots-section">
                <div className="container">
                    <h2 className="section-title">App Showcase</h2>
                    <div className="aura-screenshots-row">
                        {screenshots.map((s, i) => (
                            <div key={i} className="aura-screenshot-card" style={{ '--delay': `${i * 0.1}s` }}>
                                <div className="aura-phone-frame">
                                    <img src={s.src} alt={s.caption} />
                                </div>
                                <p className="aura-screenshot-caption">{s.caption}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Overview */}
            <section className="aura-overview-section">
                <div className="container aura-overview-grid">
                    <div className="aura-overview-text">
                        <h2 className="aura-section-heading">What is Aura Notes?</h2>
                        <p>
                            Aura Notes replaces traditional paper diaries with a centralised digital platform designed
                            for security, efficiency, and ease of use. The app supports individuals in managing journal
                            entries, tracking moods, maintaining streaks, and receiving AI-powered insights — all in one place.
                        </p>
                        <p>
                            Built with <strong>React Native</strong> on the frontend and a <strong>Node.js + Express</strong> backend,
                            the system integrates <strong>Gemini AI</strong> to power a context-aware chat assistant that reads
                            your journal history to offer genuinely personalised wellness guidance.
                        </p>
                    </div>
                    <div className="aura-stats-grid">
                        {stats.map(({ Icon, value, label, color }) => (
                            <div key={label} className="aura-stat-card" style={{ '--accent': color }}>
                                <div className="aura-stat-icon" style={{ color }}>
                                    <Icon />
                                </div>
                                <span className="aura-stat-value">{value}</span>
                                <span className="aura-stat-label">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="aura-features-section">
                <div className="container">
                    <h2 className="section-title">Key Features</h2>
                    <div className="aura-features-grid">
                        {features.map(({ Icon, title, description, color }, i) => (
                            <div key={i} className="aura-feature-card" style={{ '--delay': `${i * 0.08}s`, '--accent': color }}>
                                <div className="aura-feature-icon" style={{ color }}>
                                    <Icon />
                                </div>
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="aura-tech-section">
                <div className="container">
                    <h2 className="section-title">Tech Stack</h2>
                    <div className="aura-tech-grid">
                        {techStack.map(({ name, Icon, color, category }) => (
                            <div key={name} className="aura-tech-card" style={{ '--accent': color }}>
                                <div className="aura-tech-icon" style={{ color }}>
                                    <Icon />
                                </div>
                                <div className="aura-tech-info">
                                    <span className="aura-tech-name">{name}</span>
                                    <span className="aura-tech-category">{category}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AuraNotes;
