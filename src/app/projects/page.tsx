import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'NOTED – Full Stack Notes App',
    description:
      'Built using MERN stack with authentication, search, pinning, and MySQL integration for user and note management.',
    link: 'https://github.com/yourusername/noted', // Replace with actual
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'MySQL'],
  },
  {
    title: 'AUGMAFLIX – AR Multimedia Viewer',
    description:
      'Android AR movie player using Unity, Vuforia SDK, and ARCore for immersive movie-watching in augmented reality.',
    link: 'https://github.com/yourusername/augmaflix', // Replace with actual
    tech: ['Unity', 'ARCore', 'C#', 'Android Studio'],
  },
  {
    title: 'INSTIVIEW – Door Visualizer Platform',
    description:
      'Full stack MERN project for LoveThatDoor with Stripe, Razorpay integration, and role-based access control.',
    link: '#', // Add deployment/GitHub if available
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Razorpay'],
  },
  {
    title: 'Pedigree – M&A Advisory Site',
    description:
      'Frontend-only site for US-based client using HTML, CSS, and Figma, focused on responsive design and branding.',
    link: 'https://ardentconsumer.com',
    tech: ['HTML', 'CSS', 'JavaScript', 'Figma'],
  },
  {
    title: 'Insignia OKR System',
    description:
      'Performance evaluation system using React, Node, and MongoDB. Built for a UK-based consultancy to track goals.',
    link: '#', // Add deployment or repo
    tech: ['React', 'Node.js', 'MongoDB', 'Figma'],
  },
];

export default function ProjectsPage() {
  return (
    <section className="min-h-screen p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            tech={project.tech}
          />
        ))}
      </div>
    </section>
  );
}
