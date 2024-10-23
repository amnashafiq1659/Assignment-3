export default function Header() {
  return (
    <header className="bg-fuchsia-950 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">My Landing Page</div>
        <ul className="flex space-x-4 text-xl">
          <li>
            <a href="#about" className="hover:text-yellow-400">
              About Me
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-yellow-400">
              Skills
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
