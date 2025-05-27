type Props = {
  title: string;
  description: string;
  link: string;
  tech: string[];
};

export default function ProjectCard({ title, description, link, tech }: Props) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-300">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t, i) => (
          <span
            key={i}
            className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded"
          >
            {t}
          </span>
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline text-sm"
      >
        View Project
      </a>
    </div>
  );
}
