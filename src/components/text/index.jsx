import { Box } from "@mui/material";

const Text = ({ children }) => (
  <Box
    sx={{
      backgroundColor: "white",
      borderRadius: "20px",
      padding: "10px 20px",
      fontSize: "1.5rem",
      textAlign: "center",
    }}
  >
    {children}
  </Box>
);
export default Text;
