import { useState } from "react";
import "./style.css";

import Loader from "../loader";
import Button from "../button";
import useCharacter from "../../hooks/useCharacter";

const Extractor = () => {
  const [loading, setLoading] = useState(false);
  const [char, setChar] = useState("");
  const { generateCharacter } = useCharacter();

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
    const newChar = generateCharacter();
    setChar(newChar);
  };

  if (loading) return <Loader />;

  return (
    <div className="extractor">
      {char.name && (
        <div className="container">
          <div
            className="image"
            style={{ backgroundImage: `url(/images/${char.image})` }}
          ></div>
          <div className="char-section">
            <div className="label">Nome:</div>
            <div className="text">
              <div>{char.name},</div>
              <div>{char.title}</div>
            </div>
            <div className="label">Classe:</div>
            <div className="text">{char.classChar}</div>
            <div className="label">Specie:</div>
            <div className="text">{char.race}</div>
          </div>
        </div>
      )}
      {!char.name && (
        <Button
          handleClick={handleClick}
          tooltip="Clicca per generare il personaggio"
        >
          Genera il tuo personaggio!
        </Button>
      )}
    </div>
  );
};

export default Extractor;
