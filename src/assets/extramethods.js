export const userCookieValue = (name) => {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(name))
    ?.split("=")[1];
};
export const pillStyle =
  "w-24 hover:bg-pink-light hover:text-white bg-white text-gray-dark appearance-none rounded p-2 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] outline-none text-xs tracking-wide font-bold cursor-pointer"

  export const toggleBtnStyle =
    "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-pink-dark dark:peer-focus:ring-pink-dark rounded-full peer dark:bg-gray-dark peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-pink-dark";
    export const DeleteAllCookies=()=> {
      const cookies = document.cookie.split(";");

      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
      }
    }