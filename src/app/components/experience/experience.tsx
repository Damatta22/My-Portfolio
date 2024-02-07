import { SectionTitle } from "../sectionTitle/section-title";
import Image from "next/image";
import "./experience.scss";

export function Experience() {
  return (
    <div className="experience">
      <SectionTitle text="About Me" />

      <p>
        I´m passionate about creating intuitive and attractive interfaces.
        Throughout my freelance career, I´ve had the opportunity to work on a
        variety of challenging projects that have allowed me to hone my skills
        and develop a deep understanding of front-end design and development
        best practices. Technologies: Java Script/ Html/ Css/ React JS/ React
        Native/Node JS/Nodemon/Axios/Git/ Git Hub/Insomnia/Styled
        Components/Typescript/ Docker... <br /> Professional summary: Experience
        in Front-end and Back-end also, Knowledge in, HTML, CSS, REACT JS,
        framework as my library, Code versioning using Git, Github. Consumption
        of Api’s using AXIOS. My previous experiences were essential for my
        professional and personal development, having a good relationship with
        co-workers and clientes. Completely open to constructive criticism,
        responsibility and corporate mentality. Working as a team is my focus
        for exchanging knowledge and learning.
      </p>
      <br />
      <hr className="divisor" />
      <div className="experience-time">
        <div className="experience-languages">
          <Image
            src="/html.png"
            alt="Html Logo"
            width={40}
            height={40}
            priority
          />
          <div className="experience-unit">
            <div className="experience-measure measure-3">
              <span>2 year</span>
            </div>
          </div>
        </div>

        <div className="experience-languages">
          <Image
            src="/css.png"
            alt="Css Logo"
            width={40}
            height={40}
            priority
          />
          <div className="experience-unit">
            <div className="experience-measure measure-3">
              <span>2 year</span>
            </div>
          </div>
        </div>

        <div className="experience-languages">
          <Image
            src="/react.png"
            alt="React Logo"
            width={40}
            height={40}
            priority
          />
          <div className="experience-unit">
            <div className="experience-measure measure-2">
              <span>1 year</span>
            </div>
          </div>
        </div>

        <div className="experience-languages">
          <Image src="/js.png" alt="Js Logo" width={40} height={40} priority />

          <div className="experience-unit">
            <div className="experience-measure measure-3">
              <span>2 year</span>
            </div>
          </div>
        </div>

        <div className="experience-languages">
          <Image src="/ts.png" alt="Ts Logo" width={40} height={40} priority />

          <div className="experience-unit">
            <div className="experience-measure measure-2">
              <span>1 year</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
