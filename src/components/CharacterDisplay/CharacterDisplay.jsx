import { useState, useEffect } from "react";
import "./CharacterDisplay.css";

const characters = [
  "axolot",
  "bat",
  "bear",
  "coala",
  "elephant",
  "fox",
  "goat",
  "horse",
  "lion",
  "malaio",
  "monkey",
  "owl",
  "panda",
  "parrot",
  "penguin",
  "pig",
  "polar",
  "rhino",
  "standard",
  "turtle",
];

function CharacterDisplay() {
  const [character, setCharacter] = useState(() => {
    // Inicializa com um personagem aleatório
    return characters[Math.floor(Math.random() * characters.length)];
  });
  const [isChanging, setIsChanging] = useState(false);

  const getRandomDifferentCharacter = (currentCharacter) => {
    // Filtra os personagens removendo o atual
    const availableCharacters = characters.filter(
      (char) => char !== currentCharacter
    );
    // Seleciona um aleatório dos disponíveis
    return availableCharacters[
      Math.floor(Math.random() * availableCharacters.length)
    ];
  };

  useEffect(() => {
    // Intervalo para trocar o personagem a cada 3 segundos
    const interval = setInterval(() => {
      setIsChanging(true);

      // Após a animação de saída, troca o personagem e inicia a animação de entrada
      setTimeout(() => {
        setCharacter((currentChar) => {
          return getRandomDifferentCharacter(currentChar);
        });
        // Pequeno delay para garantir que a nova imagem carregou antes de animar entrada
        setTimeout(() => {
          setIsChanging(false);
        }, 50);
      }, 600); // Tempo da animação de saída
    }, 3000); // 3000ms = 3 segundos

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`character ${isChanging ? "changing" : ""}`}>
      <div id="character-head">
        <img
          src={`/assets/characters/head/${character}-head.svg`}
          alt="head"
          key={`head-${character}`}
        />
      </div>
      <div id="character-body">
        <img
          src={`/assets/characters/body/${character}-body.svg`}
          alt="body"
          key={`body-${character}`}
        />
      </div>
    </div>
  );
}

export default CharacterDisplay;
