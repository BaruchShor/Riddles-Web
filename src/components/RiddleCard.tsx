import type IRiddle from "../interfacas/IRiddle.tsx";

type RiddleCardProps = IRiddle & {
  next: () => void;
};

export default function RiddleCard({
  question,
  options,
  correctAnswer,
  difficulty,
  next,
}: RiddleCardProps) {
  return (
    <>
      <article>
        <h3>{`difficulty ${difficulty}`}</h3>
        <p>{question}</p>
        <form action="">
          {options.map((o) => {
            console.log(o);
            return (
              <label>
                {o}
                <input type="radio" name={correctAnswer} />
              </label>
            );
          })}
          <button type="button" onClick={next}>
            Send
          </button>
        </form>
      </article>
    </>
  );
}
