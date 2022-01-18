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
    <div className="grid-cell">
      <h2>Fill in the details</h2>
      <fieldset>
        <legend>Position details:</legend>

        <label>
          Role:
          <input
            type="text"
            placeholder="Super Company Manager"
            {...register("role", { value: "" })}
          />
        </label>

        <br />

        <label>
          Company:
          <input
            type="text"
            placeholder="Beautiful Company"
            {...register("company")}
          />
        </label>
      </fieldset>

      <br />

      <fieldset>
        <legend>Skills :</legend>

        <label>
          Praised as:
          <input
            type="text"
            placeholder="proactive"
            {...register("skills.praised")}
          />
        </label>

        <br />

        <label>
          Expert in:
          <input
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
          <div className="skills-container">
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
          <div className="skills-container">
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
          <div className="skills-container">
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
          <div className="skills-container">
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

      <br />

      <fieldset>
        <legend>Contact details:</legend>
        <label>
          Phone Number:
          <input type="tel" {...register("phoneNumber")} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" {...register("email")} />
        </label>
      </fieldset>
    </div>
  );
};

export default DetailsForm;
