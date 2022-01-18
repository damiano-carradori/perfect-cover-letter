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
      <h1 style={{ textAlign: "center" }}>
        Create the perfect Cover Letter for your next job
      </h1>
      <div className="container">
        <DetailsForm control={control} register={register} />
        <CoverLetter control={control} />
      </div>
    </div>
  );
}

export default App;
