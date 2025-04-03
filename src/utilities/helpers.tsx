export const setLocalStorage = (name: string, value: string) => {
  if (typeof value === "string") {
    value = JSON.stringify(value);
  }
  localStorage.setItem(name, value);
};

export const getLocalStorage = (name: string) => {
  localStorage.getItem(name);
};

// export const removeLocalStorage = (name: string) => {
//   localStorage.removeItem(name);
// };
// export const clearLocalStorage = () => {
//   localStorage.clear();
// };
