"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props: AccordionProps) => {
  const { className, ...other } = props;
  return (
    <MuiAccordion
      disableGutters
      elevation={0}
      square
      className={className}
      {...other}
    />
  );
})(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", color: "#fff" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  [`& .${accordionSummaryClasses.expandIconWrapper}`]: {
    marginLeft: theme.spacing(2), // Add gap between icon and title
  },
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function Questions() {
  const [expanded, setExpanded] = React.useState<string | false>("");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div className="my-16">
      {/* shadow-lg backdrop-blur-md bg-opacity-60 bg-[var(--box)]/60  backdrop:blur-3xl bg-opacity-40 shadow-black/20 */}
      <p className="text-4xl font-extrabold mb-8">
        <span className="text-blue-900">سوالات</span> متداول
      </p>
      <Accordion
        sx={{
          fontFamily: "Modam",
          marginBottom: "5px",
          boxShadow:
            "0 10px 15px -3px rgba(0,0,0,0.2), 0 4px 6px -4px rgba(0,0,0,0.2)",
          backdropFilter: "blur(12px)",
          backgroundColor: "rgba(0,0,0,0.6)",
          borderRadius: "1rem",
          opacity: 0.9,
          color: "#fff",
          WebkitBackdropFilter: "blur(12px)",
        }}
        className="bg-[var(--box)]/60 backdrop:blur-3xl bg-opacity-60 backdrop-blur-md shadow-lg shadow-black/20 rounded-2xl text-white"
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography
            sx={{ fontFamily: "Modam", fontSize: "18px" }}
            component="span">
            چگونه می توانم استعلام مدارک مربوط به املاک و مستغلات را انجام دهم؟
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontFamily: "Modam", color: "#fff" }}>
            برای استعلام مدارک ملکی، به بخش “استعلام مدارک” در سایت هومینکس
            مراجعه کنید. در این بخش می توانید اصالت سند، کد رهگیری قرارداد،
            وضعیت شهرداری و سایر موارد مربوط به ملک خود را استعلام کنید. کافی
            است اطلاعات مورد نظر را وارد کرده و نتایج را دریافت کنید
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          fontFamily: "Modam",
          marginBottom: "5px",
          boxShadow:
            "0 10px 15px -3px rgba(0,0,0,0.2), 0 4px 6px -4px rgba(0,0,0,0.2)",
          backdropFilter: "blur(12px)",
          backgroundColor: "rgba(0,0,0,0.6)",
          borderRadius: "1rem",
          opacity: 0.9,
          color: "#fff",
          WebkitBackdropFilter: "blur(12px)",
        }}
        className="bg-[var(--box)]/60 backdrop:blur-3xl bg-opacity-60 backdrop-blur-md shadow-lg shadow-black/20 rounded-2xl text-white"
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography
            sx={{ fontFamily: "Modam", fontSize: "18px" }}
            component="span">
            آیا امکان مراجعه حضوری برای استفاده از امکانات هومینکس وجود دارد؟
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontFamily: "Modam", color: "#fff" }}>
            خدمات هومینکس از طریق پلتفرم آنلاین ارائه می شود تا شما سریعتر و
            مؤثرتر از مشاوره ها بهره مند شوید. با این حال، اگر ترجیح می دهید به
            صورت حضوری مشاوره دریافت کنید، می توانید با مراجعه به دفتر هومینکس،
            از خدمات حضوری نیز استفاده کنید
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          fontFamily: "Modam",
          marginBottom: "5px",
          boxShadow:
            "0 10px 15px -3px rgba(0,0,0,0.2), 0 4px 6px -4px rgba(0,0,0,0.2)",
          backdropFilter: "blur(12px)",
          backgroundColor: "rgba(0,0,0,0.6)",
          borderRadius: "1rem",
          opacity: 0.9,
          color: "#fff",
          WebkitBackdropFilter: "blur(12px)",
        }}
        className="bg-[var(--box)]/60 backdrop:blur-3xl bg-opacity-60 backdrop-blur-md shadow-lg shadow-black/20 rounded-2xl text-white"
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography
            sx={{ fontFamily: "Modam", fontSize: "18px" }}
            component="span">
            چگونه می توانم ملک خود را آگهی کنم؟
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontFamily: "Modam", color: "#fff" }}>
            برای ثبت آگهی ملک، ابتدا وارد حساب کاربری خود شوید و به بخش “افزودن
            آگهی” بروید. اطلاعات مربوط به ملک خود را وارد کرده و سپس بر روی دکمه
            ثبت آگهی کلیک کنید، پس از بررسی تیم هومینکس، آگهی شما منتشر می شود.
            برای نمایش در بخش “پیشنهادهای ویژه ” کافی است در توضیحات ذکر کنید.
            در صورت نیاز، تیم پشتیبانی ما در هر مرحله همراه شما خواهد بود
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
