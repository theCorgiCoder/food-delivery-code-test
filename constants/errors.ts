export const NotFoundError = (message: string) => {
  const error = new Error(message);
  error.name = "NotFoundError";
  return error;
};
