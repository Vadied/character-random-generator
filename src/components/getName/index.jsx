import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import Page from "../page";
import { useAppState } from "../../contexts/stateContext";
import Text from "../text";
import Button from "../button";
import ButtonList from "../buttonList";

const GetName = () => {
  const [name, setName] = useState("");
  const { generate } = useAppState();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 1000);
  }, []);
  return (
    <Page>
      {show && (
        <>
          <Text>Prego allora, dicci pure come ti chiami</Text>
          <Text>
            Nel frattempo i funzionari goblin sceglieranno la classe e la
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
      )}
    </Page>
  );
};

export default GetName;
