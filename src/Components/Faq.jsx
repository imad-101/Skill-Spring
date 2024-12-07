import { useState } from "react";
function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]">
            Frequently asked questions
          </h2>
        </div>
        <div className="accordion-group">
          {[
            {
              title: "How do I create an account?",
              content:
                "Creating an account is simple! Click on the ( Join Now ) button, enter your email, and follow the instructions.",
            },
            {
              title: "What kinds of gigs can I post or find?",
              content:
                "You can post or find gigs like tutoring, graphic design, content writing, or local chores. It’s up to the community’s needs!",
            },
            {
              title: "Are all the courses free?",
              content:
                "No, while we offer many free resources, some premium courses may require payment. We ensure affordable options for students.",
            },
            {
              title: "Can I teach or offer my services as a student?",
              content:
                "Yes! If you have skills to share, you can offer tuition, freelance work, or sell study resources on the platform.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className={`accordion border border-solid border-gray-300 p-4 rounded-xl transition duration-500 mb-8 lg:p-4 ${
                activeIndex === index ? "bg-indigo-50 border-green-800" : ""
              }`}
            >
              <button
                className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-green-900"
                onClick={() => toggleAccordion(index)}
              >
                <h5>{faq.title}</h5>
                <svg
                  className={`w-6 h-6 text-gray-900 transition duration-500 ${
                    activeIndex === index ? "hidden" : "block"
                  } group-hover:text-green-800`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18M12 18V6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  className={`w-6 h-6 text-gray-900 transition duration-500 ${
                    activeIndex === index ? "block" : "hidden"
                  } group-hover:text-green-800`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                className={`accordion-content overflow-hidden transition-all duration-500 ${
                  activeIndex === index ? "max-h-[250px] pr-4" : "max-h-0"
                }`}
              >
                <p className="text-base text-gray-900 font-normal leading-6">
                  {faq.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
