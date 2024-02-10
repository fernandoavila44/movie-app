import { TCastCrew } from "../types/creditsCasts";

export const getMainCast = (cast: TCastCrew[], quantity: number) => {
  const mainCast = cast.map((cast) => cast.name).slice(0, quantity)
  return mainCast.toString()
}