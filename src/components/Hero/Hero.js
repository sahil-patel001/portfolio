import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I 'm Sahil <br /> <h6> Full Stack Developer </h6>{" "}
        </SectionTitle>{" "}
        <SectionText>
          This is my personal portfolio website which I made using JavaScript,
          React.js, Next.js and also with the beautiful CSS with the style
          component.{" "}
        </SectionText>{" "}
        {/* TODO: make onClick button to reflect your resume after successfully
                build and deploy. */}{" "}
        <Button onClick={() => (window.location = "https://google.com")}>
          Learn More{" "}
        </Button>{" "}
      </LeftSection>{" "}
    </Section>{" "}
  </>
);

export default Hero;
