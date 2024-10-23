export default function Skills() {
  return (
    <section id="skills" className="py-10 bg-fuchsia-400 rounded-lg shadow-lg">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-fuchsia-950">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-10 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-fuchsia-950">
              HTML & CSS
            </h3>
            <p className="text-gray-700 text-xl">
              Building responsive and structured web pages.
            </p>
          </div>
          <div className="bg-white p-10 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-fuchsia-950">
              JavaScript
            </h3>
            <p className="text-gray-700 text-xl">
              Creating dynamic and interactive web applications.
            </p>
          </div>
          <div className="bg-white p-10 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-fuchsia-950">
              TypeScript
            </h3>
            <p className="text-gray-700 text-xl">
              Enhancing JavaScript with type safety and better tooling.
            </p>
          </div>
          <div className="bg-white p-10 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-fuchsia-950">
              Next.js
            </h3>
            <p className="text-gray-700 text-xl">
              Developing server-side rendered web apps with ease.
            </p>
          </div>
          <div className="bg-white p-10 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-fuchsia-950">
              Tailwind CSS
            </h3>
            <p className="text-gray-700 text-xl">
              Building modern UIs quickly with utility-first styling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
