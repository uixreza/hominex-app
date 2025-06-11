import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function DropdownContainer({
  children,
  title,
  panel,
  handleChange,
  expanded,
}: {
  children: React.ReactNode;
  title: string;
  panel: string;
  handleChange: Function;
  expanded: any;
}) {
  return (
    <div>
      <Accordion expanded={expanded === panel} onChange={handleChange(panel)}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls={panel + "-content"}
          id={panel + "-header"}
          sx={{ flexDirection: "row-reverse", gap: "10px" }}>
          <Typography component="span">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </div>
  );
}
