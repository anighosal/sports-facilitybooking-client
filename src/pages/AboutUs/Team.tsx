const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    bio: "John is the visionary behind our platform with 15+ years of experience in the sports industry.",
    image: "https://i.ibb.co.com/4YJ2Xxc/images-2.jpg",
  },
  {
    name: "Jane Smith",
    role: "Head of Operations",
    bio: "Jane ensures everything runs smoothly with her exceptional management and leadership skills.",
    image: "https://i.ibb.co.com/n19TT4s/images-1.jpg",
  },
  {
    name: "Michael Lee",
    role: "Lead Developer",
    bio: "Michael leads our tech team, developing cutting-edge solutions to make our platform better.",
    image: "https://i.ibb.co.com/GF4Bx6M/images.jpg",
  },
];

const Team = () => {
  return (
    <section className=" text-gray-700 p-20">
      <h2 className="text-2xl font-bold text-center mb-10">Meet Our Team</h2>
      <div className="space-y-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`flex items-center bg-white border rounded-lg overflow-hidden ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            {/* Image Section */}
            <img
              src={member.image}
              alt={member.name}
              className="round-full object-cover p-4"
            />

            {/* Text Section */}
            <div className="w-2/3 p-6">
              <h3 className="text-2xl font-bold">{member.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{member.role}</p>
              <p className="text-gray-700">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
