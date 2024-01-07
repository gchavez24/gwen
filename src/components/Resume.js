// Resume.js

import React from 'react';
import '../css/Resume.css';
import Navbar from './Navbar';

const Resume = () => {
  const personalInfo = {
    name: 'Gwen Vandenhoeck',
    email: 'gwen.vandenhoeck@gmail.com',
    phone: '+1 917 588 2799',
    height: '5 ft 8 in / 1.72 m',
    dob: '04/15/2002 (21 years old)',
  };

  const employmentHistory = [
    { company: 'Saint Louis Ballet', director: 'Gen Horiuchi', year: '2023 - 24' },
    { company: 'Kansas City Ballet', director: 'Devon Carney', year: '2022 - 23' },
  ];

  const performanceExperience = [
    { role: 'Coffee, Marzipan, Snowflake', production: 'The Nutcracker', company: 'SLB', year: '2023' },
    { role: 'Peasant, Willi', production: 'Giselle', company: 'SLB', year: '2023' },
    { role: 'Girl in Satin', production: 'Sandpaper', company: 'KCB', year: '2023' },
    { role: 'Courtier, Fairy', production: 'Cinderella', company: 'KCB', year: '2023' },
    { role: 'Snowflake, Flower, Marzipan', production: 'The Nutcracker', company: 'KCB', year: '2022' },
    { role: 'Snowflake, Flower', production: 'The Nutcracker (Balanchine)', company: 'PNB', year: '2021' },
    { role: 'Lilac Fairy', production: 'Sleeping Beauty (Petipa)', company: 'BAE', year: '2019' },
  ];

  const training = {
    schools: [
      { name: 'Pacific Northwest Ballet (Professional Division)', director: 'Peter Boal', year: '2020 - 2022' },
      { name: 'Ballet Academy East', director: 'Darla Hoover', year: '2009 - 2020' },
    ],
    summerPrograms: [
      'Pacific Northwest Ballet: 2020',
      'San Francisco Ballet: 2018, 19, 20',
      'Royal Danish Ballet: 2018',
      'Central Pennsylvania Youth Ballet: 2014, 15, 16',
    ],
  };

  const choreographicExperience = [
    { details: 'Contemporary Solo', schoolCompany: 'PNB', year: '2021' },
    { details: 'Ballet Piece for 13 dancers', schoolCompany: 'BAE', year: '2018/19' },
  ];

  const additionalInfo = {
    citizenship: 'Dual US and Belgian citizenship',
    teachingExperience: 'Assistant Teaching experience at Ballet Academy East (3 years)',
  };

  const references = [
    { name: 'Wendy Whelan', position: 'Associate Artistic Director at NYCB', email: 'wendymwhelan@yahoo.com' },
    { name: 'Julia Dubno', position: 'Founder and Director at Ballet Academy East', email: 'jdubno@baenyc.com' },
    { name: 'Kristi Capps', position: 'Rehearsal Director at Kansas City Ballet', email: 'kcapps@kcballet.org' },
  ];

  return (
    <><Navbar /><div className="grid-container">
      <div className="grid-1">
        <header>
          <img className="resume-picture" src="/resume-pic.png" alt="Resume" />
          <h1>{personalInfo.name}</h1>
          <p>Email: {personalInfo.email}</p>
          <p>Phone: {personalInfo.phone}</p>
          <p>Height: {personalInfo.height}</p>
          <p>Date of Birth: {personalInfo.dob}</p>
        </header>
      </div>

      <div className="grid-2">
        <section>
          <h2>COMPANY EMPLOYMENT</h2>
          <ul>
            {employmentHistory.map((job, index) => (
              <li key={index}>
                {job.year}: {job.company}, {job.director}, Artistic Director
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>PERFORMANCE EXPERIENCE</h2>
          <ul>
            {performanceExperience.map((performance, index) => (
              <li key={index}>
                <strong>{performance.production}</strong> ({performance.company}): {performance.role}, {performance.year}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>TRAINING</h2>
          <ul>
            {training.schools.map((school, index) => (
              <li key={index}>
                {school.year}: {school.name}, {school.director}
              </li>
            ))}
          </ul>
          <p>Summer Programs:</p>
          <ul>
            {training.summerPrograms.map((program, index) => (
              <li key={index}>{program}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>CHOREOGRAPHIC EXPERIENCE</h2>
          <ul>
            {choreographicExperience.map((experience, index) => (
              <li key={index}>
                {experience.year}: {experience.details}, {experience.schoolCompany}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>ADDITIONAL INFORMATION</h2>
          <p>{additionalInfo.citizenship}</p>
          <p>{additionalInfo.teachingExperience}</p>
        </section>

        <section>
          <h2>REFERENCES</h2>
          <ul>
            {references.map((ref, index) => (
              <li key={index}>
                {ref.name}, {ref.position} - Email: {ref.email}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div></>
  );  
};

export default Resume;