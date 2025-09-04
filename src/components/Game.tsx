import { useContext, useState } from "react";
import { cnr } from "../context/AddedRiddles.context";
import RiddleCard from "./RiddleCard";

export default function Game() {
  const { riddlesList } = useContext(cnr);
  console.log(riddlesList);
  const [index, setIndex] = useState(0);

  const Next = () => {
    if (index < riddlesList.length - 1) {
      setIndex(index + 1);
    } else {
      console.log("Finish");
    }
  };

  return (
    <>
      <section>
        <RiddleCard key={index} {...riddlesList[index]} next={Next} />
      </section>
    </>
  );
}
