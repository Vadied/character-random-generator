import {
  prefixes,
  suffixes,
  classes,
  titles,
  preferences,
  races,
} from "../constants";

const useCharacter = () => {
  const chooseRandom = (content) => {
    if (!content.length) return "";

    return content[Math.floor(Math.random() * content.length)];
  };

  const generateName = () => {
    const prefix = chooseRandom(prefixes);
    const suffix = chooseRandom(suffixes);
    return `${prefix}${suffix}`;
  };

  const generateClass = () => chooseRandom(classes);
  const generateTitle = () => chooseRandom(titles);
  const generatePreference = () => chooseRandom(preferences);
  const generateRace = () => {
    const race = chooseRandom(races);
    const image = chooseRandom(race.images);
    return { race: race.label, image };
  };

  const generateCharacter = () => {
    const name = generateName();
    const title = generateTitle();
    const classChar = generateClass();
    const preference = generatePreference();
    const { race, image } = generateRace();

    return { name, title, classChar, preference, race, image };
  };

  return { generateCharacter };
};

export default useCharacter;
