export const capatilizeFirstWord = (word: string) => {
  // Grabbing first letter with charAt and making it uppercase, then concatenating the rest of the string using .slice to grab all the letters starting at the index of 1
  return word.charAt(0).toUpperCase() + word.slice(1);
}