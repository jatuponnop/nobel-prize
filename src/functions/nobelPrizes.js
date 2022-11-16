import axios from "axios";

export const getNobelPrizes = async (year) => {

  let url = "https://api.nobelprize.org/2.1/nobelPrizes?sort=desc";
  let addYear = "";
  let yearNow = (new Date()).getFullYear();
  let limit = (yearNow - 1901) * 6;
  if (year == "none" || year == undefined) {
    addYear = "&yearTo=" + yearNow;
  } else {
    addYear = "&nobelPrizeYear=" + year + "&yearTo=" + year;
  }
  let addLimit = "&limit=" + limit;
  url = url + addYear;
  url = url + addLimit;
  return await axios.get(url);
}