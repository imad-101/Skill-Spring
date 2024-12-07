import { motion } from "framer-motion";
import {
  FaClipboardList,
  FaBriefcase,
  FaUserCircle,
  FaQuestionCircle,
  FaGraduationCap,
} from "react-icons/fa";

function InterviewTips() {
  return (
    <div className="p-8 bg-green-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
        Interview Tips
      </h2>

      <div className="space-y-8">
        {/* Section 1: Introduction */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg space-y-4 transition-all hover:shadow-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center space-x-4">
            <FaGraduationCap className="text-green-800 h-6 w-6" />
            <h3 className="text-xl font-semibold">
              Introduction to Interview Preparation
            </h3>
          </div>
          <p>
            Interviews can be daunting, but with the right preparation, you can
            confidently walk into any interview room. Whether you are applying
            for your first job or a higher-level position, these tips will help
            you present your best self.
          </p>
        </motion.div>

        {/* Section 2: Research the Company */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg space-y-4 transition-all hover:shadow-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-4">
            <FaBriefcase className="text-green-800 h-6 w-6" />
            <h3 className="text-xl font-semibold">Research the Company</h3>
          </div>
          <p>
            Before the interview, take time to research the company. Understand
            its mission, values, products, and culture. This will allow you to
            tailor your responses and show your genuine interest in the role.
          </p>
          <p>
            <strong>Tip:</strong> Check out the company’s website, social media,
            and recent news articles.
          </p>
        </motion.div>

        {/* Section 3: Prepare Your Resume */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg space-y-4 transition-all hover:shadow-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center space-x-4">
            <FaClipboardList className="text-green-800 h-6 w-6" />
            <h3 className="text-xl font-semibold">
              Prepare Your Resume and Portfolio
            </h3>
          </div>
          <p>
            Your resume and portfolio should reflect your skills and
            accomplishments. Be ready to explain how your experience and
            background make you a good fit for the position.
          </p>
          <p>
            <strong>Tip:</strong> Highlight projects, certifications, or
            relevant work experiences that align with the job description.
          </p>
        </motion.div>

        {/* Section 4: Practice Common Interview Questions */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg space-y-4 transition-all hover:shadow-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center space-x-4">
            <FaQuestionCircle className="text-green-800 h-6 w-6" />
            <h3 className="text-xl font-semibold">
              Practice Common Interview Questions
            </h3>
          </div>
          <p>
            There are several questions that almost always come up in
            interviews, like ( Tell me about yourself ) or ( What are your
            strengths and weaknesses? ) Practicing answers to these questions
            can help you speak clearly and confidently.
          </p>
          <p>
            <strong>Tip:</strong> Don’t memorize answers, but practice how to
            structure your responses in a clear and concise manner.
          </p>

          {/* Example Questions */}
          <ul className="list-disc pl-8 space-y-2">
            <li>Tell me about yourself.</li>
            <li>Why do you want to work here?</li>
            <li>What are your strengths and weaknesses?</li>
            <li>Tell me about a challenge you’ve overcome.</li>
            <li>Where do you see yourself in five years?</li>
          </ul>
        </motion.div>

        {/* Section 5: Body Language */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg space-y-4 transition-all hover:shadow-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          <div className="flex items-center space-x-4">
            <FaUserCircle className="text-green-800 h-6 w-6" />
            <h3 className="text-xl font-semibold">
              Body Language and Communication Skills
            </h3>
          </div>
          <p>
            Good body language can convey confidence. Maintain eye contact,
            offer a firm handshake, and sit up straight during the interview.
            Your communication skills are equally important — be clear, concise,
            and listen actively.
          </p>
          <p>
            <strong>Tip:</strong> Avoid crossing your arms, fidgeting, or
            appearing distracted.
          </p>
        </motion.div>

        {/* Section 6: Follow Up */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg space-y-4 transition-all hover:shadow-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center space-x-4">
            <FaBriefcase className="text-green-800 h-6 w-6" />
            <h3 className="text-xl font-semibold">
              Follow Up After the Interview
            </h3>
          </div>
          <p>
            Send a thank-you email within 24 hours of your interview. Express
            gratitude for the opportunity, briefly reiterate why you are a good
            fit for the role, and restate your enthusiasm for the position.
          </p>
          <p>
            <strong>Tip:</strong> Personalize the thank-you note by mentioning
            something specific you discussed during the interview.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default InterviewTips;
