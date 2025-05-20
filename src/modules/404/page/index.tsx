import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-5xl md:text-6xl font-bold text-tertiary mb-4">
        Lost in the Job Jungle?
      </h1>
      <p className="text-lg md:text-xl text-white max-w-xl mb-8">
        Oops! Looks like this page is on vacation — just like your dream job.
        Let’s get you back to where opportunities actually exist!
      </p>

      <img
        src="/assets/error/not-found.jpg"
       alt="404 not found"
        className="w-full max-w-2xl rounded-2xl shadow-lg border-4 border-white"
      />

      <Link
        to="/"
        className="mt-10 inline-block bg-tertiary text-primary font-semibold px-6 py-3 rounded-xl shadow hover:bg-white transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
