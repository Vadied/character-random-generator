import Page from "../page";
import { useAppState } from "../../contexts/stateContext";
import Text from "../text";
import Button from "../button";
import ButtonList from "../buttonList";
import { useEffect, useState } from "react";

const Welcome = () => {
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
            Sei prontə a scoprire quale eroico personaggio interpreterai questa
            sera?
          </Text>
          <ButtonList>
            <Button handleClick={() => setSection("askName")}>Si!</Button>
            <Button color="secondary" handleClick={() => setSection("nope")}>
              No
            </Button>
          </ButtonList>
        </>
      )}
    </Page>
  );
};

export default Welcome;
