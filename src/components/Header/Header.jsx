import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const [soundOn, setSoundOn] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.2; // Volume baixo (20%)
      audio.loop = true; // Loop ativado
      
      if (soundOn) {
        audio.play().catch((error) => {
          console.log("Erro ao reproduzir áudio:", error);
        });
      } else {
        audio.pause();
      }
    }
  }, [soundOn]);

  const handleBackClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
  };

  const handleSoundToggle = () => {
    setSoundOn(!soundOn);
  };

  const isHomePage = location.pathname === "/";

  return (
    <>
      <audio
        ref={audioRef}
        src="/assets/sound/game-music-loop-7-145285.mp3"
        preload="auto"
      />
      <div className="app-header">
        {!isHomePage && (
          <button className="header-button header-back" onClick={handleBackClick}>
            <img
              src="/assets/general/icon-arrow.svg"
              alt="Voltar"
              className="header-icon"
            />
          </button>
        )}
        <button
          className="header-button header-sound"
          onClick={handleSoundToggle}
        >
          <img
            src={
              soundOn
                ? "/assets/general/sound-icon-on.svg"
                : "/assets/general/sound-icon-off.svg"
            }
            alt={soundOn ? "Desligar som" : "Ligar som"}
            className="header-icon"
          />
        </button>
      </div>
    </>
  );
}

export default Header;

