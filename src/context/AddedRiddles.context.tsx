import { createContext, useState, type PropsWithChildren } from "react";
import type IRiddleContext from "../interfacas/IRiddleContext";
import type IRiddle from "../interfacas/IRiddle";

export const cnr = createContext<IRiddleContext>({
  riddlesList: [],
  setRiddles: (obj: IRiddle[]) => {
    obj;
  },
});

export default function CreateNewRiddle({ children }: PropsWithChildren) {
  let mathRiddles = [
    {
      question: "כמה זה 1 + 2?",
      options: ["2", "3", "4", "5"],
      correctAnswer: "3",
      difficulty: "easy",
    },
    {
      question: "כמה זה 5 - 3?",
      options: ["1", "2", "3", "4"],
      correctAnswer: "2",
      difficulty: "easy",
    },
    {
      question: "כמה זה 4 * 2?",
      options: ["6", "8", "10", "12"],
      correctAnswer: "8",
      difficulty: "easy",
    },
    {
      question: "כמה זה 9 / 3?",
      options: ["2", "3", "4", "5"],
      correctAnswer: "3",
      difficulty: "easy",
    },
    {
      question: "כמה זה 7 + 6?",
      options: ["11", "12", "13", "14"],
      correctAnswer: "13",
      difficulty: "medium",
    },
    {
      question: "כמה זה 15 - 8?",
      options: ["5", "6", "7", "8"],
      correctAnswer: "7",
      difficulty: "medium",
    },
    {
      question: "כמה זה 6 * 3?",
      options: ["15", "16", "17", "18"],
      correctAnswer: "18",
      difficulty: "medium",
    },
    {
      question: "כמה זה 20 / 4?",
      options: ["4", "5", "6", "7"],
      correctAnswer: "5",
      difficulty: "medium",
    },
    {
      question: "כמה זה (3 + 5) * 2?",
      options: ["14", "15", "16", "18"],
      correctAnswer: "16",
      difficulty: "medium",
    },
    {
      question: "כמה זה 12 ÷ (2 + 2)?",
      options: ["2", "3", "4", "5"],
      correctAnswer: "3",
      difficulty: "medium",
    },
    {
      question: "כמה זה 9 * 9?",
      options: ["72", "81", "90", "99"],
      correctAnswer: "81",
      difficulty: "hard",
    },
    {
      question: "כמה זה 100 / 25?",
      options: ["2", "3", "4", "5"],
      correctAnswer: "4",
      difficulty: "hard",
    },
    {
      question: "כמה זה (10 + 5) * 2?",
      options: ["25", "30", "35", "40"],
      correctAnswer: "30",
      difficulty: "hard",
    },
    {
      question: "כמה זה 50 - (6 * 7)?",
      options: ["6", "8", "10", "12"],
      correctAnswer: "8",
      difficulty: "hard",
    },
    {
      question: "כמה זה (12 ÷ 3) + (8 * 2)?",
      options: ["18", "19", "20", "22"],
      correctAnswer: "22",
      difficulty: "hard",
    },
  ];

  const [riddlesList, setRiddles] = useState<IRiddle[]>(mathRiddles);
  return (
    <cnr.Provider value={{ riddlesList, setRiddles }}>{children}</cnr.Provider>
  );
}
