import s from "./Description.module.css";
import { GiCoffeeBeans } from "react-icons/gi";

const Description = () => {
  return (
    <div>
      <h1 className={s.title}>
        Sip Happens Café <GiCoffeeBeans />
      </h1>
      <p className={s.text}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Description;
