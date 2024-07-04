export const fetchData = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 7000);
  });
};
