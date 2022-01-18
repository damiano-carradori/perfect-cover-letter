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
    <div className="grid-cell">
      <h2>Your cover letter</h2>
      <div className="cover-letter">
        <ReactMarkdown>{coverLetter}</ReactMarkdown>
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default CoverLetter;
