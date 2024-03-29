export const configs = () => {};

type myENV = {
  BASE_API?: string;
  NGROK_API?: string;
  SECRET_KEY?: string;
};

const env: myENV = {
  BASE_API: import.meta.env.VITE_BASE_API,
  NGROK_API: import.meta.env.VITE_NGROK_API,
  SECRET_KEY: import.meta.env.VITE_SECRET_KEY,
};

export { env };
