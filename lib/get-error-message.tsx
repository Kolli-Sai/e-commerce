export const getErrorMessage = (error: any) => {
  let message;

  if (typeof error === "string") {
    message = error;
  } else if (error instanceof Error) {
    message = error.message;
  } else if (error instanceof Object) {
    message = error.message;
  } else if (error instanceof Array) {
    message = error[0].message;
  } else {
    message = "Something went wrong";
  }

  return message;
};
