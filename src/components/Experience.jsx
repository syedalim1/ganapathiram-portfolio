import { motion } from "framer-motion";
import { FaAward, FaChalkboardTeacher, FaBriefcase } from "react-icons/fa";

const Experience = () => {
  return (
    <section className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">
        Teaching & Industry Experience
      </h2>
      <div className="space-y-8">
        <div className="border-l-4 border-blue-500 pl-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-gray-100 rounded-lg shadow-lg flex items-start space-x-4"
          >
            <FaChalkboardTeacher className="text-3xl text-gray-700" />
            <div>
              <h3 className="text-xl font-semibold">
                Rathinam College of Arts & Science
              </h3>
              <p className="text-gray-800">
                Assistant Professor, Department of Computer Science - Centre of
                Excellence (3.2 years)
              </p>
              <p className="text-gray-600">Started: 22/11/2021</p>
            </div>
          </motion.div>
        </div>

        <div className="border-l-4 border-blue-500 pl-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 bg-gray-100 rounded-lg shadow-lg flex items-start space-x-4"
          >
            <FaBriefcase className="text-3xl text-gray-700" />
            <div>
              <h3 className="text-xl font-semibold">BYJUS</h3>
              <p className="text-gray-800">
                Business Development Associate (1.5 years)
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
