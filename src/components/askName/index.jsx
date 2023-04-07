import { useAppState } from "../../contexts/stateContext";
import Text from "../text";
import Button from "../button";
import ButtonList from "../buttonList";

const AskName = () => {
  const { changeSection, generate } = useAppState();

  return (
    <>
      <Text>Desideri dichiarare il tuo nome?</Text>
      <Text>
        Se scegli di no, te ne verrà assegnato uno d'ufficio dall'anagrafe dei
        Koboldi
      </Text>
      <ButtonList>
        <Button handleClick={() => changeSection("getName")}>Si!</Button>
        <Button color="secondary" handleClick={() => generate()}>
          No
        </Button>
      </ButtonList>
    </>
  );
};

export default AskName;
