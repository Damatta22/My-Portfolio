import { GitHubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";
import { TwitterIcon } from "../icons/twiter-icon";

import "./social-btns.scss";

export default function SocialBtns() {
  return (
    <div className="social">
      <a href="">
        <InstaIcon />
      </a>
      <a href="https://linkedin.com/in/fláviodamata">
        <LinkedInIcon />
      </a>
      <a href="https://github.com/Damatta22">
        <GitHubIcon />
      </a>
      <a href="">
        <TwitterIcon />
      </a>
    </div>
  );
}
