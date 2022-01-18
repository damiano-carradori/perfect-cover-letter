interface SkillsType {
  praised: string;
  expert: string[];
  advanced: string[];
  proficient: string[];
  soft: string[];
}

interface CoverLetterTemplateType {
  company: string;
  role: string;
  skills: SkillsType;
  phoneNumber?: string;
  email?: string;
}

interface IntroductionTemplateType {
  company: string;
  role: string;
}

interface ContactsTemplateType {
  email?: string;
  phoneNumber?: string;
}

const introductionTemplate = ({
  company,
  role,
}: IntroductionTemplateType): string => {
  return `I am writing to express my interest in the **${
    role.trim() || "_Super Company Manager_"
  }** role at **${
    company.trim() || "_Beautiful Company_"
  }**. After reviewing your job description, it's clear that you're looking for a candidate that is extremely familiar with the responsibilities associated with the role, and can perform them confidently. Given these requirements, I think that I have the necessary skills to successfully do the job adeptly and in line with your expectations.`;
};

const contactsTemplate = ({
  email,
  phoneNumber,
}: ContactsTemplateType): string => {
  const strings = [
    "After reviewing my resume, I hope you will agree that I am the type of competent and competitive candidate you are looking for. I look forward to discussing how my specific skills and abilities will benefit your organization.",
  ];

  if (phoneNumber || email) {
    strings.push("Please contact me");

    if (phoneNumber) {
      strings.push(`at **${phoneNumber}**`);
      if (email) {
        strings.push("or");
      }
    }
    if (email) {
      strings.push(`via email at **${email}**`);
    }

    strings.push("to arrange a convenient meeting time.");
  }

  return strings.join(" ");
};

const skillsTemplate = ({ skills }: { skills: SkillsType }): string => {
  const joinSkills = (skills: string[], placeholder: string) => {
    if (skills.length === 0) {
      return `_${placeholder}_`;
    }

    if (skills.length === 1) {
      return skills[0];
    }

    const last = skills.slice(-1);

    return skills.slice(0, -1).join("**, **") + "** and **" + last;
  };

  return [
    `I am a fast learner professional who has been consistently praised as **${
      skills.praised.trim() || "_proactive_"
    }** by my co-workers and management. Over the course of my career, I've developed a skill set directly relevant to the position you are hiring for:
- Expert in **${joinSkills(skills.expert, "Inflating Baloons")}**;
- Advanced knowledge of **${joinSkills(skills.advanced, "Chasing chickens")}**;
- Proficient in **${joinSkills(
      skills.proficient,
      "Creating Minecraft circuits"
    )}**.`,
    `Overall, I have consistently demonstrated **${joinSkills(
      skills.soft,
      "barbecues"
    )}** skills, and you can find more detailed information in the attached resume.`,
  ].join("\n\n");
};

export const createCoverLetter = ({
  company,
  role,
  skills,
  email,
  phoneNumber,
}: CoverLetterTemplateType) => {
  const fragments = {
    HEADER: "Dear Hiring Manager,",
    INTRODUCTION: introductionTemplate({ company, role }),
    SKILLS: skillsTemplate({ skills }),
    CONTACTS: contactsTemplate({ email, phoneNumber }),
    GREETINGS:
      "Thank you for your consideration, and I look forward to hearing from you soon.",
  };

  return [
    fragments.HEADER,
    fragments.INTRODUCTION,
    fragments.SKILLS,
    fragments.CONTACTS,
    fragments.GREETINGS,
  ]
    .filter(Boolean)
    .join("\n\n");
};
