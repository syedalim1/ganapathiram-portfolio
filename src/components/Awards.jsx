import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";

const Awards = () => {
  const awards = [
    {
      title: "SEED GRANT - Rathinam GPT",
      description:
        "Received <strong>SEED GRANT Amount Rs-50,000</strong> from Rathinam College of Arts and Science for the project proposal entitled <strong>'Rathinam-GPT: Elevating Academic Support with a Customized Large Language Model.'</strong>",
      color: "bg-blue-100",
    },
    {
      title: "SEED GRANT - Blind Stick Innovation",
      description:
        "Received <strong>SEED GRANT Amount Rs-25,000</strong> from Rathinam College of Arts and Science for the project proposal entitled <strong>'Connectivity Unveiled: Guiding Light and Empowering Independence with Bluetooth Enabled Blind Sticks for Visually Impaired Heroes.'</strong>",
      color: "bg-green-100",
    },
    {
      title: "Rotary Club Recognition",
      description:
        "Received an award for <strong>excellent contribution in the field of organizing extension activities</strong> during the academic year 2023-2024 from the <strong>Rotary Club of Coimbatore.</strong>",
      color: "bg-yellow-100",
    },
    {
      title: "AI Coach Certification",
      description:
        "Certified as a <strong>Coach for Artificial Intelligence</strong> from <strong>DELL.</strong>",
      color: "bg-purple-100",
    },
    {
      title: "IBM Professional Certification",
      description:
        "Certified as a <strong>Professional from IBM</strong> for successfully completing projects from IBM.",
      color: "bg-pink-100",
    },
    {
      title: "Best Faculty - Centre of Excellence",
      description:
        "Awarded as <strong>Best Faculty - Centre of Excellence</strong> during <strong>AASAN UTSAV 7.0</strong> from Rathinam College of Arts & Science.",
      color: "bg-indigo-100",
    },
    {
      title: "Best Hackathon Mentor",
      description:
        "Awarded for <strong>Best Faculty Contributions for Hackathon.</strong>",
      color: "bg-red-100",
    },
    {
      title: "Evaluator & Resource Person",
      description:
        "Acted as <strong>Evaluator & Resource Person</strong> for <strong>Socio-Tech Hackathon</strong> at KPR College of Arts, Science, and Research.",
      color: "bg-teal-100",
    },
    {
      title: "Research Article Writing",
      description:
        "Acted as <strong>Resource Person for Research Article Writing</strong> at Kamadenu Arts and Science College.",
      color: "bg-orange-100",
    },
    {
      title: "Design Thinking Workshop",
      description:
        "Acted as <strong>Resource Person</strong> on the topic <strong>'Design Thinking'</strong> at Kongunadu Arts and Science College.",
      color: "bg-cyan-100",
    },
    {
      title: "Best Paper Award",
      description:
        "Received the <strong>Best Paper Award</strong> for the title <strong>'Technology Embedded Education: The Future of Learning'</strong> at a <strong>NAAC Sponsored TWO-DAY NATIONAL CONFERENCE</strong> on <strong>'Best Practices of Research & Innovation in STEAM Higher Education - A Step Forward to Glorify Sustainable Development Goals Through Indian Knowledge System'</strong> organized by <strong>Shrimathi Devkunvar Nanalal Bhatt Vaishnav College for Women.</strong>",
      color: "bg-lime-100",
    },
  ];

  return (
    <section className="relative bg-gray-50 py-16 px-6 text-gray-900">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/images/awards-bg.jpg')" }}
      ></div>

      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-blue-800 uppercase tracking-wider">
          Awards & Recognition
        </h2>
        <div className="relative border-l-4 border-blue-500 pl-6">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`mb-8 p-6 rounded-lg shadow-lg ${award.color} hover:shadow-xl transition-shadow duration-300 flex items-start space-x-4 relative`}
            >
              <div className="absolute -left-8 top-6 bg-blue-500 h-4 w-4 rounded-full"></div>
              <FaAward className="text-3xl text-gray-700" />
              <div>
                <h3
                  className="text-xl font-semibold mb-2"
                  dangerouslySetInnerHTML={{ __html: award.title }}
                />
                <p
                  className="text-gray-800"
                  dangerouslySetInnerHTML={{ __html: award.description }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
