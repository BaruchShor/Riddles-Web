import type IRiddle from "../interfacas/IRiddle.tsx";

export default function RiddleCard({
  question,
  options,
  correctAnswer,
  difficulty,
}: IRiddle) {
  return (
    <>
      <article>
        <h3>{`difficulty ${difficulty}`}</h3>
        <p>{question}</p>
        <form action="">
          {options.map((o, index) => {
            console.log(o);
            return (
              <label>
                {o}
                <input type="radio" name={correctAnswer} />
              </label>
            );
          })}
          <button type="submit">Send</button>
        </form>
      </article>
    </>
  );
}
