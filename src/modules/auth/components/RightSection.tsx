import React from "react";

const LoginVisual: React.FC = () => {
  return (
    <div className="relative bg-primary text-white px-8 py-12 md:py-20 flex flex-col justify-center overflow-hidden">
      <div className="max-w-xl mx-auto text-center space-y-6 z-10 relative">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
          Powering Careers with Confidence
        </h2>
        <p className="text-lg md:text-xl font-medium ">
          The trusted platform for intelligent interview preparation and
          personalized feedback.
        </p>

        <img
          src="/assets/login/interview.png"
          alt="Interview illustration"
          className="mx-auto w-40 md:w-96 drop-shadow-xl mt-8"
        />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          <div className="flex items-start gap-4">
            <img
              src="/assets/hero/fast.png"
              className="h-12 w-12"
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
              className="h-12 w-12"
              alt="Secure Icon"
            />
            <div>
              <h4 className="font-semibold text-lg">Actionable Feedback</h4>
              <p className="text-sm ">
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
