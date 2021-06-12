import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 5, text: "Projects" },
  { number: 500, text: "LinkedIn Connection" },
  { number: 10, text: "Completed Courses from well-known platforms" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle> Personal Achievements </SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum> {`${card.number}+`} </BoxNum>
          <BoxText> {card.text} </BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
