export const getFullYear = (date: Date) => {
  const pureDate = new Date(date);
  return pureDate.getFullYear();
}