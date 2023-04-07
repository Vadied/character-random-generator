import { Box } from "@mui/material";
import Text from "../text";
const Page = ({ children }) => {
  return (
    <>
      <Text>Benvenutə, avventurierə!</Text>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default Page;
