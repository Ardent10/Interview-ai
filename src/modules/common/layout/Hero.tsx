import SectionWrapper from "./SectionWrapper";
import { BotMessageSquare, FileCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <SectionWrapper className="bg-primary p-0 bg-[length:100%] bg-center min-h-screen bg-no-repeat bg-[url(assets/hero/hero-bg.jpg)]">
      <div className="flex flex-col justify-end items-center text-center px-4  h-full">
        <div className="flex flex-col items-center">
          <h1 className="text-[5rem] md:text-[8rem] lg:text-[10rem] leading-none font-bold text-white tracking-tight">
            Interview AI
          </h1>
          <p className="max-w-4xl text-base md:text-xl font-medium text-white">
            From practice to performance, Interview AI makes interview
            preparation personalized and insightful, so your career advancement
            starts with readiness, not regret.
          </p>

          <div className="flex flex-col md:flex-row gap-6 text-md text-white font-medium justify-center items-center">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-full">
                <BotMessageSquare className="text-primary" />
              </div>
              <span>AI Interviews</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-full">
                <FileCheck className="text-primary" />
              </div>
              <span>Instant Feedback</span>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
