export const numberize = (str = "") => {
  str = String(str);
  const regex = /[^-\d]/g;
  const numberString = str.replace(regex, "");
  return numberString ? parseInt(numberString, 10) : "";
};

// Generate a random UUID
function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// Alias the version of uuid4 to just uuid
export const uuid = uuidv4;
