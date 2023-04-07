import { useState, useContext, createContext } from "react";
import useCharacter from "../hooks/useCharacter";

const StateContext = createContext({});

export const StateProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [character, setCharacter] = useState(null);
  const [section, setSection] = useState("welcome");
  const { generateCharacter } = useCharacter();

  const generate = (name = "") => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
    const newChar = generateCharacter(name);
    setCharacter(newChar);
    setSection("character");
  };

  const value = { character, generate, loading, section, setSection };
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export const useAppState = () => useContext(StateContext);
