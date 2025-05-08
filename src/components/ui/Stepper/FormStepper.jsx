import React from 'react';
import Stepper, { Step } from './Stepper';

function FormStepper({ steps, onComplete }) {
  return (
    <Stepper
      stepContainerClassName="mb-2"
      contentClassName="px-0"
      footerClassName="mt-6"
      onFinalStepCompleted={onComplete}
    >
      {steps.map((step, index) => (
        <Step key={index}>
          <div>
            <h2 className="text-xl md:text-3xl font-semibold mb-4">{step.title}</h2>
            {step.content}
          </div>
        </Step>
      ))}
    </Stepper>
  );
}

export default FormStepper;