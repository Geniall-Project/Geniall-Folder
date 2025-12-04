import { Link } from "react-router-dom";
import "./HomePage.css";
import Background from "../Background/Background";
import CharacterDisplay from "../CharacterDisplay/CharacterDisplay";

function HomePage() {
  return (
    <Background>
      <div className="home-page">
        <div className="home-content">
          <div className="home-left">
            <div className="home-header">
              <img
                src="/assets/logo-geniall.svg"
                alt="GeniALL Logo"
                className="home-logo"
              />
              <p className="home-subtitle">Escolha uma opção para continuar</p>
            </div>

            <div className="home-options">
              <Link to="/team" className="home-option-card home-team-button">
                <h2>Equipe</h2>
                <p>Conheça os criadores do projeto</p>
              </Link>

              <Link
                to="/documentation"
                className="home-option-card home-doc-button"
              >
                <h2>Documentação</h2>
                <p>Acesse toda a documentação</p>
              </Link>
            </div>
          </div>

          <div className="home-right">
            <CharacterDisplay />
          </div>
        </div>
      </div>
    </Background>
  );
}

export default HomePage;
