import "./DocumentationPage.css";
import Background from "../Background/Background";

const documentationSections = [
  {
    id: 1,
    title: "Introdução",
    content:
      "O GeniAll é uma plataforma educacional inovadora que integra gamificação e Inteligência Artificial para transformar a forma como crianças do Ensino Fundamental aprendem. Partindo da premissa de que o aprendizado se torna mais significativo quando o aluno participa ativamente do processo, o GeniAll combina elementos lúdicos, interativos e personalizados para estimular a curiosidade, a criatividade e o desenvolvimento cognitivo das crianças.",
  },
  {
    id: 2,
    title: "Gameficação",
    content:
      "A plataforma oferece uma experiência de gameficação para o usuário, onde ele pode ganhar pontos e desbloquear novas customizações para o seu avatar. \n\nOs jogos atuais são 'Quiz', 'Jogo da Memórias', 'Flashcards' e 'Verdadeiro ou Falso'.",
  },
  {
    id: 3,
    title: "Tecnologias",
    content:
      "O GeniAll foi desenvolvido utilizando tecnologias modernas e robustas. No Frontend, utilizamos React para criar uma interface de usuário interativa e responsiva.\n\nO Backend foi construído com Java utilizando o framework Spring Boot, garantindo alta performance e escalabilidade. \n\nPara o armazenamento de dados, utilizamos MySQL como banco de dados relacional. \n\nAlém disso, integramos a Inteligência Artificial Gemini para proporcionar uma experiência de aprendizado personalizada e adaptativa aos alunos.",
  },
  {
    id: 4,
    title: "Contato",
    content:
      "Para mais informações, entre em contato através dos perfis do LinkedIn da equipe disponíveis na seção de Equipe ou pelo email geniall.senai@gmail.com.",
  },
];

function DocumentationPage() {
  return (
    <Background>
      <div className="documentation-page">
        <div className="documentation-container">
          <h1 className="documentation-title">Documentação</h1>
          <p className="documentation-subtitle">
            Acesse todas as informações do projeto
          </p>

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
  );
}

export default DocumentationPage;
