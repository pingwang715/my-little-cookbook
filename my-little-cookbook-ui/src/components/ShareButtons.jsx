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
        subject="New recipe"
        body="Thought you might like this:"
        aria-label="Share by email"
        url="localhost:5173"
      >
        <EmailIcon size={24} round />
      </EmailShareButton>

      <WhatsappShareButton
        title="Check out this recipe"
        aria-label="Share on WhatsApp"
        url="localhost:5173"
      >
        <WhatsappIcon size={24} round />
      </WhatsappShareButton>

      <FacebookShareButton
        hashtag="#mylittlecookbook"
        aria-label="Share on Facebook"
        url="localhost:5173"
      >
        <FacebookIcon size={24} round />
      </FacebookShareButton>

      <FacebookMessengerShareButton
        aria-label="Send in Messenger"
        url="localhost:5173"
      >
        <FacebookMessengerIcon size={24} round />
      </FacebookMessengerShareButton>

      <XShareButton
        title="Read this next"
        hashtags={["mylittlecookbook", "recipe"]}
        url="localhost:5173"
        aria-label="Share on X"
      >
        <XIcon size={24} round />
      </XShareButton>
    </>
  );
}
