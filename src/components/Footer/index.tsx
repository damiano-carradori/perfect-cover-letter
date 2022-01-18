import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <div>
      <p>Build with ❤️ by Damiano Carradori</p>
      <p>If you like the project, please consider to give a small support:</p>
      <a
        href="https://www.buymeacoffee.com/dami.carradori"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me A Coffee"
          height={48}
        />
      </a>
    </div>
  );
};

export default Footer;
