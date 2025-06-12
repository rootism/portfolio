
import profilePic from "./shreyaaaa.jpg";
import logo1 from "./c.png";
import logo2 from "./cpp.png";
import logo3 from "./canva.png"; // Keep this path as per your file structure
import logo4 from "./css.png";
import logo5 from "./figma.png";
import logo6 from "./java.png";
import logo7 from "./kotlin.png";
import logo8 from "./python.png";
import logo9 from "./rea.png";
import logo10 from "./iitg.png";
import logo11 from "./website.png";
import logo12 from "./ecoedge.png";
import logo13 from "./port.png";
import logo14 from "./ethos.png";
import logo15 from "./thank.png";
import React, { useState, useEffect, useRef } from "react";

// Color palette: Sweet Serenity (Soft Pinks, Creams, Muted Greens/Blues)
const COLORS = {
  mainBackground: "#F5F0F6",      // Very light, warm off-white/pinkish-grey
  headerBackground: "#D8C7D8",    // Muted Lavender/Dusty Rose for header
  cardBackground: "#FFFFFF",      // Clean White for content cards
  headerText: "#5A4F6B",          // Soft Plum/Deep Lavender for header text
  accentText: "#E0909A",          // Muted Rose/Dusty Pink for primary accents
  secondaryAccent: "#B1D4B7",     // Soft Sage Green for secondary accents
  textDark: "#4A405F",            // Dark Plum/Eggplant for main body text
  textLight: "#7A708F",           // Muted Lilac for secondary text
  borderColor: "#E0D8EB",         // Light Lavender for subtle borders
  shadowLight: "rgba(0, 0, 0, 0.08)", // Soft, subtle shadow
  shadowAccent: "rgba(224, 144, 154, 0.3)", // Soft pinkish shadow for highlights
  navyblue: "#1E3A8A"
};
//--------------------------------------------------------------------------------------------------------------------------//
// New NavLink component to handle hover states


// This hook will help us detect if an element is currently visible on screen
const useOnScreen = (options) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Update our state when observer callback fires
      setIsVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isVisible];
};

// ... (rest of your existing imports and COLORS object)

// New NavLink component to handle hover states (already exists)
const NavLink = ({ href, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      style={{
        ...styles.navLink,
        color: isHovered ? COLORS.accentText : COLORS.headerText,
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'all 0.3s ease-in-out',
        textShadow: isHovered ? `0 2px 5px ${COLORS.shadowAccent}` : 'none',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </a>
  );
};

const Header = () => (
  <header style={styles.header}>
    <h1 style={styles.title}>
      PORTFOLIO <span style={styles.titleYear}>2024</span>
    </h1>
    <nav>
      <NavLink href="#about">About</NavLink>
      <NavLink href="#education">Education</NavLink>
      <NavLink href="#skills">Skills</NavLink>
      <NavLink href="#projects">Projects</NavLink>
      <NavLink href="#languages">Languages</NavLink>
      <NavLink href="#extracurriculars">Extracurriculars</NavLink>
      <NavLink href="#interests">Interests</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </nav>
  </header>
);

const About = () => (
  <section id="about" style={styles.section}>
    <h1 style={styles.aboutHelloText}>Hello!</h1>
    <div style={styles.aboutContainer}>
      <div>
        <img src={profilePic} alt="Shruti Mishra Profile" style={styles.profileImage} />
      </div>
      <div style={{ flex: 1 }}>
        <p style={styles.paragraph}>
          I’m Shruti Mishra, a Chemical Engineering undergrad at IIT Guwahati, passionate about building innovative, scalable web applications. Specializing in React with a keen eye for clean, practical design, I combine technical skills with data-driven analysis to solve real-world challenges. Committed to continuous learning and collaboration, I aim to deliver impactful and sustainable results in evolving industries.
        </p>
      </div>
    </div>
  </section>
);

const Education = () => (
  <section id="education" style={styles.section}>
    <h2 style={styles.sectionTitle}>Education</h2>
    <div style={styles.educationContainer}>
      <div style={styles.educationItem}>
        <h3 style={styles.educationDegree}>B.Tech. Major</h3>
        <p style={styles.educationInstitute}>Indian Institute of Technology, Guwahati</p>
        <p style={styles.educationDetails}>CGPA: 7.38 (Current) | 2024-Present</p>
        <div style={{
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          alignItems: "center"
        }}>
          <img src={logo10} style={styles.doofus} />
        </div>
        <div style={styles.courseworkContainer}>
          <h3 style={styles.courseworkSubjectTitle}>Key Coursework</h3>
          <ul style={styles.courseworkList}>
            <li>
              <strong style={{ color: COLORS.textDark }}>Mathematics:</strong> Linear Algebra, Basic Calculus, Discrete Maths, Probability & Random Processes
            </li>
            <li>
              <strong style={{ color: COLORS.textDark }}>Finance:</strong> Fundamental analysis, Technical analysis, Introductory Options
            </li>
            <li>
              <strong style={{ color: COLORS.textDark }}>Computer Science:</strong> Introduction to Computing, Beginning C++ Programming, Data Structure and Algorithms
            </li>
            <li>
              <strong style={{ color: COLORS.textDark }}>Chemical Engineering:</strong> Equipment designing, Fluid mechanics, Thermodynamics, Heat transfer
            </li>
          </ul>
        </div>
      </div>
      <div style={styles.educationItem}>
        <h3 style={styles.educationDegree}>Senior Secondary</h3>
        <p style={styles.educationInstitute}>AP Board</p>
        <p style={styles.educationDetails}>Percentage: 94.3% | 2023</p>
      </div>
      <div style={styles.educationItem}>
        <h3 style={styles.educationDegree}>Secondary</h3>
        <p style={styles.educationInstitute}>CBSE Board</p>
        <p style={styles.educationDetails}>Percentage: 96.4% | 2021</p>
      </div>
    </div>
  </section>
);

const Skills = () => {
  // Use the useOnScreen hook for each skill category to control its visibility
  const [progRef, progVisible] = useOnScreen({ threshold: 0.1 });
  const [webRef, webVisible] = useOnScreen({ threshold: 0.1 });
  const [pythonRef, pythonVisible] = useOnScreen({ threshold: 0.1 });
  const [osRef, osVisible] = useOnScreen({ threshold: 0.1 });
  const [miscRef, miscVisible] = useOnScreen({ threshold: 0.1 });
  const [logoRef, logoVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <section id="skills" style={styles.section}>
      <h2 style={styles.sectionTitle}>Technical Skills</h2>
      <div style={styles.skillsContainer}>
        <div ref={progRef} style={{
          ...styles.skillCategory,
          opacity: progVisible ? 1 : 0,
          transform: progVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
        }}>
          <h3 style={styles.skillCategoryTitle}>Programming:</h3>
          <p style={styles.skillList}>Python, C/C++, Kotlin</p>
        </div>
        <div ref={webRef} style={{
          ...styles.skillCategory,
          opacity: webVisible ? 1 : 0,
          transform: webVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s'
        }}>
          <h3 style={styles.skillCategoryTitle}>Web Development Frameworks:</h3>
          <p style={styles.skillList}>CSS, HTML, Javascript</p>
        </div>
        <div ref={pythonRef} style={{
          ...styles.skillCategory,
          opacity: pythonVisible ? 1 : 0,
          transform: pythonVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s'
        }}>
          <h3 style={styles.skillCategoryTitle}>Python Frameworks:</h3>
          <p style={styles.skillList}>NumPy*, Pandas*</p>
        </div>
        <div ref={osRef} style={{
          ...styles.skillCategory,
          opacity: osVisible ? 1 : 0,
          transform: osVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease-out 0.3s, transform 0.6s ease-out 0.3s'
        }}>
          <h3 style={styles.skillCategoryTitle}>Operating Systems:</h3>
          <p style={styles.skillList}>Windows, Linux*</p>
        </div>
        <div ref={miscRef} style={{
          ...styles.skillCategory,
          opacity: miscVisible ? 1 : 0,
          transform: miscVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease-out 0.4s, transform 0.6s ease-out 0.4s'
        }}>
          <h3 style={styles.skillCategoryTitle}>Miscellaneous:</h3>
          <p style={styles.skillList}>Git, Github, Autocad, Figma, UX/UI</p>
        </div>
        <div ref={logoRef} style={{
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          alignItems: "center",
          gridColumn: '1 / -1', // Span across all columns
          justifyContent: 'center', // Center the logos
          opacity: logoVisible ? 1 : 0,
          transform: logoVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease-out 0.5s, transform 0.6s ease-out 0.5s'
        }}>
          <img src={logo1} style={styles.profilEmage} />
          <img src={logo2} style={styles.profilEmage} />
          <img src={logo3} style={styles.profilEmage} />
          <img src={logo4} style={styles.profilEmage} />
          <img src={logo5} style={styles.profilEmage} />
          <img src={logo6} style={styles.profilEmage} />
          <img src={logo7} style={styles.profilEmage} />
          <img src={logo8} style={styles.profilEmage} />
          <img src={logo9} style={styles.profilEmage} />
        </div>
        <p style={styles.skillNote}>*Elementary proficiency</p>
      </div>
    </section>
  );
};

const Project = ({ title, description, link, image, delay }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      style={{
        ...styles.projectCard,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`
      }}
    >
      {image}
      <h3 style={styles.projectTitle}>{title}</h3>
      <p style={styles.projectDesc}>{description}</p>
      {link && (
        <a href={link} target="_blank" rel="noreferrer" style={styles.projectLink}>
          View Project
        </a>
      )}
    </div>
  );
};

const Projects = () => (
  <section id="projects" style={styles.section}>
    <h2 style={styles.sectionTitle}>Projects</h2>
    <div style={styles.projectsGrid}>
      <Project
        title="Portfolio Website"
        description="Responsive React portfolio showcasing my skills and projects."
        link="https://github.com/rootism/portfolio"
        image={<img src={logo13} style={styles.foofus} />}
        delay={0} // No delay for the first item
      />

      <Project
        title="Web Galaxy - Product Development"
        description="Text-to-Website Generator using React, Firebase, Tailwind CSS, Flask & Gemini AI for HTML/CSS generation."
        link="https://github.com/rootism/Website-generator"
        image={<img src={logo11} style={styles.foofus} />}
        delay={0.1} // Small delay for the second item
      />

      <Project
        title="Ethos"
        description="Real-time chat app with end-to-end encryption using Flutter. Built as part of IITG's Coding Club."
        link="https://github.com/rootism/MentionIt_v1"
        image={<img src={logo14} style={styles.foofus} />}
        delay={0.2} // Delay for the third item
      />
      <Project
        title="EcoEdge - Finance & Consulting Challenge"
        description="Case study of a green energy company with detailed SWOT, root cause analysis, and financial model."
        link="https://github.com/rootism/Ecoedge"
        image={<img src={logo12} style={styles.foofus} />}
        delay={0.3} // Delay for the fourth item
      />
    </div>
  </section>
);

const Languages = () => {
  const [listRef, listVisible] = useOnScreen({ threshold: 0.1 });
  return (
    <section id="languages" style={styles.section}>
      <h2 style={styles.sectionTitle}>Languages Known</h2>
      <ul ref={listRef} style={{
        ...styles.languageList,
        opacity: listVisible ? 1 : 0,
        transform: listVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
      }}>
        <li style={styles.languageItem}>English: <span style={styles.languageProficiency}>Native proficiency</span></li>
        <li style={styles.languageItem}>Hindi: <span style={styles.languageProficiency}>Native proficiency</span></li>
        <li style={styles.languageItem}>Maithili: <span style={styles.languageProficiency}>Native proficiency</span></li>
        <li style={styles.languageItem}>Telugu: <span style={styles.languageProficiency}>Intermediate</span></li>
      </ul>
    </section>
  );
};

const Extracurriculars = () => {
  const [listRef, listVisible] = useOnScreen({ threshold: 0.1 });
  return (
    <section id="extracurriculars" style={styles.section}>
      <h2 style={styles.sectionTitle}>Extracurriculars</h2>
      <ul ref={listRef} style={{
        ...styles.extracurricularList,
        opacity: listVisible ? 1 : 0,
        transform: listVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
      }}>
        <li>
          <strong style={{ color: COLORS.textDark }}>2025:</strong> Silver Medal, EcoEdge(cna-fec), Kriti (interhostel tech event), IIT Guwahati
        </li>
        <li>
          <strong style={{ color: COLORS.textDark }}>2025:</strong> Silver Medal, Squash, Spardha (interhostel sports event), IIT Guwahati
        </li>
        <li>
          <strong style={{ color: COLORS.textDark }}>2024:</strong> Squash, Squash club, IIT Guwahati
        </li>
        <li>
          <strong style={{ color: COLORS.textDark }}>Medal:</strong> Gold Medal, Basketball, Spardha (interhostel sports event), IIT Guwahati
        </li>
        <li>
          <strong style={{ color: COLORS.textDark }}>Club:</strong> Sketching and painting, Finesse (Fine arts club), IIT Guwahati
        </li>
        <li>
          <strong style={{ color: COLORS.textDark }}>Club:</strong> Design, Finesse (Fine arts club), IIT Guwahati
        </li>
      </ul>
    </section>
  );
};

const Interests = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  return (
    <section id="interests" style={styles.section}>
      <h2 style={styles.sectionTitle}>Interests</h2>
      <p ref={ref} style={{
        ...styles.paragraph,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
      }}>
        Reading, Hiking, Photography, Cooking, Coding challenges, Sketching and always trying something new.
      </p>
    </section>
  );
};

const Contact = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.sectionTitle}>Contact Me</h2>
      <div ref={ref} style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
      }}>
         <img src={logo15}  style={styles.foofus} />
        <p style={styles.paragraph}>
          Email: <a href="mailto:m.shruti@iitg.ac.in" style={styles.link}>m.shruti@iitg.ac.in</a>
        </p>
        <p style={styles.paragraph}>
          LinkedIn: <a href="https://linkedin.com/in/shruti-mishra-ss465" target="_blank" rel="noreferrer" style={styles.link}>
            linkedin.com/in/shruti-mishra-ss465
          </a>
         
        </p>
      </div>
    </section>
  );
};

export default function Portfolio() {
  return (
    <div style={styles.container}>
      <Header />
      <main style={styles.main}>
        <About />
        <Education />
        <Skills />
        <Projects />
        <Languages />
        <Extracurriculars />
        <Interests />
        <Contact />
      </main>
      <footer style={styles.footer}>© 2025 Shruti Mishra. All rights reserved.</footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Poppins', sans-serif",
    width: "100%",
    padding: "0",
    background: COLORS.mainBackground,
    color: COLORS.textDark,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 30px",
    marginBottom: "40px",
    background: COLORS.headerBackground,
    color: COLORS.headerText,
    borderRadius: "15px",
    boxShadow: `0 8px 20px ${COLORS.shadowLight}`,
    margin: "20px 30px 40px 30px",
  },
  title: {
    margin: 0,
    fontWeight: "600",
    fontSize: "3.5rem",
    letterSpacing: "0.5px",
    fontFamily: "'Playfair Display', serif",
    color: COLORS.headerText,
    textShadow: `0 2px 5px ${COLORS.shadowLight}`,
  },
  titleYear: {
    fontSize: "2.2rem",
    fontFamily: "'Playfair Display', serif",
    marginLeft: "10px",
    display: "inline-block",
    color: COLORS.headerText,
    textShadow: `0 1px 3px ${COLORS.shadowLight}`,
  },
  navLink: {
    marginLeft: "25px",
    textDecoration: "none",
    color: COLORS.headerText,
    fontWeight: "500",
    fontSize: "1rem",
    textTransform: 'none',
    letterSpacing: '0',
  },
  section: {
    marginBottom: "50px",
    background: COLORS.cardBackground,
    padding: "30px",
    borderRadius: "15px",
    boxShadow: `0 6px 15px ${COLORS.shadowLight}`,
    margin: "0 30px 50px 30px",
    border: `1px solid ${COLORS.borderColor}`,
  },
  sectionTitle: {
    fontSize: "2rem",
    fontWeight: "700",
    marginBottom: "20px",
    borderBottom: `2px solid ${COLORS.accentText}`,
    display: "inline-block",
    paddingBottom: "8px",
    color: COLORS.textDark,
    textShadow: `0 1px 3px ${COLORS.shadowLight}`,
  },
  aboutHelloText: {
    fontSize: "3.5rem",
    fontFamily: "'Playfair Display', serif",
    color: COLORS.accentText,
    marginBottom: "25px",
    textAlign: "center",
    textShadow: `0 3px 8px ${COLORS.shadowAccent}`,
  },
  paragraph: {
    fontSize: "1.05rem",
    lineHeight: 1.7,
    color: COLORS.textDark,
  },
  aboutContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "50px",
  },
  profileImage: {
    width: "500px",
    height: "350px",
    borderRadius: "10%",
    objectFit: "cover",
    boxShadow: `0 15px 150px ${COLORS.shadowAccent}`,
    border: `5px solid ${COLORS.accentText}`,
  },
  profilEmage: {
    width: "80px",
    height: "80px",
    borderRadius: "10%",
    objectFit: "cover",
    boxShadow: `0 5px 5px ${COLORS.shadowAccent}`,
    border: `1px solid ${COLORS.accentText}`,
  },
  doofus: {
    width: "80px",
    height: "80px",
    borderRadius: "10%",
    objectFit: "cover",
    boxShadow: `0 5px 5px ${COLORS.shadowAccent}`,
  },
  foofus: {
    width: "100%", // Use 100% to fill the card width
    height: "150px",
    objectFit: "cover",
    boxShadow: `0 5px 5px ${COLORS.shadowAccent}`,
    marginBottom: "15px", // Add some space below the image
    borderRadius: "10px", // Rounded corners for project images
  },
  educationContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
    marginBottom: '25px',
  },
  educationItem: {
    borderLeft: `4px solid ${COLORS.secondaryAccent}`,
    paddingLeft: '15px',
    background: COLORS.cardBackground,
    borderRadius: '10px',
    padding: '12px',
    boxShadow: `0 1px 5px ${COLORS.shadowLight}`,
  },
  educationDegree: {
    margin: '0 0 5px 0',
    fontSize: '1.2rem',
    color: COLORS.textDark,
  },
  educationInstitute: {
    margin: '0 0 3px 0',
    fontSize: '0.95rem',
    color: COLORS.textLight,
  },
  educationDetails: {
    margin: '0',
    fontSize: '0.85rem',
    color: COLORS.textLight,
  },
  courseworkContainer: {
    marginTop: '25px',
    background: COLORS.cardBackground,
    borderRadius: '12px',
    padding: '20px',
    boxShadow: `0 3px 10px ${COLORS.shadowLight}`,
  },
  courseworkSubjectTitle: {
    fontSize: '1.4rem',
    fontWeight: '600',
    marginBottom: '12px',
    color: COLORS.textDark,
    borderBottom: `2px solid ${COLORS.borderColor}`,
    paddingBottom: '6px',
  },
  courseworkList: {
    listStyle: 'disc',
    paddingLeft: '20px',
    margin: 0,
  },
  courseworkItem: {
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '6px',
    color: COLORS.textDark,
  },
  skillsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '20px',
  },
  skillCategory: {
    background: COLORS.cardBackground,
    borderRadius: '10px',
    padding: '18px',
    boxShadow: `0 2px 8px ${COLORS.shadowLight}`,
    border: `1px solid ${COLORS.borderColor}`,
  },
  skillCategoryTitle: {
    margin: '0 0 10px 0',
    fontSize: '1.1rem',
    color: COLORS.textDark,
    borderBottom: `2px solid ${COLORS.secondaryAccent}`,
    paddingBottom: '5px',
    fontWeight: '600',
  },
  skillList: {
    margin: '0',
    fontSize: '0.95rem',
    lineHeight: '1.5',
    color: COLORS.textLight,
  },
  skillNote: {
    fontSize: '0.85rem',
    color: COLORS.textLight,
    marginTop: '12px',
    gridColumn: '1 / -1',
  },
  languageList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  languageItem: {
    fontSize: '1.05rem',
    color: COLORS.textDark,
    background: COLORS.cardBackground,
    padding: '10px 18px',
    borderRadius: '10px',
    boxShadow: `0 1px 3px ${COLORS.shadowLight}`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: `1px solid ${COLORS.borderColor}`,
  },
  languageProficiency: {
    fontWeight: '600',
    color: COLORS.accentText,
    fontSize: '0.9rem',
  },
  extracurricularList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    '& li': {
      fontSize: '1.05rem',
      lineHeight: '1.6',
      marginBottom: '8px',
      color: COLORS.textDark,
    }
  },
  projectsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  },
  projectCard: {
    background: COLORS.cardBackground,
    borderRadius: "15px",
    padding: "22px",
    boxShadow: `0 4px 12px ${COLORS.shadowAccent}`,
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    border: `1px solid ${COLORS.accentText}`,
    '&:hover': {
      transform: 'translateY(-3px)',
      boxShadow: `0 8px 20px ${COLORS.shadowAccent}`,
    }
  },
  projectTitle: {
    marginTop: 0,
    color: COLORS.textDark,
    fontWeight: "700",
    fontSize: "1.3rem",
    marginBottom: '8px',
  },
  projectDesc: {
    fontSize: "0.95rem",
    marginBottom: "10px",
    color: COLORS.textLight,
    lineHeight: '1.5',
  },
  projectLink: {
    textDecoration: "none",
    color: COLORS.accentText,
    fontWeight: "600",
    fontSize: "0.95rem",
    transition: "color 0.3s ease",
    '&:hover': {
      color: COLORS.secondaryAccent,
    }
  },
  link: {
    color: COLORS.accentText,
    textDecoration: "underline",
    cursor: "pointer",
    transition: "color 0.3s ease",
    '&:hover': {
      color: COLORS.secondaryAccent,
    }
  },
  main: {
    flexGrow: 1,
    padding: "20px 30px",
  },
  footer: {
    textAlign: "center",
    padding: "15px 0",
    fontSize: "0.9rem",
    color: COLORS.textLight,
    borderTop: `1px solid ${COLORS.borderColor}`,
    marginTop: "30px",
  },
};