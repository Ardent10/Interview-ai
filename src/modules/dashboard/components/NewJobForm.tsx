import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newJobSchema, JobFormValues } from "../../../utils/validations";
import { FormInput } from "../../common/form/Input";
import ChipMultiSelect from "../../common/form/ChipSelector";
import Textarea from "../../common/form/Textarea";
import { useNavigate } from "react-router-dom";
import { useJobs } from "../hooks";

const skillOptions = [
  "React",
  "TypeScript",
  "Node.js",
  "GraphQL",
  "REST",
  "Python",
  "Django",
  "AWS",
];

export default function NewJobForm() {
  const { postJob, loading } = useJobs();
  const navigate = useNavigate();
  const methods = useForm<JobFormValues>({
    resolver: zodResolver(newJobSchema),
    defaultValues: {
      title: "",
      type: "Full-time",
      skills: [],
      experience: "",
      description: "",
    },
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = async (data: JobFormValues) => {
    const result = await postJob(data);
    console.log("Result", result);
    if (result) {
      navigate("/dashboard/jobs");
      reset();
    }
  };

  return (
    <div className="p-8 w-full max-w-4xl">
      <h2 className="text-3xl font-bold text-primary mb-6">Post a New Job</h2>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <FormInput
            name="title"
            label="Job Title"
            placeholder="e.g. Frontend Developer"
            required
            inputClass="rounded-xl py-4 shadow-sm"
          />

          <Textarea
            name="description"
            label="Job Description"
            placeholder="Describe responsibilities, tools, qualifications, etc."
            required
            inputClass="rounded-xl py-4 shadow-sm"
            validation={{ required: "Job description is required" }}
          />

          <div>
            <label className="block font-medium text-tertiary mb-1">
              Job Type
            </label>
            <select
              {...methods.register("type")}
              className="w-full p-4  rounded-xl shadow-sm bg-white"
            >
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
              <option>Internship</option>
            </select>
          </div>

          <ChipMultiSelect
            name="skills"
            label="Required Skills"
            placeholder="Select required skills"
            options={skillOptions}
          />

          <FormInput
            name="experience"
            type="number"
            label="Experience"
            placeholder="e.g. 2-4 years"
            required
            inputClass="rounded-xl py-4 shadow-sm"
          />

          <button
            type="submit"
            className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-tertiary transition"
          >
            Create
          </button>
        </form>
      </FormProvider>
    </div>
  );
}
