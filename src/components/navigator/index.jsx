import { useAppState } from "../../contexts/stateContext";
import Loader from "../loader";
import Welcome from "../welcome";
import AskName from "../askName";
import Nope from "../nope";
import GetName from "../getName";
import CharacterCard from "../character";

const Navigator = () => {
  const { section, loading } = useAppState();
  if (loading) return <Loader />;

  if (section === "askName") return <AskName />;
  if (section === "nope") return <Nope />;
  if (section === "getName") return <GetName />;
  if (section === "character") return <CharacterCard />;
  return <Welcome />;
};

export default Navigator;
