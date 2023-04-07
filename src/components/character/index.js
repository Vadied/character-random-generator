import "./style.css";

import { useAppState } from "../../contexts/stateContext";

const CharacterCard = () => {
  const { character } = useAppState();

  return (
    <div className="info-container">
      <div
        className="image"
        style={{ backgroundImage: `url(/images/${character.image})` }}
      ></div>
      <div className="char-section">
        <div className="label">Nome</div>
        <div className="text">
          <div>{character.name},</div>
          <div>{character.title}</div>
        </div>
        <div className="label">Classe</div>
        <div className="text">{character.classChar}</div>
        <div className="label">Specie</div>
        <div className="text">{character.race}</div>
      </div>
    </div>
  );
};

export default CharacterCard;
