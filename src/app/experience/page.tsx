const experiences = [
  {
    company: "ATYA LABS",
    title: "MERN Stack Developer",
    period: "Apr 2019 – Apr 2020",
    description: "Worked remotely on scalable web apps using the MERN stack.",
  },
  {
    company: "INSTIVIEW",
    title: "Full Stack Developer",
    period: "Sept – Jan 2025",
    description:
      "Led a 6-person team building a Door Visualizer for a US-based firm using MERN, Stripe, and Razorpay.",
  },
  {
    company: "ARDENT CONSUMERS",
    title: "Frontend Developer",
    period: "July – Aug 2024",
    description: "Delivered a responsive website for Pedigree M&A consultants using HTML, CSS, and Figma.",
  },
];

export default function Experience() {
  return (
    <section className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      <div className="space-y-6 border-l-2 pl-6">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full left-[-10px] top-1.5"></div>
            <h3 className="text-xl font-semibold">{exp.title} – <span className="text-gray-600">{exp.company}</span></h3>
            <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
