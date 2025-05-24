// hooks/auth/useAuth.ts
import { useState } from "react";
import { supabase } from "../../../lib/supabaseClient";
import toast from "react-hot-toast";

interface SignupPayload {
  email: string;
  password: string;
  role: "job-seeker" | "recruiter";
  firstName: string;
  lastName: string;
}

interface LoginPayload {
  email: string;
  password: string;
  role?: string;
}

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async ({ email, password, role }: LoginPayload) => {
    setLoading(true);
    setError(null);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);
    if (error) {
      setError(error.message);
      toast.error(error.message);
      return { error };
    }

    toast.success("Login successful");

    if (role) {
      localStorage.setItem("user-role", role);
    }

    return { data, error: null };
  };

  const signup = async ({
    email,
    password,
    role,
    firstName,
    lastName,
  }: SignupPayload) => {
    setLoading(true);
    setError(null);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { role },
      },
    });

    if (error) {
      setLoading(false);
      setError(error.message);
      toast.error(error.message);
      return { error };
    }

    const userId = data?.user?.id;

    if (userId) {
      const { error: profileError } = await supabase.from("profiles").insert({
        id: userId,
        full_name: `${firstName} ${lastName}`,
        role,
      });

      if (profileError) {
        setError(profileError.message);
        toast.error(profileError.message);
        setLoading(false);
        return { error: profileError };
      }
    }

    toast.success("Signup successful, please check your email to confirm.");

    setLoading(false);
    return { data, error: null };
  };

  const logout = async () => {
    await supabase.auth.signOut();
    toast.success("Logged out");
    localStorage.removeItem("user-role");
  };

  const getCurrentUser = async () => {
    const { data } = await supabase.auth.getUser();
    return data.user;
  };

  return { login, signup, logout, getCurrentUser, loading, error };
}
