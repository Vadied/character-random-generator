import { useState } from "react";
import { Box } from "@mui/material";

import { useAppState } from "../../contexts/stateContext";
import Text from "../text";
import ButtonList from "../buttonList";
import MyButton from "../button";
import SharedList from "../sharedList";

const CharacterCard = () => {
  const [showShare, setShare] = useState(false);
  const { character, changeSection } = useAppState();

  if (!character) return null;

  const { classChar, name, title, race, level, image } = character;

  const handleShareClick = () => {
    setShare(true);
  };

  return (
    <>
      <Text>
        <Box
          id="lgbt_character"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            padding: "2rem 1rem",
          }}
        >
          <Box>
            Tu sei {name}, {title}
          </Box>
          <Box
            sx={{
              backgroundImage: `url(/portraits/${image})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "10rem",
              width: "10rem",
              borderRadius: "50%",
              boxShadow: "0px 0px 10px #4A3550",
            }}
          ></Box>
          <Box>{classChar}</Box>
          <Box>
            {race} di livello {level}
          </Box>
        </Box>
      </Text>
      <ButtonList column>
        <MyButton handleClick={handleShareClick}>
          Condividi il tuo personaggio!
        </MyButton>
        <MyButton handleClick={() => changeSection("welcome")}>
          Torna alla Home
        </MyButton>
      </ButtonList>
      {showShare && <SharedList {...character} />}
    </>
  );
};

export default CharacterCard;
