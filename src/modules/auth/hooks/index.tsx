// hooks/auth/useAuth.ts
import { useState } from "react";
import { supabase } from "../../../lib/supabaseClient";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useAppState } from "../../../store";

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
  const [_, dispatch] = useAppState();
  const naviagate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  async function fetchUserProfile() {
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();
    if (userError || !user) throw new Error("No user");

    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    if (error) throw error;
    return data;
  }

  function userProfile(enabled = true) {
    return useQuery({
      queryKey: ["userProfile"],
      queryFn: fetchUserProfile,
      enabled,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 10, // 10 minutes
    });
  }

  async function logoutUser() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Supabase logout error:", error.message);
        throw error;
      }

      dispatch({ type: "LOGOUT", payload: {} });
    } catch (error) {}
  }

  async function login({ email, password, role }: LoginPayload) {
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
  }

  async function signup({
    email,
    password,
    role,
    firstName,
    lastName,
  }: SignupPayload) {
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
    naviagate("/dashboard/jobs");

    setLoading(false);
    return { data, error: null };
  }


  async function getCurrentUser() {
    const { data } = await supabase.auth.getUser();
    return data.user;
  }

  return {
    fetchUserProfile,
    userProfile,
    logoutUser,
    login,
    signup,
    getCurrentUser,
    loading,
    error,
  };
}
