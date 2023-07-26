export const userCookieValue = (name) => {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(name))
    ?.split("=")[1];
};
export const pillStyle =
  "w-24 hover:bg-pink-light hover:text-white bg-white text-gray-dark appearance-none rounded p-2 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] outline-none text-xs tracking-wide font-bold cursor-pointer"
