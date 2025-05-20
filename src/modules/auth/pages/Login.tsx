import LoginForm from "../components/LoginForm";
import LoginVisual from "../components/RightSection";

export default function LoginPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <LoginForm />
      <LoginVisual />
    </div>
  );
}
