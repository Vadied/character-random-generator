import "./style.css";
import { Box } from "@mui/material";

import { useAppState } from "../../contexts/stateContext";
import Text from "../text";

const CharacterCard = () => {
  const { character } = useAppState();
  const { classChar, name, title, race, level, image } = character;

  return (
    <Text>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", padding: "2rem 1rem" }}>
        <Box>
          Tu sei {name}, {title}
        </Box>
        <Box
          sx={{
            backgroundImage: `url(/portraits/${image})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            height: "10rem",
            width: "10rem",
            borderRadius: "50%"
          }}
        ></Box>
        <Box>{classChar}</Box>
        <Box>
          {race} di livello {level}
        </Box>
      </Box>
    </Text>
  );
};

export default CharacterCard;
