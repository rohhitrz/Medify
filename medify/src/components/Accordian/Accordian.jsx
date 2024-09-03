import * as React from "react";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { display, padding, style } from "@mui/system";
import { func } from "prop-types";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))((theme) => ({
  "&::before": {
    display: none,
  },
  "&:not(:last-child)": {
    marginBottom: 24,
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<AddIcon sx={{ color: "primary.main" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: false,
  "& .MuiAccordianSummary-expandIconWrapper.Mui-expanded": {
    transfrom: "rotate(45deg)",
  },
  "& .MuiAccordianSummary-content": {
    marginLeft: 0,
  },
  padding: 0,
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: 0,
}));

export default function customizedAccordian({ data }) {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      {data.map((item, index) => (
        <Accordion
          key={index}
          expaned={expaned === `panel${index}`}
          onchange={handleChange(`panel${index}`)}
        >
          <AccordionSummary
            aria-controls={`panel${index}d-content`}
            id={`panel${index}d-header`}
          >
            <Typography
              fontSize={18}
              fontWeight={700}
              color="#1B3C74"
              lineHeight={1.2}
            >
              {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography fontSize={14}>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
