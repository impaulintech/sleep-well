import React, { createContext, useState } from "react";

interface IGlobalContextProvider {
  children: React.ReactNode;
}

export const GlobalContext = createContext<any>({});

export const GlobalContextProvider = ({ children }: IGlobalContextProvider) => {
  const [count, setCount] = useState(0);
  const [main_questions, set_main_questions] = useState<any>([
    {
      main_question: "Loading...",
      main_choices: [
        {
          id: 1,
          main_choice: "...",
        },
      ],
    },
  ]);
  const [givenRecommendations, setGivenRecommendations] = useState<any>();

  return (
    <GlobalContext.Provider
      value={{
        main: [main_questions, set_main_questions],
        recommendation: [givenRecommendations, setGivenRecommendations],
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
