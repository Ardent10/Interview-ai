import React from "react";

const LoginVisual: React.FC = () => {
  return (
    <div className="relative bg-primary text-white px-6 py-12 md:py-16 flex flex-col justify-center overflow-hidden min-h-[80vh]">
      <div className="max-w-4xl mx-auto text-center space-y-6 z-10 relative">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
          Powering Careers with Confidence
        </h2>
        <p className="text-base md:text-xl font-medium max-w-2xl mx-auto">
          The trusted platform for intelligent interview preparation and
          personalized feedback.
        </p>

        <img
          src="/assets/login/interview.png"
          alt="Interview illustration"
          className="mx-auto w-40 md:w-80 drop-shadow-xl mt-6 md:mt-10"
        />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <img
              src="/assets/hero/fast.png"
              className="h-10 w-10"
              alt="Fast Icon"
            />
            <div>
              <h4 className="font-semibold text-lg">Intelligent Preparation</h4>
              <p className="text-sm">
                Practice interviews tailored to your resume and target jobs.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <img
              src="/assets/hero/secure.png"
              className="h-10 w-10"
              alt="Secure Icon"
            />
            <div>
              <h4 className="font-semibold text-lg">Actionable Feedback</h4>
              <p className="text-sm">
                Detailed analysis to improve performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginVisual;
