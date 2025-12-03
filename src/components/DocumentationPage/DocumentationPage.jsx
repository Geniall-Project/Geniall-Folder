import './DocumentationPage.css'
import Background from '../Background/Background'

const documentationSections = [
  {
    id: 1,
    title: 'Introdução',
    content: 'Bem-vindo à documentação do projeto. Esta plataforma centralizadora de dados foi desenvolvida para facilitar o acesso a informações importantes.'
  },
  {
    id: 2,
    title: 'Funcionalidades',
    content: 'A plataforma oferece acesso rápido a informações da equipe e documentação completa do projeto através de um QR Code.'
  },
  {
    id: 3,
    title: 'Como Usar',
    content: 'Escaneie o QR Code para acessar a plataforma. Na tela inicial, escolha entre visualizar informações da equipe ou acessar a documentação completa.'
  },
  {
    id: 4,
    title: 'Tecnologias',
    content: 'Este projeto foi desenvolvido utilizando React, Vite e tecnologias modernas de desenvolvimento web.'
  },
  {
    id: 5,
    title: 'Contato',
    content: 'Para mais informações, entre em contato através dos perfis do LinkedIn da equipe disponíveis na seção de Equipe.'
  },
  {
    id: 6,
    title: 'Atualizações',
    content: 'A documentação é atualizada regularmente. Verifique periodicamente para novas informações e atualizações do projeto.'
  }
]

function DocumentationPage() {
  return (
    <Background>
      <div className="documentation-page">
        <div className="documentation-container">
        
        <h1 className="documentation-title">Documentação</h1>
        <p className="documentation-subtitle">Acesse todas as informações do projeto</p>
        
        <div className="documentation-content">
          {documentationSections.map((section) => (
            <div key={section.id} className="documentation-section">
              <h2 className="section-title">{section.title}</h2>
              <p className="section-content">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </Background>
  )
}

export default DocumentationPage

