import Accordion from "../../common/Accordion";
import SectionWrapper from "../../common/layout/SectionWrapper";

export default function TwoColumnAccordion() {
  const leftItems = [
    {
      title: "Smart Interview Simulation",
      content:
        "Interview AI creates realistic mock interviews by analyzing your resume and job goals, asking adaptive questions to simulate actual interview dynamics.",
    },
    {
      title: "Real-time Feedback",
      content:
        "Instant performance analysis on delivery, relevance, and content — no more waiting for feedback. Know exactly what to improve and how.",
    },
    {
      title: "Comprehensive Reports",
      content:
        "Get detailed insights after every session: performance metrics, personalized tips, and growth tracking to monitor your readiness over time.",
    },
  ];

  const rightItems = [
    {
      title: "Resume Integration",
      content:
        "Upload your resume and let our AI tailor your sessions. It pulls your experience, skills, and strengths to generate targeted questions.",
    },
    {
      title: "Job Description Analysis",
      content:
        "Paste a job description, and Interview AI will break it down into key competencies — then simulate interviews aligned with what recruiters want.",
    },
    {
      title: "Continuous Learning",
      content:
        "The platform adapts as you grow. Struggling with soft skills? It helps. Crushing tech questions? It gets tougher. It’s smart like that.",
    },
  ];

  return (
    <SectionWrapper>
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary">
          What Exactly Is Interview AI?
        </h2>
        <p className="mt-4 text-lg text-primary-600 max-w-2xl mx-auto">
          Whether you're just starting or optimizing your strategy, Interview AI has every tool to boost your confidence and job-readiness.
        </p>
      </div>

      <div className=" p-6 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {leftItems.map((item, index) => (
              <Accordion key={index} title={item.title}>
                {item.content}
              </Accordion>
            ))}
          </div>
          <div className="space-y-6">
            {rightItems.map((item, index) => (
              <Accordion key={index} title={item.title}>
                {item.content}
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
