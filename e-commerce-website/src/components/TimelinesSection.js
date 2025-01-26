import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './TimelineSection.css';
import {
  faUsers,       // For "Talk to our Interior Designer"
//   faPhone,       // For "Talk to our Interior Designer"
  faClipboard,   // For "Detailed Drawing and Approval"
//   faPencilAlt,   // For "Detailed Drawing and Approval"
  faIndustry,    // For "Production at Own Factories"
//   faCog,         // For "Production at Own Factories"
  faTruck,       // For "Material Delivery & Execution"
//   faBox,         // For "Material Delivery & Execution"
  faKey,         // For "On Time Project Hand Over"
//   faCheck,       // For "On Time Project Hand Over"
} from '@fortawesome/free-solid-svg-icons';



const TimelineSection = () => {
  return (
    <section className="timeline-section">
      <h1>PROJECT COMPLETION IN <span className="highlight">50 WORKING DAYS*</span></h1>
      <br />
      <br />
      <div className="timeline">
        {/* Step 1: Talk to our Interior Designer & Get an Estimate */}
        <div className="timeline-step" data-step="Talk to our Interior Designer & Get an Estimate">
          <div className="circle">
            <FontAwesomeIcon icon={faUsers} className="main-icon" />
            {/* <FontAwesomeIcon icon={faPhone} className="overlay-icon" /> */}
          </div>
          <p>Talk to our Interior Designer & Get an Estimate</p>
        </div>

        <div className="arrow"></div>

        {/* Step 2: Detailed Drawing and Approval */}
        <div className="timeline-step" data-step="Detailed Drawing and Approval">
          <div className="circle">
            <FontAwesomeIcon icon={faClipboard} className="main-icon" />
            {/* <FontAwesomeIcon icon={faPencilAlt} className="overlay-icon" /> */}
          </div>
          <p>Detailed Drawing and Approval</p>
        </div>

        <div className="arrow"></div>

        {/* Step 3: Production at Own Factories */}
        <div className="timeline-step" data-step="Production at Own Factories">
          <div className="circle">
            <FontAwesomeIcon icon={faIndustry} className="main-icon" />
            {/* <FontAwesomeIcon icon={faCog} className="overlay-icon" /> */}
          </div>
          <p>Production at Own Factories</p>
        </div>

        <div className="arrow"></div>

        {/* Step 4: Material Delivery & Execution */}
        <div className="timeline-step" data-step="Material Delivery & Execution">
          <div className="circle">
            <FontAwesomeIcon icon={faTruck} className="main-icon" />
            {/* <FontAwesomeIcon icon={faBox} className="overlay-icon" /> */}
          </div>
          <p>Material Delivery & Execution</p>
        </div>

        <div className="arrow"></div>

        {/* Step 5: On Time Project Hand Over */}
        <div className="timeline-step" data-step="On Time Project Hand Over">
          <div className="circle">
            <FontAwesomeIcon icon={faKey} className="main-icon" />
            {/* <FontAwesomeIcon icon={faCheck} className="overlay-icon" /> */}
          </div>
          <p>On Time Project Hand Over</p>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;