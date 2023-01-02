import { Step, StepLabel, Stepper, Typography } from "@mui/material";
import React from "react";
import "./orderSteps.css";

const OrderSteps = ({ activeStep }) => {
  const steps = [
    {
      label: <Typography>Choose Gifts</Typography>,
    },
    {
      label: <Typography>Choose a wrapper</Typography>,
    },
    {
      label: <Typography>Total cost</Typography>,
    },
  ];

  return (
    <div>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        className="mb-10 box-border"
      >
        {steps.map((item, index) => (
          <Step
            key={index}
            active={activeStep === index ? true : false}
            completed={activeStep >= index ? true : false}
          >
            <StepLabel icon={item.icon}>{item.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default OrderSteps;
