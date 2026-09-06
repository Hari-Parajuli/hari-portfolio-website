import { useState, useEffect } from 'react';
import './Achievements.css';

// Import Assets
import digitalMarketingCert from '../assets/digital_marketing_certificate.png';
import crownTraderCert from '../assets/crown_trader_certificate.png';
import eliteTraderCert from '../assets/elite_trader_certificate.png';
import youtubeLogo from '../assets/Youtube_logo.png';
import instagramLogo from '../assets/instagram.jpg';
import googleLogo from '../assets/google.png';
import fundedNextLogo from '../assets/fundednext.jpg';
import nccsLogo from '../assets/nccs.png';

// Import Project Certificates
import towerOfHanoiCert from '../assets/Tower_of_Hanoi.jpg';
import toDoListCert from '../assets/To_Do_List.jpg';
import taskManagementCert from '../assets/Task_Management_System.jpg';
import tableTennisCert from '../assets/Table_Tennis.jpg';
import portfolioCert from '../assets/Portfolio_Website.jpg';
import passwordGenCert from '../assets/Password_Generator.jpg';
import orangeHRMCert from '../assets/Orange_HRM.jpg';
import bankAccountCert from '../assets/Customer_Bank_Account_Management_System.jpg';

const Achievements = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModal = (cert) => {
    setSelectedCert(cert);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedCert(null);
    document.body.style.overflow = 'auto';
  };

  const certificates = [
    {
      id: 1,
      title: "The Fundamentals of Digital Marketing",
      issuer: "Google",
      logo: googleLogo,
      image: digitalMarketingCert,
      description: "Certification for completing the Fundamentals of Digital Marketing course."
    },
    {
      id: 2,
      title: "FundedNext Crown Trader",
      issuer: "FundedNext",
      logo: fundedNextLogo,
      image: crownTraderCert,
      description: "Achievement certificate from FundedNext."
    },
    {
      id: 3,
      title: "FundedNext Elite Trader",
      issuer: "FundedNext",
      logo: fundedNextLogo,
      image: eliteTraderCert,
      description: "Achievement certificate from FundedNext."
    },
    {
      id: 4,
      title: "Tower of Hanoi",
      issuer: "NCCS",
      logo: nccsLogo,
      image: towerOfHanoiCert,
      description: "Recursive puzzle solving application."
    },
    {
      id: 5,
      title: "To-Do List Application",
      issuer: "NCCS",
      logo: nccsLogo,
      image: toDoListCert,
      description: "Task management web application."
    },
    {
      id: 6,
      title: "Task Management System",
      issuer: "NCCS",
      logo: nccsLogo,
      image: taskManagementCert,
      description: "Comprehensive task management system usign PHP."
    },
    {
      id: 7,
      title: "Table Tennis - 3rd Position",
      issuer: "NCCS - Sports Achievement",
      logo: nccsLogo,
      image: tableTennisCert,
      description: "Secured 3rd position in table tennis competition."
    },
    {
      id: 8,
      title: "Portfolio Website",
      issuer: "NCCS",
      logo: nccsLogo,
      image: portfolioCert,
      description: "Personal portfolio website using CMS (WordPress)."
    },
    {
      id: 9,
      title: "Password Generator",
      issuer: "NCCS",
      logo: nccsLogo,
      image: passwordGenCert,
      description: "Secure password generation tool using Python."
    },
    {
      id: 10,
      title: "Orange HRM - QA Testing",
      issuer: "NCCS",
      logo: nccsLogo,
      image: orangeHRMCert,
      description: "Automated QA testing."
    },
    {
      id: 11,
      title: "Customer Bank Account Management",
      issuer: "NCCS",
      logo: nccsLogo,
      image: bankAccountCert,
      description: "Bank account management system using JAVA (Console Based)."
    }
  ];

  const socials = [
    {
      name: "YouTube",
      link: "https://www.youtube.com/@Hari_Parajuli",
      icon: youtubeLogo,
      label: "Subscribe on YouTube",
      count: "4.3K+",
      subLabel: "Subscribers"
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/hareeparajuli/",
      icon: instagramLogo,
      label: "Follow on Instagram",
      count: "25K+",
      subLabel: "Followers"
    }
  ];

  return (
    <div className="achievements-page section">
      <div className="container">
        <h2 className="section-title">Achievements & Certifications</h2>

        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="certificate-card" onClick={() => openModal(cert)}>
              <div className="cert-image-container">
                <img src={cert.image} alt={cert.title} className="cert-image" />
                <div className="view-overlay">
                  <span>View Certificate</span>
                </div>
              </div>
              <div className="cert-content">
                <h3>{cert.title}</h3>
                <div className="issuer-wrapper">
                  <img src={cert.logo} alt={cert.issuer} className="issuer-logo" />
                  <p className="issuer">{cert.issuer}</p>
                </div>
                <p className="description">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="socials-section">
          <h3 className="section-title" style={{ fontSize: '2rem', marginTop: '4rem' }}>Community</h3>
          <div className="socials-grid">
            {socials.map((social) => (
              <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer" className="social-card">
                <div className="social-icon-wrapper image-icon">
                  <img src={social.icon} alt={social.name} />
                </div>
                <div className="social-info">
                  <span className="social-count">{social.count}</span>
                  <span className="social-sublabel">{social.subLabel}</span>
                  <span className="social-action">{social.label}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedCert && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>&times;</button>
            <img src={selectedCert.image} alt={selectedCert.title} className="modal-image" />
            <div className="modal-info">
              <h3>{selectedCert.title}</h3>
              <p>{selectedCert.issuer}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Achievements;
