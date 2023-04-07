import {
  prefixes,
  suffixes,
  classes,
  titles,
  preferences,
  races,
  definitions,
  levels,
} from "../constants";

const useCharacter = () => {
  const chooseRandom = (content) => {
    if (!content.length) return "";

    return content[Math.floor(Math.random() * content.length)];
  };

  const generateName = (defaultName) => {
    if (defaultName)
      return defaultName.charAt(0).toUpperCase() + defaultName.slice(1);

    const prefix = chooseRandom(prefixes);
    const suffix = chooseRandom(suffixes);
    return `${prefix}${suffix}`;
  };

  const generateClass = () => chooseRandom(classes);

  const generateLevel = () => chooseRandom(levels);

  const generateTitle = () => {
    const title = chooseRandom(titles);
    if (title.alone) return title.label;

    const definition = chooseRandom(definitions);
    return `${title.label} ${definition}`;
  };

  const generatePreference = () => chooseRandom(preferences);
  
  const generateRace = () => {
    const race = chooseRandom(races);
    const image = chooseRandom(race.images);
    return { race: race.label, image };
  };

  const generateCharacter = (defaultName = "") => {
    const name = generateName(defaultName.toLowerCase());
    const title = generateTitle();
    const classChar = generateClass();
    const preference = generatePreference();
    const level = generateLevel();
    const { race, image } = generateRace();

    return { name, title, classChar, preference, race, image, level };
  };

  return { generateCharacter };
};

export default useCharacter;
