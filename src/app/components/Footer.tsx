const Footer = () => {
  return (
    <footer className="bottom-0 left-0 w-full bg-gray-100 text-center py-4 z-40">
      <div className="text-gray-700 text-sm">
        &copy; {new Date().getFullYear()} Divyanshu Chaurasiya. All rights reserved.
      </div>
      <div className="mt-2 space-x-4">
        <a
          href="https://www.linkedin.com/in/YOUR_LINKEDIN "
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/YOUR_GITHUB "
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </a>
        <a
          href="mailto:cdivyanshu10@gmail.com"
          className="text-blue-600 hover:underline"
        >
          Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;