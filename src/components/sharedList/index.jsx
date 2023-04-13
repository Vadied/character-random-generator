import { Box } from "@mui/material";
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  FacebookIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const SharedList = ({ name, title }) => {
  const hashTags = "#queerantadue #casarcobaleno";
  const quote = `Saluti da ${name}, ${title}`;

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        display: "grid",
        gap: "1rem",
        gridRow: "1fr 1fr",
        backgroundColor: "rgba(255, 255, 255, 0.6)"
      }}
    >
        <FacebookShareButton
          url={"https://lgbtcahracter.netlify.app/"}
          openShareDialogOnClick
          hashtag={hashTags}
          quote={quote}
        >
          <FacebookIcon round />
        </FacebookShareButton>
        <TwitterShareButton
          url={"https://lgbtcahracter.netlify.app/"}
          openShareDialogOnClick
          hashtags={hashTags.split(" ")}
          title={quote}
        >
          <TwitterIcon round />
        </TwitterShareButton>
        <TelegramShareButton
          url={"https://lgbtcahracter.netlify.app/"}
          title={quote}
        >
          <TelegramIcon round />
        </TelegramShareButton>
        <WhatsappShareButton
          url={"https://lgbtcahracter.netlify.app/"}
          openShareDialogOnClick
          hashtag={hashTags}
          quote={quote}
        >
          <WhatsappIcon round />
        </WhatsappShareButton>
    </Box>
  );
};

export default SharedList;
