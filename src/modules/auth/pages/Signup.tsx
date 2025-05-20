import LoginVisual from "../components/RightSection";
import SignupForm from "../components/SignupForm";

const SignupPage = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <SignupForm />
      <LoginVisual />
    </div>
  );
};

export default SignupPage;
