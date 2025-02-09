import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Ph.D (Pursuing) Artificial Intelligence & Robotics ",

    year: "-",
    institute: "Rathinam College of Arts and Science",
    board: "-",
    grade: "-",
  },
  {
    degree: "M.Sc (Computer Technology)",
    year: "2020",
    institute: "Sri Krishna Arts and Science College, Coimbatore",
    board: "Bharathiar University, Coimbatore",
    grade: "N/A",
  },
  {
    degree: "B.Sc (Computer Technology)",
    year: "2018",
    institute: "Kongunadu Arts and Science College, Coimbatore",
    board: "Bharathiar University, Coimbatore",
    grade: "78%",
  },
  {
    degree: "H.Sc",
    year: "2015",
    institute: "Chinmaya Vidyalaya Mat Hr Sec School, Coimbatore",
    board: "Bharathiar University, Coimbatore",
    grade: "72%",
  },
  {
    degree: "SSLC",
    year: "2013",
    institute: "Chinmaya Vidyalaya Mat Hr Sec School, Coimbatore",
    board: "-",
    grade: "88%",
  },
];

const Education = () => {
  return (
    <section className="relative bg-gray-50 py-16 px-6 text-gray-900">
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-purple-800 uppercase tracking-wider">
          Academic Qualifications
        </h2>
        <div className="relative border-l-4 border-purple-500 pl-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-8 p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 flex items-start space-x-4 relative"
            >
              <div className="absolute -left-8 top-6 bg-purple-500 h-4 w-4 rounded-full"></div>
              <div>
                <h3 className="text-xl font-semibold text-purple-700">{edu.degree}</h3>
                <p className="text-gray-800">{edu.institute}</p>
                <p className="text-gray-600">{edu.board}</p>
                <p className="text-gray-500">Year of Passing: {edu.year}</p>
                <p className="text-gray-500 font-bold">Percentage/Grade: {edu.grade}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;