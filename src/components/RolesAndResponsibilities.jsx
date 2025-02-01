import React from "react";

const rolesAndResponsibilities = [
  "Acting as IIC Innovation Activity Coordinator",
  "Acting as Techno Club Coordinator",
  "Department NAAC committee member Rathinam College of Arts and Science",
  "Acting as BOS advisory committee member",
  "Part of IIC Innovation Ambassador",
  "Department IQAC Co-coordinator Rathinam College of Arts and Science",
  "Acting as a resource person in MAXCADD Academy",
  "Attended 5 workshops, 24 FDP, 3 seminars",
  "Nominated as chairman of the department during PG studies. Played the role as organizing committee head in symposiums in college during UG studies",
  "Nominated as Secretary of the college and organizing committee head during UG",
  "Nominated as School Pupil Leader during Higher Studies. Organized and conducted many events and functions during School Days",
  "Member of Chinmaya Yuva Kendra (CHYK). Youth Wing of Chinmaya Mission. It aims to empower youth with the vision, values, and dynamic for all success",
  "Patent submitted on the topic: ULTROSONIC SENSOR BASED AUTOMATIC OBSTACLE DETECTION FOR VEHICLE",
];

const RolesAndResponsibilities = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center mb-6">
        Roles & Responsibilities
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        {rolesAndResponsibilities.map((role, index) => (
          <li key={index} className="text-lg text-gray-800">
            {role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RolesAndResponsibilities;
