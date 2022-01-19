import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <div>
      <p className="my-3 text-sm md:text-base text-slate-500">
        If you like the project, please consider to give a small support:
      </p>
      <a
        href="https://www.buymeacoffee.com/dami.carradori"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="h-12 my-3"
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me A Coffee"
        />
      </a>
      <p className="my-3 text-slate-500">Build with ❤️ by Damiano Carradori</p>
    </div>
  );
};

export default Footer;
