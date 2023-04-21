// import React, { createContext, useState } from "react";

import { createContext, useState } from "react";

// export const ExersicesContext = createContext(null);

// export default function ExercisesProvider({ children }) {
//   const [searchInputValue, setSearchInputValue] = useState("444");

//   return (
//     <ExersicesContext.Provider value={{searchInputValue, setSearchInputValue}}>
//       {children}
//     </ExersicesContext.Provider>
//   );
// }

export const ExercisesContext = createContext(null);

export default function ExerciseContextProvider({ childern }) {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [exercises, setExercises] = useState([]);

  return (
    <ExercisesContext.Provider
      value={{ searchInputValue, setSearchInputValue, exercises, setExercises }}
    >
      {childern}
    </ExercisesContext.Provider>
  );
}
