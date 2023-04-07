import Text from "../text";
import { Box } from "@mui/material";

const Loader = () => (
  <Box
    sx={{
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Text>Ma certo! Come abbiamo fatto a non riconoscerti subito?</Text>
  </Box>
);

export default Loader;
