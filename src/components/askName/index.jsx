import Page from "../page";
import { useAppState } from "../../contexts/stateContext";
import Text from "../text";
import Button from "../button";
import ButtonList from "../buttonList";
import { useEffect, useState } from "react";

const AskName = () => {
  const { setSection, generate } = useAppState();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 1000);
  }, []);

  return (
    <Page>
      {show && (
        <>
          <Text>Desideri dichiarare il tuo nome?</Text>
          <Text>
            Se scegli di no, te ne verrà assegnato uno d'ufficio dall'anagrafe
            dei Koboldi
          </Text>
          <ButtonList>
            <Button handleClick={() => setSection("getName")}>Si!</Button>
            <Button color="secondary" handleClick={() => generate()}>
              No
            </Button>
          </ButtonList>
        </>
      )}
    </Page>
  );
};

export default AskName;
