import { Box } from "@mui/material";

import { useAppState } from "../../contexts/stateContext";
import Text from "../text";
import ButtonList from "../buttonList";
import MyButton from "../button";

const CharacterCard = () => {
  const { character, changeSection } = useAppState();

  if (!character) return null;

  const { classChar, name, title, race, level, image } = character;

  return (
    <>
      <Text>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            padding: "2rem 1rem",
          }}
        >
          <Box>
            Tu sei {name}, {title}!
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
            Di genia {race}, livello {level}
          </Box>
        </Box>
      </Text>
      <Text>
        <Box>
          Ora hai tutto il necessario per iniziare la tua avventura: fai uno
          screen a questa schermata e condividila con #queerantadue e taggando
          @casarcobaleno!
        </Box>
      </Text>
      <ButtonList>
        <MyButton handleClick={() => changeSection("welcome")}>
          Torna alla Home
        </MyButton>
      </ButtonList>
    </>
  );
};

export default CharacterCard;
