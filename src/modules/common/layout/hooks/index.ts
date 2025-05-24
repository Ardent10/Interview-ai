import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../../../lib/supabaseClient";

export const fetchUserProfile = async () => {
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
};

export function useUserProfile(enabled = true) {
  return useQuery({
    queryKey: ["userProfile"],
    queryFn: fetchUserProfile,
    enabled,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
}
