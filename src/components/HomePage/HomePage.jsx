import './HomePage.css'
import Background from '../Background/Background'
import CharacterDisplay from '../CharacterDisplay/CharacterDisplay'
import logoImage from '../../assets/logo-geniall.svg'

function HomePage({ onNavigate }) {
  return (
    <Background>
      <div className="home-page">
        <div className="home-content">
          <div className="home-left">
            <div className="home-header">
              <img 
                src={logoImage} 
                alt="GeniALL Logo" 
                className="home-logo"
              />
              <p className="home-subtitle">Escolha uma opção para continuar</p>
            </div>
            
            <div className="home-options">
              <button 
                className="home-option-card team-card"
                onClick={() => onNavigate('team')}
              >
                <h2>Equipe</h2>
                <p>Conheça os criadores do projeto</p>
              </button>
              
              <button 
                className="home-option-card doc-card"
                onClick={() => onNavigate('documentation')}
              >
                <h2>Documentação</h2>
                <p>Acesse toda a documentação</p>
              </button>
            </div>
          </div>
          
          <div className="home-right">
            <CharacterDisplay />
          </div>
        </div>
      </div>
    </Background>
  )
}

export default HomePage

