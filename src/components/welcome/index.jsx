import { useAppState } from "../../contexts/stateContext";
import Text from "../text";
import Button from "../button";
import ButtonList from "../buttonList";

const Welcome = () => {
  const { changeSection } = useAppState();
  return (
    <>
      <Text>
        Sei prontə a scoprire quale eroico personaggio interpreterai questa
        sera?
      </Text>
      <ButtonList>
        <Button handleClick={() => changeSection("askName")}>Si!</Button>
        <Button color="secondary" handleClick={() => changeSection("nope")}>
          No
        </Button>
      </ButtonList>
    </>
  );
};

export default Welcome;
