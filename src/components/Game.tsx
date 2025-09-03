import { useContext } from "react";
import { cnr } from "../context/AddedRiddles.context";
import RiddleCard from "./RiddleCard";
import type IRiddle from "../interfacas/IRiddle";

export default function Game() {
  const { riddlesList } = useContext(cnr);
  console.log(riddlesList);
  return (
    <>
      <section>
        {riddlesList.map((riddleObj: IRiddle, index: number) => {
          return <RiddleCard key={index} {...riddleObj} />;
        })}
      </section>
    </>
  );
}
