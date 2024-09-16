import bgImage from "../../assets/footbal.jpg";

const milestones = [
  {
    year: "2010",
    title: "Founded",
    description:
      "Our journey began in 2010 with the vision to revolutionize sports facility booking and management.",
  },
  {
    year: "2013",
    title: "First Major Partnership",
    description:
      "We partnered with several key sports facilities, bringing our platform to a broader audience.",
  },
  {
    year: "2015",
    title: "1M Users Milestone",
    description:
      "Our platform crossed 1 million users, helping athletes and sports enthusiasts access facilities worldwide.",
  },
  {
    year: "2018",
    title: "Global Expansion",
    description:
      "We expanded globally, providing access to sports facilities in multiple countries.",
  },
  {
    year: "2020",
    title: "Launch of Mobile App",
    description:
      "To improve the user experience, we launched our mobile app, making booking even easier.",
  },
  {
    year: "2022",
    title: "Sustainability Initiative",
    description:
      "We started our sustainability initiative, working towards greener and more eco-friendly sports facilities.",
  },
];

const Milestones = () => {
  return (
    <section
      className="relative py-16 text-gray-700 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-50"></div>

      <div className="relative z-10">
        <h2 className="text-2xl font-bold text-center  mb-10">
          Our History & Milestones
        </h2>

        {/* Timeline Container */}
        <div className="relative border-l-4 border-green-500">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`mb-10 ml-8 flex flex-col ${
                index % 2 === 0 ? "items-start" : "items-end"
              }`}
            >
              {/* Timeline Indicator */}
              <div className="absolute w-6 h-6 bg-green-500 rounded-full left-[-12px] top-0"></div>

              {/* Card */}
              <div
                className={`bg-white border p-6 rounded-lg max-w-lg ${
                  index % 2 === 0 ? "ml-0" : "ml-auto"
                }`}
              >
                <h3 className="text-xxl font-semibold text-gray-700">
                  {milestone.year}
                </h3>
                <h4 className="font-bold text-gray-700">{milestone.title}</h4>
                <p className="text-gray-700 mt-2">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;
