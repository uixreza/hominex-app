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
    <div className="rounded-[15px] overflow-hidden">
      <Accordion
        expanded={expanded === panel}
        onChange={handleChange(panel)}
        sx={{
          borderRadius: "32px",
          overflow: "hidden",
          boxShadow: "none",
          backgroundColor: "var(--box)",
          color: "white",
        }}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls={panel + "-content"}
          id={panel + "-header"}
          sx={{
            flexDirection: "row-reverse",
            gap: "10px",
            borderRadius: "32px",
            backgroundColor: "var(--box)",
          }}>
          <Typography component="span">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            borderRadius: "32px",
            backgroundColor: "var(--box)",
          }}>
          {children}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
