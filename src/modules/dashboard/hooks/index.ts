// src/modules/jobs/hooks/useJobs.ts
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../../../lib/supabaseClient";
import toast from "react-hot-toast";
import { useAppState } from "../../../store";
import { JobFormValues } from "../../../utils/validations";

export interface Job {
  id: string;
  title: string;
  type: string;
  skills: string[];
  experience: string;
  description: string;
  created_at: string;
  user_id: string;
}

const JOBS_QUERY_KEY = ["jobs"];

export function useJobs() {
  const queryClient = useQueryClient();

  // ✅ Fetch jobs once and cache
  const {
    data: jobs = [],
    isLoading: loading,
    isError,
    error,
  } = useQuery<Job[]>({
    queryKey: JOBS_QUERY_KEY,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("jobs")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw new Error(error.message);
      return data as Job[];
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  // ✅ Post job and invalidate cache
  const [state] = useAppState();
  const { mutateAsync: postJob, isPending: posting } = useMutation({
    mutationFn: async (job: JobFormValues) => {
      const userId = state?.userProfile?.id;
      if (!userId) throw new Error("You must be logged in to post a job.");

      const { data, error } = await supabase
        .from("jobs")
        .insert([{ ...job, user_id: userId }])
        .select()
        .single();

      if (error) throw new Error(error.message);
      return data;
    },
    onSuccess: () => {
      toast.success("Job posted successfully!");
      queryClient.invalidateQueries({ queryKey: JOBS_QUERY_KEY });
    },
    onError: (err: Error) => {
      toast.error(`Failed to post job: ${err.message}`);
    },
  });

  return {
    jobs,
    loading,
    postJob,
    posting,
    error: isError ? error : null,
  };
}
