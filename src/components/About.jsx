import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative  flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "./profile.jpg", // Add your background image URL
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0   bg-opacity-50"></div>

      <div className="relative z-10  bg-opacity-90 p-8 rounded-lg shadow-2xl max-w-5xl mx-4 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
        {/* About Details */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h2 className="text-4xl font-bold mb-4 text-blue-800">About Me</h2>
          <p className="text-lg text-gray-700 mb-4">
            <span className="font-semibold text-blue-600">
              Mr. N. Ganapathiram M.Sc (Ph.D)
            </span>
            , an{" "}
            <span className="text-purple-600">
              <br />
              Assistant Professor
            </span>{" "}
            and passionate educator in
            <span className="text-green-600"> Computer Science</span>.
          </p>
          <div className="space-y-3">
            <p className="text-gray-700">
              <span className="font-semibold text-blue-600">Address:</span> 43–
              Venkata Krishna road, R.S Puram, Coimbatore-641002.
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-blue-600">Email:</span>
              <a
                href="mailto:ganapathiram9800@gmail.com"
                className="text-purple-600 hover:underline"
              >
                ganapathiram9800@gmail.com
              </a>
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-blue-600">Mobile:</span>
              <a
                href="tel:9677400123"
                className="text-green-600 hover:underline"
              >
                9677400123
              </a>
              ,
              <a
                href="tel:8248935436"
                className="text-green-600 hover:underline"
              >
                8248935436
              </a>
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-blue-600">
                Teaching Experience:
              </span>{" "}
              3.2 years as Assistant Professor at Rathinam College of Arts &
              Science.
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-blue-600">
                Industry Experience:
              </span>{" "}
              1.5 years as Business Development Associate at BYJUS.
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-blue-600">
                Research Interests:
              </span>{" "}
              Artificial Intelligence, Machine Learning, Natural Language
              Processing, and Cloud Computing.
            </p>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 cursor-pointer hover:scale-105 transform transition-all duration-300 ease-in-out"
        >
          <img
            src="./profile.jpg" // Replace with your professional image URL
            alt="Mr. N. Ganapathiram"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
