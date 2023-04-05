import {
  prefixes,
  suffixes,
  classes,
  titles,
  preferences,
  races,
} from "../constants";

const useCharacter = () => {
  const chooseRandom = (content) =>
    content[Math.floor(Math.random() * content.length)];

  const generateName = () => {
    const prefix = chooseRandom(prefixes);
    const suffix = chooseRandom(suffixes);
    const title = chooseRandom(titles);
    return `${prefix}${suffix}, ${title}`;
  };

  const generateClass = () => chooseRandom(classes);
  const generatePreference = () => chooseRandom(preferences);
  const generateRace = () => chooseRandom(races);

  const generateCharacter = () => {
    const name = generateName();
    const classChar = generateClass();
    const preference = generatePreference();
    const race = generateRace();

    return { name, classChar, preference, race };
  };

  return { generateCharacter };
};

export default useCharacter;
