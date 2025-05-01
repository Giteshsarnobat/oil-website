import teamImg from "../assets/teamImg.jpg";

const teamMembers = [
  {
    name: "Mr. Hriday Narain Tripathi",
    role: "Managing director",
    image: teamImg,
  },
];

const TeamCard = () => {
  return (
    <section className="bg-yellow-50 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-red-700 mb-4">Meet Our Team</h2>
        <p className="text-gray-700">
          We’re passionate about bringing the purest mustard oil to your
          kitchen.
        </p>
      </div>

      <div className="flex justify-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300 w-full sm:w-96 shadow-lg"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-50 h-50 mx-auto rounded-full object-cover mb-4 border-4 border-yellow-300"
            />
            <h3 className="text-xl font-semibold text-red-700">
              {member.name}
            </h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamCard;
