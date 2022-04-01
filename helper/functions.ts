export const shortenTitle = (title: string): string => {
  const splitedTitle = title.split(' ');
  if (splitedTitle[1] === '-') {
    const newTitle = `${splitedTitle[0]} ${splitedTitle[1]} ${splitedTitle[2]}...`;
    return newTitle;
  } else {
    const newTitle = `${splitedTitle[0]} ${splitedTitle[1]}...`;
    return newTitle;
  }
};
