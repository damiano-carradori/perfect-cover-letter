import { NestedValue, useForm } from "react-hook-form";
import CoverLetter from "./components/CoverLetter";
import DetailsForm from "./components/DetailsForm";

type SkillsValues = {
  praised: string;
  expert: string[];
  advanced: string[];
  proficient: string[];
  soft: string[];
};

export type FormValues = {
  company: string;
  role: string;
  skills: NestedValue<SkillsValues>;
  email?: string;
  phoneNumber?: string;
};

function App() {
  const { control, register } = useForm<FormValues>({
    defaultValues: {
      company: "",
      role: "",
      skills: {
        praised: "",
        expert: [],
        advanced: [],
        proficient: [],
        soft: [],
      },
    },
  });

  return (
    <div>
      <h1 className="text-center font-bold py-6 text-2xl md:py-8 md:text-4xl xl:py-10 xl:text-5xl">
        Create the perfect cover letter
        <br />
        for your{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-red-300 to-yellow-200">
          dream's job
        </span>{" "}
        application
      </h1>
      <div className="container mx-auto px-6 lg:gap-16 lg:flex">
        <DetailsForm control={control} register={register} />
        <CoverLetter control={control} />
      </div>
    </div>
  );
}

export default App;
