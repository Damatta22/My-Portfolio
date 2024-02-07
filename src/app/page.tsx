import { ButtonsTop } from "./components/buttonsTop/buttonsTop";
import { Header } from "./components/header/header";
import { Experience } from "./components/experience/experience";
import { Info } from "./components/information/information";

import "./styles/home.scss";

import { EmailIcon } from "./components/icons/email-icon";
import SocialBtns from "./components/social-btns/social-btns";
import { InstaIcon } from "./components/icons/insta-icon";
import { GitHubIcon } from "./components/icons/github-icon";
import { TwitterIcon } from "./components/icons/twiter-icon";

export default function Home() {
  return (
    <main className="container">
      <ButtonsTop />
      <Header />

      <hr className="divisor" />
      <br />
      <br />
      <Info />

      <div className="experience">
        <hr className="divisor" />
        <Experience />
      </div>
      <br />
      <br />
      <hr className="divisor" />
      <div className="buttons">
        <SocialBtns />

        <a className="btn-primary" href="mailto:flaviodamataflv@gmail.com">
          contact me
          <EmailIcon />
        </a>
      </div>
    </main>
  );
}
