"use client"

// components/StepperForm.js
import { useState } from 'react';
import { Box, Button, Stepper, Step, StepLabel, Typography } from '@mui/material';

import UserInfo from './userinfo';
import PersonalInfo from './personalinfo';
import ProfessionalInfo from './professionalinfo';
import SalaryPackage from './salarypackage';
import EmployeeAttachments from './attachments';


// import { useFormContext } from '../context/formcontext';



const steps = ['User Info', 'Personal Info', 'Professional Info' , 'Salary Package' , 'Attachments'];

export default function EmployeeSteper() {
  const [activeStep, setActiveStep] = useState(0);

 // const { submitForm, resetFormData } = useFormContext();

  // Function to display the content for each step
  const getStepContent = (step : any) => {
      switch (step) {
        case 0:
          return <UserInfo />;
        case 1:
          return <PersonalInfo />;
        case 2:
          return <ProfessionalInfo />;
        case 3:
          return <SalaryPackage />;
        case 4:
          return <EmployeeAttachments />;
        default:
          return 'Unknown step';
      }
  };

  // Handle navigation to the next step
  const handleNext = async () => {
    if (activeStep === steps.length - 1) {
      // Call the submitForm function from the context
      //const response = await submitForm();
     
    //   if (response == undefined ) {
    //     If API response is okay, reset form data and stepper
    //     resetFormData();
    //     setActiveStep(0);
    //   }
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  // Handle navigation to the previous step
  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', mt: 5 }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ mt: 4, mb: 2 }}>
        {activeStep === steps.length ? (
          <Typography variant="h6" align="center">
            All steps completed - you're finished
          </Typography>
        ) : (
          <>
            {getStepContent(activeStep)}
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}
