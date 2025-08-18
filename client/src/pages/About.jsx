import CallToAction from "../components/CallToAction";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 py-12  dark:bg-black">
      <div className="w-full max-w-8xl text-center">
        <h1 className="text-4xl font-bold text-accent my-10">
          About MHD's Blog
        </h1>

        <div className="text-lg text-gray-700 dark:text-gray-300 space-y-6">
          <p>
            Welcome to Mhd's Blog! This blog was created by Mohamad Sabha as a
            personal project to share his thoughts and ideas with the world.
            Mohamad is a passionate developer who loves to write about
            technology, coding, and everything in between.
          </p>

          <p>
            On this blog, you'll find weekly articles and tutorials on topics
            such as web development, software engineering, and programming
            languages. Mohamad is always learning and exploring new
            technologies, so be sure to check back often for new content!
          </p>

          <p>
            We encourage you to leave comments on our posts and engage with
            other readers. You can like other people's comments and reply to
            them as well. We believe that a community of learners can help each
            other grow and improve.
          </p>
        </div>

        <div className="mt-10">
          <CallToAction />
        </div>
      </div>
    </div>
  );
}
