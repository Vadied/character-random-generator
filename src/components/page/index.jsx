import { Box } from "@mui/material";
import Text from "../text";
import { useAppState } from "../../contexts/stateContext";
import Welcome from "../welcome";
import AskName from "../askName";
import Nope from "../nope";
import GetName from "../getName";
import CharacterCard from "../character";
import GrowComponent from "../grow";
import Loader from "../loader";
import useWindowSize from "../../hooks/useWindowSize";

const Page = () => {
  const { section, loading } = useAppState();

  const { width } = useWindowSize();
  return (
    <Box
      className="page"
      sx={{
        backgroundImage: "url('/dice.png')",
        backgroundSize: "contain",
        height: "100%",
        display: "flex",
        gap: "3rem",
        flexDirection: "column",
        alignItems: "center",
        padding: "5rem 2rem",
        boxSizing: "border-box",
        fontSize: width > 540 ? "16px" : "8px",
      }}
    >
      {section !== "character" && <Text>Benvenutə, avventurierə!</Text>}
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <GrowComponent condition={loading}>
          <Loader />
        </GrowComponent>
        <GrowComponent condition={section === "welcome"}>
          <Welcome />
        </GrowComponent>
        <GrowComponent condition={section === "askName"}>
          <AskName />
        </GrowComponent>
        <GrowComponent condition={section === "nope"}>
          <Nope />
        </GrowComponent>
        <GrowComponent condition={section === "getName"}>
          <GetName />
        </GrowComponent>
        <GrowComponent condition={!loading && section === "character"}>
          <CharacterCard />
        </GrowComponent>
      </Box>
    </Box>
  );
};

export default Page;
