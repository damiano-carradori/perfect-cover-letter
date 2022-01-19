import { FunctionComponent, useMemo } from "react";
import { Control, useWatch } from "react-hook-form";
import ReactMarkdown from "react-markdown";
import { FormValues } from "../../App";
import { createCoverLetter } from "../../utils";
import Footer from "../Footer";

type CoverLetterProps = {
  control: Control<FormValues>;
};

const CoverLetter: FunctionComponent<CoverLetterProps> = ({ control }) => {
  const company = useWatch({
    control,
    name: "company",
  });
  const role = useWatch({
    control,
    name: "role",
  });
  const skills = useWatch({
    control,
    name: "skills",
  });
  const email = useWatch({
    control,
    name: "email",
  });
  const phoneNumber = useWatch({
    control,
    name: "phoneNumber",
  });

  const coverLetter = useMemo(
    () =>
      createCoverLetter({
        company,
        role,
        skills,
        email,
        phoneNumber,
      }),
    [company, email, phoneNumber, role, skills]
  );

  return (
    <div className="py-8">
      <h2 className="text-2xl text-zinc-600 font-bold xl:text-4xl">
        Your cover letter
      </h2>
      <div className="divide-y-2 divide-solid">
        <div className="text-xl xl:text-2xl">
          <ReactMarkdown
            components={{
              p: ({ children }) => <p className="my-5">{children}</p>,
              ul: ({ children }) => (
                <ul className="list-disc list-inside my-5 ml-8">{children}</ul>
              ),
            }}
          >
            {coverLetter}
          </ReactMarkdown>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default CoverLetter;
