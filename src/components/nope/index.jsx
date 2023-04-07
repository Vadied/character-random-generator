import Text from "../text";
import Button from "../button";
import ButtonList from "../buttonList";
import { useAppState } from "../../contexts/stateContext";

const Nope = () => {
  const { changeSection } = useAppState();
  return (
    <>
      <Text>
        Il gioco di ruolo deve essere sempre sano, sicuro e consensuale,
        speriamo di rivederti preso alla locanda!
      </Text>
      <ButtonList>
        <Button handleClick={() => changeSection("welcome")}>
          Torna alla Home
        </Button>
      </ButtonList>
    </>
  );
};

export default Nope;
