import { toast } from "react-toastify";

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

// For toast notifications
export const notify = (msg: string, type?: string | null | undefined) => {
  if (type === "success") {
    toast.success(msg);
  } else if (type === "error") {
    toast.error(msg);
  } else if (type === "info") {
    toast.info(msg);
  } else if (type === "warning") {
    toast.warning(msg);
  } else {
    toast(msg);
  }
};
