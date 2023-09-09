export const configs = () => {};

type myENV = {
  BASE_API?: string;
};

const env: myENV = {
  BASE_API: import.meta.env.VITE_BASE_API,
};

export {
  env
}
