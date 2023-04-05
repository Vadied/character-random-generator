import { useState, useRef } from "react";
import "./style.css";

import Loader from "../loader";
import Button from "../button";
import useCharacter from "../../hooks/useCharacter";

const Extractor = () => {
  const nameRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [char, setChar] = useState("");
  const { generateCharacter } = useCharacter();

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
    const newChar = generateCharacter(nameRef?.current?.value || "");
    setChar(newChar);
  };

  if (loading) return <Loader />;

  return (
    <div className="extractor">
      {char.name && (
        <div className="info-container">
          <div
            className="image"
            style={{ backgroundImage: `url(/images/${char.image})` }}
          ></div>
          <div className="char-section">
            <div className="label">Nome</div>
            <div className="text">
              <div>{nameRef.current || char.name},</div>
              <div>{char.title}</div>
            </div>
            <div className="label">Classe</div>
            <div className="text">{char.classChar}</div>
            <div className="label">Specie</div>
            <div className="text">{char.race}</div>
          </div>
        </div>
      )}
      {!char.name && (
        <div className="name-container">
          <div className="char-section">
            <label htmlFor="name">Nome</label>
            <input ref={nameRef} id="name" />
          </div>
          <Button
            handleClick={handleClick}
            tooltip="Clicca per generare il personaggio"
          >
            Genera il tuo personaggio!
          </Button>
        </div>
      )}
    </div>
  );
};

export default Extractor;
