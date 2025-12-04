import { Link } from "react-router-dom";
import "./TeamPage.css";
import Background from "../Background/Background";

const teamMembers = [
  {
    id: 1,
    name: "BEATRIZ ANDREOS",
    role: "Estudante de Desenvolvimento de Sistemas no Senai Anchieta e estudante de FrontEnd no Senai Ipiranga (Automobilística).",
    linkedin:
      "https://www.linkedin.com/in/beatriz-andreos-bezerra-49a9a0368?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    image: "/assets/team/beatriz.jpg", // Adicione a foto aqui
  },
  {
    id: 2,
    name: "CAIO KOLENYAK",
    role: "Desenvolvedor Front-End | HTML, CSS, JavaScript, React, Node.js e MySQL",
    linkedin: "https://linkedin.com/in/caio-kolenyak",
    image: "/assets/team/caio.jpg", // Adicione a foto aqui
  },
  {
    id: 3,
    name: "ERIC SOUZA",
    role: "Desenvolvedor de software | Back-End | Java | Kotlin | 1x AWS Certified | Spring-boot | AWS",
    linkedin: "https://linkedin.com/in/dev-eric",
    image: "/assets/team/eric.jpg", // Adicione a foto aqui
  },
  {
    id: 4,
    name: "GABRIEL GALHIARDO",
    role: "Dev Full Stack | Java | Spring Boot | React | Node.js | AWS | SQL | Kotlin | Inglês | Buscando Estágio",
    linkedin: "https://linkedin.com/in/gabrielGalhiardo",
    image: "/assets/team/gabriel.jpg", // Adicione a foto aqui
  },
  {
    id: 5,
    name: "GUSTAVO DITTRICH",
    role: "Procurando estágio em Desenvolvimento de Sistemas",
    linkedin: "https://www.linkedin.com/in/gustavo-dittrich-1394b2285/",
    image: "/assets/team/gustavo.jpg", // Adicione a foto aqui
  },
  {
    id: 6,
    name: "IGOR ALVES",
    role: "Desenvolvedor de Software | Java, Spring Boot, Python, Node.js, React, MySQL, HTML, CSS & JavaScript",
    linkedin: "https://linkedin.com/in/igor-alves-igorldev",
    image: "/assets/team/igor.jpg", // Adicione a foto aqui
  },
];

function TeamPage() {
  return (
    <Background>
      <div className="team-page">
        <div className="team-container">
          <h1 className="team-title">Nossa Equipe</h1>
          <p className="team-subtitle">Conheça os criadores deste projeto</p>

          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-member-card">
                <div className="team-avatar">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="team-avatar-img"
                      onError={(e) => {
                        e.target.style.display = "none";
                        const fallback = e.target.parentElement.querySelector(
                          ".team-avatar-fallback"
                        );
                        if (fallback) {
                          fallback.style.display = "flex";
                        }
                      }}
                    />
                  ) : null}
                  <span
                    className="team-avatar-fallback"
                    style={{ display: member.image ? "none" : "flex" }}
                  >
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="team-linkedin"
                >
                  <svg
                    className="linkedin-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  Ver LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Background>
  );
}

export default TeamPage;
