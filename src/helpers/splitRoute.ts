export const splitRoute = (query: string) => {
  return query
    .split("/")
    .filter((item) => item)
    .map((item) =>
      item
        .trim()
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, function (str) {
          return str.toUpperCase();
        })
        .split(" ")
        .filter((item) => item)
        .map((value, index) =>
          index === 0 ? value : value.toLocaleLowerCase()
        )
        .join(" ")
    )
    .join(" / ");
};
