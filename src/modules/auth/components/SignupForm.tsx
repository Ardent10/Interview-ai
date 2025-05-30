import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, SignupFormInputs } from "../../../utils/validations";
import { FormInput } from "../../common/form/Input";
import Logo from "../../common/layout/Logo";
import { UserPlus } from "lucide-react";
import PrimaryButton from "../../common/Button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import RoleSelector from "./RoleSelector";
import { useAuth } from "../hooks";

export default function SignupForm() {
  const { signup, error, loading } = useAuth();
  const [selectedRole, setSelectedRole] = useState<"job-seeker" | "recruiter">(
    "job-seeker"
  );

  const methods = useForm<SignupFormInputs>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      role: "job-seeker",
    },
  });

  useEffect(() => {
    methods.setValue("role", selectedRole);
  }, [selectedRole, methods]);

  const onSubmit = methods.handleSubmit(async (data) => {
    const { email, password, firstName, lastName, role } = data;
    await signup({
      email,
      password,
      firstName,
      lastName,
      role: selectedRole,
    });
  });

  return (
    <div className="p-12 h-screen bg-white">
      <div className="flex items-center space-x-2">
        <Logo height={50} width={50} />
        <h1 className="text-3xl font-bold text-primary">Interview AI</h1>
      </div>

      <div className=" flex flex-col items-center justify-center px-4 py-8 ">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Create Your Account
          </h2>

          <FormProvider {...methods}>
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="flex justify-center">
                <RoleSelector
                  selectedRole={selectedRole}
                  setSelectedRole={setSelectedRole}
                />
              </div>

              <section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormInput
                    name="firstName"
                    label="First Name"
                    placeholder="Enter first name"
                    required
                  />
                  <FormInput
                    name="lastName"
                    label="Last Name"
                    placeholder="Enter last name"
                    required
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
                    placeholder="Create a password"
                    required
                  />
                </div>
              </section>

              <PrimaryButton type="submit" icon={<UserPlus />}>
                Create{" "}
                {selectedRole === "job-seeker" ? "Job Seeker" : "Recruiter"}{" "}
                Account
              </PrimaryButton>
            </form>
          </FormProvider>

          <p className="flex justify-center mt-4 text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="ml-1 text-primary font-medium hover:underline"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
