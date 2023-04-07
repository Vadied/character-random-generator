import { Box, Grow } from "@mui/material";

const GrowComponent = ({ condition, children }) => {
  return (
    <Grow in={condition} style={{}}>
      <div style={{  }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "3rem",
            justifyContent: "space-evenly",
          }}
        >
          {condition && children}
        </Box>
      </div>
    </Grow>
  );
};

export default GrowComponent;
