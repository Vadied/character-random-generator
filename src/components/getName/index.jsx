import { useState } from "react";
import { TextField } from "@mui/material";

import { useAppState } from "../../contexts/stateContext";
import Text from "../text";
import Button from "../button";
import ButtonList from "../buttonList";

const GetName = () => {
  const [name, setName] = useState("");
  const { generate } = useAppState();
  return (
    <>
      <Text>
        Prego allora, dicci pure come ti chiami!
        <br />
        Nel frattempo i funzionari goblin sceglieranno classe e
        professione più adatti a te
      </Text>
      <TextField
        sx={{ backgroundColor: "white", color: "red" }}
        variant="outlined"
        onChange={(event) => {
          setName(event.target.value);
        }}
        label="Inserisci il tuo nome"
      />
      <ButtonList>
        <Button handleClick={() => generate(name)}>Invia</Button>
      </ButtonList>
    </>
  );
};

export default GetName;
