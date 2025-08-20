import CallToActionProjects from "../components/CallToActionProjects";

export default function Projects() {
  return (
    <div className="min-h-screen max-w-4xl mx-auto flex justify-center gap-8 items-center mt-4 flex-col p-6">
      <h1 className="text-4xl dark:text-accent font-bold text-center">
        Explore Our Projects
      </h1>
      <p className="text-lg text-gray-600 text-center max-w-3xl">
        Browse a curated selection of projects showcasing practical applications
        across web development, data science, machine learning, and AI. Each
        project highlights real-world problem-solving, coding techniques, and
        the thought process behind building robust, scalable solutions.
      </p>
      <div className="w-full flex flex-col gap-6">
        <section className="bg-gray-100 dark:bg-primary p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold dark:text-accent">
            Why Work on Projects?{" "}
          </h2>
          <p className="text-gray-700 mt-2  dark:text-white ">
            Projects provide hands-on experience, allowing you to apply
            theoretical knowledge to practical challenges. They demonstrate
            problem-solving skills, showcase your technical abilities, and
            create a portfolio that highlights your expertise to potential
            employers or collaborators.
          </p>
        </section>
        <section className="dark:bg-primary bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold dark:text-accent">
            What You’ll Gain
          </h2>
          <ul className="list-disc list-inside dark:text-white text-gray-700 mt-2">
            <li>
              Apply foundational concepts to real-world problems across Web,
              data science, AI, and machine learning.
            </li>
            <li>
              Develop practical skills in coding, modeling, and algorithmic
              thinking.
            </li>
            <li>
              Learn debugging, problem-solving, and analytical techniques that
              improve project quality.
            </li>
            <li>
              Understand best practices for building maintainable, efficient,
              and scalable solutions.
            </li>
            <li>
              Gain experience in designing projects that are robust, reusable,
              and user-friendly.
            </li>
          </ul>
        </section>
      </div>
      <CallToActionProjects />
    </div>
  );
}
