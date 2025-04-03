export const setLocalStorage = (name: string, value: any) => {
  if (typeof value !== "string") {
    value = JSON.stringify(value);
  }
  localStorage.setItem(name, value);
};

export const getLocalStorage = (name: string) => {
  const value = localStorage.getItem(name);
  return value;
};

// export const removeLocalStorage = (name: string) => {
//   localStorage.removeItem(name);
// };
// export const clearLocalStorage = () => {
//   localStorage.clear();
// };
