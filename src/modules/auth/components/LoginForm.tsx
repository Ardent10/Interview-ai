import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormInputs } from "../../../utils/validations";
import { FormInput } from "../../common/form/Input";
import Logo from "../../common/layout/Logo";
import { LogIn } from "lucide-react";
import PrimaryButton from "../../common/Button";
import { Link } from "react-router-dom";
import RoleSelector from "./RoleSelector";

const LoginForm: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string>("job-seeker");

  const methods = useForm<LoginFormInputs & { role: string }>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      role: "job-seeker",
    },
  });

  const onSubmit = methods.handleSubmit((data) => {
    const submitData = {
      ...data,
      role: selectedRole,
    };
    console.log("Login data submitted:", submitData);
  });

  return (
    <div className="flex flex-col bg-white px-8 py-6 md:px-16 md:py-10 min-h-screen">
      <div className="mb-8">
        <div className="flex items-center space-x-2">
          <Logo height={50} width={50} />
          <h1 className="text-3xl font-bold text-primary">Interview AI</h1>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center flex-grow space-y-6">
        <h2 className="text-4xl font-semibold text-tertiary">Welcome Back</h2>

        <FormProvider {...methods}>
          <form onSubmit={onSubmit} className="space-y-4 w-full max-w-md">
            <RoleSelector
              selectedRole={selectedRole}
              setSelectedRole={setSelectedRole}
            />

            <FormInput
              name="email"
              label="Email"
              type="email"
              placeholder="Enter email"
              required
            />
            <FormInput
              name="password"
              label="Password"
              type="password"
              placeholder="Enter password"
              required
            />

            <PrimaryButton type="submit" icon={<LogIn />}>
              Login as{" "}
              {selectedRole === "job-seeker" ? "Job Seeker" : "Recruiter"}
            </PrimaryButton>
          </form>
        </FormProvider>

        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-primary font-medium hover:underline"
          >
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
