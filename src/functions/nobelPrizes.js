import axios from "axios";

export const getAllNobelPrizes = async () => {
  let yearNow = (new Date()).getFullYear();
  let limit = (yearNow - 1901) * 6;
  let url = "https://api.nobelprize.org/2.1/nobelPrizes?sort=desc&limit=" + limit;
  return await axios.get(url);
}