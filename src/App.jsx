import { Box } from "@mui/material";
import Navigator from "./components/navigator";
import { StateProvider, useAppState } from "./contexts/stateContext";

const App = () => {
  const { section } = useAppState();
  console.log("section", section);
  return (
    <StateProvider>
      <Box
        className="App"
        sx={{
          backgroundImage: "url('/dice.png')",
          backgroundSize: "contain",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "5rem 2rem",
          boxSizing: "border-box"
        }}
      >
        <Navigator />
      </Box>
    </StateProvider>
  );
};

export default App;
