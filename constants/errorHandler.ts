// errorHandler.ts
import { Dispatch } from "redux";
import { NotFoundError } from "./errors";
import { setError } from "@/redux/slices/errorSlice";

export const handleError = (dispatch: Dispatch, error: Error) => {
  let errorMessage: string;

  if (error instanceof NotFoundError) {
    errorMessage = error.message;
  } else {
    errorMessage = "An unexpected error occurred.";
  }

  dispatch(setError(errorMessage));

  console.error("Error logged:", error);
};
