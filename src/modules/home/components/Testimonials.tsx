import SectionWrapper from "../../common/layout/SectionWrapper";

const testimonials = [
  {
    name: "Sarah A.",
    role: "Frontend Developer",
    type: "job-seeker",
    content:
      "InterviewIQ made it so easy to land a remote job. The AI interviews felt natural, and I got hired in just two weeks!",
  },
  {
    name: "David K.",
    role: "Recruiter at TechHire",
    type: "recruiter",
    content:
      "We've streamlined our entire interview pipeline with InterviewIQ. The quality of candidates is top-notch.",
  },
  {
    name: "Emily R.",
    role: "UI/UX Designer",
    type: "job-seeker",
    content:
      "It felt like talking to a real person. The prep questions and feedback gave me confidence before the real interview.",
  },
  {
    name: "James M.",
    role: "Talent Acquisition, InnoTech",
    type: "recruiter",
    content:
      "Scheduling interviews is now a breeze. InterviewIQ gives us insightful reports and saves us hours weekly.",
  },
];

export default function TestimonialsSection() {
  return (
    <SectionWrapper className="overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary">
          Trusted by Candidates & Recruiters
        </h2>
        <p className="mt-4 text-lg text-primary-600 max-w-3xl mx-auto">
          Hear what users are saying about their experience with InterviewIQ — from landing their dream jobs to revolutionizing hiring workflows.
        </p>
      </div>

      <div className="relative w-full h-[440px] md:h-[500px] overflow-x-hidden flex items-center">
        <div className="flex space-x-10 testimonial-marquee">
          {testimonials.concat(testimonials).map((t, i) => (
            <div
              key={i}
              className={`bg-white border border-gray-200 shadow-xl rounded-3xl px-10 py-8 min-w-[380px] md:min-w-[460px] max-w-lg flex-shrink-0 transform transition-transform duration-300 ${
                i % 2 === 0 ? "rotate-[-1.5deg]" : "rotate-[1.5deg]"
              }`}
            >
              <div className="flex items-center space-x-5 mb-6">
                <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center overflow-hidden">
                  <img
                    src={`/assets/testimonials/${t.type === "recruiter" ? "boy" : "girl"}.png`}
                    alt={`${t.name} profile`}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="font-semibold text-lg text-gray-800">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-700 text-base leading-relaxed italic">
                “{t.content}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
