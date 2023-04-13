import { Box } from "@mui/material";

const ButtonList = ({ column = false, children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        width: "100%",
        flexDirection: column ? "column" : "row",
        gap: "0.5rem"
      }}
    >
      {children}
    </Box>
  );
};

export default ButtonList;
