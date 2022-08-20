export const numberize = (str = "") => {
  str = String(str);
  const regex = /[^-\d]/g;
  const numberString = str.replace(regex, "");
  return numberString ? parseInt(numberString, 10) : "";
};
