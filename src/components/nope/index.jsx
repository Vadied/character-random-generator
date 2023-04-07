import Page from "../page";
import Text from "../text";
import Button from "../button";
import ButtonList from "../buttonList";
import { useAppState } from "../../contexts/stateContext";
import { useEffect, useState } from "react";

const Nope = () => {
  const { setSection } = useAppState();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 1000);
  }, []);

  return (
    <Page>
      {show && (
        <>
          <Text>
            Il gioco di ruolo deve essere sempre sano, sicuro e consensuale,
            speriamo di rivederti preso alla locanda!
          </Text>
          <ButtonList>
            <Button handleClick={() => setSection("welcome")}>
              Torna alla Home
            </Button>
          </ButtonList>
        </>
      )}
    </Page>
  );
};

export default Nope;
