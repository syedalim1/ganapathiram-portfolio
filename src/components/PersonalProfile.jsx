import React from "react";

const personalProfile = {
  name: "N.Ganapathiram",
  age: 26,
  dob: "01-06-1998",
  fathersName: "T.G Narayanan",
  mothersName: "N.Meenakshi Sundari",
  gender: "Male",
  maritalStatus: "Unmarried",
  nationality: "Indian",
  languagesKnown: ["Tamil", "English"],
  hobbies: [
    "Playing",
    "Travelling",
    "Cricket",
    "Volunteering",
    "Cooking",
    "Gardening",
    "Listening to Music",
  ],
};

const PersonalProfile = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center mb-6">
        Personal Profile
      </h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="space-y-4">
          <p>
            <strong>Name:</strong> {personalProfile.name}
          </p>
          <p>
            <strong>Age:</strong> {personalProfile.age}
          </p>
          <p>
            <strong>Date of Birth:</strong> {personalProfile.dob}
          </p>
          <p>
            <strong>Father’s Name:</strong> {personalProfile.fathersName}
          </p>
          <p>
            <strong>Mother’s Name:</strong> {personalProfile.mothersName}
          </p>
          <p>
            <strong>Gender:</strong> {personalProfile.gender}
          </p>
          <p>
            <strong>Marital Status:</strong> {personalProfile.maritalStatus}
          </p>
          <p>
            <strong>Nationality:</strong> {personalProfile.nationality}
          </p>
          <p>
            <strong>Languages Known:</strong>{" "}
            {personalProfile.languagesKnown.join(", ")}
          </p>
          <p>
            <strong>Hobbies:</strong> {personalProfile.hobbies.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalProfile;
