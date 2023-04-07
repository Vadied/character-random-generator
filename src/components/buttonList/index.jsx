import { Box } from "@mui/material";

const ButtonList = ({ children }) => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-evenly", width: "100%" }}
    >
      {children}
    </Box>
  );
};

export default ButtonList;
