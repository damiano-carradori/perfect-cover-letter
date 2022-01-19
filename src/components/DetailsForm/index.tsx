import { FunctionComponent } from "react";
import { Control, useController, UseFormRegister } from "react-hook-form";
import { FormValues } from "../../App";
import Chip from "../Chip";

type DetailsFormProps = {
  control: Control<FormValues>;
  register: UseFormRegister<FormValues>;
};

const DetailsForm: FunctionComponent<DetailsFormProps> = ({
  control,
  register,
}) => {
  const skillsExpert = useController({
    name: "skills.expert",
    control,
  });

  const skillsAdvanced = useController({
    name: "skills.advanced",
    control,
  });

  const skillsProficient = useController({
    name: "skills.proficient",
    control,
  });
  const skillsSoft = useController({
    name: "skills.soft",
    control,
  });

  return (
    <div className="py-8 lg:basis-1/3 shrink-0">
      <h2 className="text-2xl text-zinc-600 font-bold xl:text-4xl">
        Fill in the details
      </h2>
      <fieldset className="rounded-md px-4 py-6 mt-6 bg-slate-100">
        <legend className="font-bold rounded-md bg-white px-3 py-1">
          Position details:
        </legend>

        <label>
          Role:
          <input
            className="block w-full mt-2 px-5 py-3 rounded-md border-2 border-solid border-slate-200 outline-green-400 caret-green-500"
            type="text"
            placeholder="Super Company Manager"
            {...register("role", { value: "" })}
          />
        </label>

        <br />

        <label>
          Company:
          <input
            className="block w-full mt-2 px-5 py-3 rounded-md border-2 border-solid border-slate-200 outline-green-400 caret-green-500"
            type="text"
            placeholder="Beautiful Company"
            {...register("company")}
          />
        </label>
      </fieldset>

      <fieldset className="rounded-md px-4 py-6 mt-6 bg-slate-100">
        <legend className="font-bold rounded-md bg-white px-3 py-1">
          Skills :
        </legend>

        <label>
          Praised as:
          <input
            className="block w-full mt-2 px-5 py-3 rounded-md border-2 border-solid border-slate-200 outline-green-400 caret-green-500"
            type="text"
            placeholder="proactive"
            {...register("skills.praised")}
          />
        </label>

        <br />

        <label>
          Expert in:
          <input
            className="block w-full mt-2 px-5 py-3 rounded-md border-2 border-solid border-slate-200 outline-green-400 caret-green-500"
            type="text"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === "Tab") {
                if (e.key === "Enter") {
                  e.preventDefault();
                }

                const target = e.target as HTMLInputElement;
                const newSkill = target.value.trim();

                if (newSkill) {
                  skillsExpert.field.onChange([
                    ...skillsExpert.field.value,
                    newSkill,
                  ]);

                  target.value = "";
                }
              }
            }}
          />
          <div className="flex flex-wrap my-3 space-x-4">
            {skillsExpert.field.value.map((skill: string) => (
              <Chip
                key={skill}
                value={skill}
                onDelete={() => {
                  skillsExpert.field.onChange(
                    skillsExpert.field.value.filter((s: string) => s !== skill)
                  );
                }}
              />
            ))}
          </div>
        </label>

        <label>
          Advanced knowledge of:
          <input
            className="block w-full mt-2 px-5 py-3 rounded-md border-2 border-solid border-slate-200 outline-green-400 caret-green-500"
            type="text"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === "Tab") {
                if (e.key === "Enter") {
                  e.preventDefault();
                }

                const target = e.target as HTMLInputElement;
                const newSkill = target.value.trim();

                if (newSkill) {
                  skillsAdvanced.field.onChange([
                    ...skillsAdvanced.field.value,
                    newSkill,
                  ]);

                  target.value = "";
                }
              }
            }}
          />
          <div className="flex flex-wrap my-3 space-x-4">
            {skillsAdvanced.field.value.map((skill: string, pos: number) => (
              <Chip
                key={`${pos}_${skill}`}
                value={skill}
                onDelete={() => {
                  skillsAdvanced.field.onChange(
                    skillsAdvanced.field.value.filter(
                      (s: string) => s !== skill
                    )
                  );
                }}
              />
            ))}
          </div>
        </label>

        <label>
          Proficient in:
          <input
            className="block w-full mt-2 px-5 py-3 rounded-md border-2 border-solid border-slate-200 outline-green-400 caret-green-500"
            type="text"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === "Tab") {
                if (e.key === "Enter") {
                  e.preventDefault();
                }

                const target = e.target as HTMLInputElement;
                const newSkill = target.value.trim();

                if (newSkill) {
                  skillsProficient.field.onChange([
                    ...skillsProficient.field.value,
                    newSkill,
                  ]);

                  target.value = "";
                }
              }
            }}
          />
          <div className="flex flex-wrap my-3 space-x-4">
            {skillsProficient.field.value.map((skill: string) => (
              <Chip
                key={skill}
                value={skill}
                onDelete={() => {
                  skillsProficient.field.onChange(
                    skillsProficient.field.value.filter(
                      (s: string) => s !== skill
                    )
                  );
                }}
              />
            ))}
          </div>
        </label>

        <label>
          Soft skills:
          <input
            className="block w-full mt-2 px-5 py-3 rounded-md border-2 border-solid border-slate-200 outline-green-400 caret-green-500"
            type="text"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === "Tab") {
                if (e.key === "Enter") {
                  e.preventDefault();
                }

                const target = e.target as HTMLInputElement;
                const newSkill = target.value.trim();

                if (newSkill) {
                  skillsSoft.field.onChange([
                    ...skillsSoft.field.value,
                    newSkill,
                  ]);

                  target.value = "";
                }
              }
            }}
          />
          <div className="flex flex-wrap my-3 space-x-4">
            {skillsSoft.field.value.map((skill: string) => (
              <Chip
                key={skill}
                value={skill}
                onDelete={() => {
                  skillsSoft.field.onChange(
                    skillsSoft.field.value.filter((s: string) => s !== skill)
                  );
                }}
              />
            ))}
          </div>
        </label>
      </fieldset>

      <fieldset className="rounded-md px-4 py-6 mt-6 bg-slate-100">
        <legend className="font-bold rounded-md bg-white px-3 py-1">
          Contact details:
        </legend>
        <label>
          Phone Number:
          <input
            className="block w-full mt-2 px-5 py-3 rounded-md border-2 border-solid border-slate-200 outline-green-400 caret-green-500"
            type="tel"
            {...register("phoneNumber")}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            className="block w-full mt-2 px-5 py-3 rounded-md border-2 border-solid border-slate-200 outline-green-400 caret-green-500"
            type="email"
            {...register("email")}
          />
        </label>
      </fieldset>
    </div>
  );
};

export default DetailsForm;
