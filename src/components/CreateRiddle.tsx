import { useContext } from "react";
import { cnr } from "../context/AddedRiddles.context";

export default function CreateRiddle() {
  const { riddlesList, setRiddles } = useContext(cnr);
  console.log(riddlesList);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const newRiddle = {
            question: formData.get("question") as string,
            correctAnswer: formData.get("correctAnswer") as string,
            difficulty: formData.get("difficulty") as string,
            options: formData.getAll("options") as string[],
          };
          setRiddles([...riddlesList, newRiddle]);
          e.currentTarget.reset();
        }}
      >
        {" "}
        <input name="question" placeholder="question" />
        <input name="options" placeholder="אפשרות 1" />
        <input name="options" placeholder="אפשרות 2" />
        <input name="options" placeholder="אפשרות 3" />
        <input name="options" placeholder="אפשרות 4" />
        <input name="correctAnswer" placeholder="correctAnswer" />
        <input name="difficulty" placeholder="difficulty" />
        <button type="submit">Send</button>
      </form>
    </>
  );
}
