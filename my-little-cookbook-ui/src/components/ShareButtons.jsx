import React from "react";
import { XShareButton, XIcon } from "react-share";
import { WhatsappShareButton, WhatsappIcon } from "react-share";
import { FacebookShareButton, FacebookIcon } from "react-share";
import {
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
} from "react-share";
import { EmailShareButton, EmailIcon } from "react-share";

export default function ShareButtons() {


  return (
    <>
      <EmailShareButton
        subject="Take a look"
        body="Thought you might like this:"
        aria-label="Share by email"
        url="localhost:5173"
      >
        <EmailIcon size={24} round />
      </EmailShareButton>

      <WhatsappShareButton
        title="Read this next"
        aria-label="Share on WhatsApp"
        url="localhost:5173"
      >
        <WhatsappIcon size={24} round />
      </WhatsappShareButton>

      <FacebookShareButton hashtag="#reactshare" aria-label="Share on Facebook" url="localhost:5173">
        <FacebookIcon size={24} round />
      </FacebookShareButton>

      <FacebookMessengerShareButton aria-label="Send in Messenger" url="localhost:5173">
        <FacebookMessengerIcon size={24} round />
      </FacebookMessengerShareButton>
    </>
  );
}
