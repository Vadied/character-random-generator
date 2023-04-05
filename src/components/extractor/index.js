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
      <Button
        handleClick={handleClick}
        tooltip="Clicca per generare il personaggio"
      >
        Genera il tuo personaggio!
      </Button>
      {char.name && (
        <div>
          <div>
            <div className="name-label">Nome:</div>
            <div className="name">{char.name}</div>
          </div>
          <div>
            <div className="name-label">Classe:</div>
            <div className="name">{char.classChar}</div>
          </div>
          <div>
            <div className="name-label">Specie:</div>
            <div className="name">{char.race}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Extractor;
