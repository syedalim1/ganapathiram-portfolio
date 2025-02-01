import { useState } from "react";
import { motion } from "framer-motion";
import { FaBook, FaFileAlt } from "react-icons/fa";

const publications = {
  books: [
    {
      title: "Android Odyssey",
      publisher: "Laser Park Publishing House, Volume 22",
      date: "February 2024",
    },
    {
      title: "Python the Ladder to Next Gen Technologies",
      publisher: "Laser Park Publishing House, Volume 1",
      date: "August 2023",
    },
    {
      title: "Easiest Way to Learn Data Structure and Algorithms",
      publisher: "Laser Park Publishing House, Volume 1",
      date: "June 2023",
    },
  ],
  journals: [
    {
      title:
        "A Comprehensive Study on AI and ML Techniques in Healthcare Diagnostics",
      publisher:
        "International Research Journal of Multidisciplinary Technovation",
      date: "Yet to Publish (In Review)",
    },
    {
      title: "Advancements in AI and Machine Learning for Cancer Diagnosis",
      publisher: "ICTACT Journal on Image and Video Processing",
      date: "February 2025 (Accepted)",
    },
    {
      title: "An Overview of Software Testing Techniques and Strategies",
      publisher: "The Journal of Community Informatics, Vol: 20, 1",
      date: "2024",
    },
    {
      title: "Controlling Use of Alcohol Consumption through Data Analytics",
      publisher: "INDIAN JOURNAL OF NATURAL SCIENCES, Vol 14/Issue 80/Oct/2023",
      date: "2023",
    },
    {
      title:
        "An Analytical Study of Blockchain Technologies And Its Potential Applications",
      publisher:
        "Journal of Data Acquisition and Processing, Vol 38(3) 2023 (Scopus Indexed Journal)",
      date: "2023",
    },
    {
      title:
        "Innovation Development & Environmental Technology of a Highly Accurate Ensemble Model for Real-Time Low-Cost Air Quality Sensor",
      publisher:
        "Computer Integrated Management System, Vol 28, 2022 (Scopus Indexed Journal)",
      date: "2022",
    },
    {
      title:
        "Technological Research on Remote Access VPN and Its Supremacy Over Site to Site VPN",
      publisher:
        "Journal of Fundamental and Comparative Research, 36-vol VIII.NO.IS(XXV1);2022 (UGC PRINTED)",
      date: "2022",
    },
    {
      title:
        "Research On Yield Development Of Banana Based On Medication And Fertilization For Virus Infected Disease Using Data Mining Algorithm",
      publisher:
        "Advancement In Applications Of Microbiology And Bioinformatics, Web of Science",
      date: "2020",
    },
    {
      title:
        "A Research On Crop Yield Estimation Of Banana In Various Soil And Weather Around North Coimbatore Area Using Data Mining Algorithm",
      publisher:
        "TEST ENGINEERING AND MANAGEMENT JOURNALS (Scopus Indexed Journal)",
      date: "2020",
    },
    {
      title: "Tackling Tools On Green Computing",
      publisher:
        "International Journal of Emerging Technologies and Innovative Research (JETIR), Volume 2, Issue 4",
      date: "April 2019",
    },
    {
      title: "Evolution Technique In Wireless Technology",
      publisher:
        "International Journal of Advanced Research in Computer and Communication Engineering (IJARCCE), Volume 7, Issue 11",
      date: "November 2018",
    },
    {
      title: "Artificial Intelligence Assessments In Different Applications",
      publisher:
        "National Conference On Intelligent Learning And Computing (NCILC19), Volume-6",
      date: "February 2019",
    },
    {
      title: "Transmitting Crypt Datas",
      publisher:
        "International Conference On Advances In Information Technology And Networking (ICATN19), Volume-6",
      date: "February 2019",
    },
  ],
};

const Publications = () => {
  const [activeTab, setActiveTab] = useState("books");

  return (
    <section className="relative bg-gray-50 py-16 px-6 text-gray-900">
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-blue-800 uppercase tracking-wider">
          Publications
        </h2>
        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 mx-2 text-lg font-semibold border-b-4 transition-colors duration-300 ${
              activeTab === "books"
                ? "border-blue-500 text-blue-700"
                : "border-transparent text-gray-600"
            }`}
            onClick={() => setActiveTab("books")}
          >
            Book Publications
          </button>
          <button
            className={`px-4 py-2 mx-2 text-lg font-semibold border-b-4 transition-colors duration-300 ${
              activeTab === "journals"
                ? "border-blue-500 text-blue-700"
                : "border-transparent text-gray-600"
            }`}
            onClick={() => setActiveTab("journals")}
          >
            Journal Publications
          </button>
        </div>
        <div className="relative border-l-4 border-blue-500 pl-6">
          {publications[activeTab].map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-8 p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 flex items-start space-x-4 relative"
            >
              <div className="absolute -left-8 top-6 bg-blue-500 h-4 w-4 rounded-full"></div>
              {activeTab === "books" ? (
                <FaBook className="text-3xl text-gray-700" />
              ) : (
                <FaFileAlt className="text-3xl text-gray-700" />
              )}
              <div>
                <h3 className="text-xl font-semibold">{pub.title}</h3>
                <p className="text-gray-800">{pub.publisher}</p>
                <p className="text-gray-600">{pub.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
