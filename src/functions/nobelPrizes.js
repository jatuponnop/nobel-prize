import axios from "axios";

export const getNobelPrizes = async (year) => {

  let url = "https://api.nobelprize.org/2.1/nobelPrizes?sort=desc";
  let addYear = "";
  let yearNow = (new Date()).getFullYear();
  if (year == "none" || year == undefined) {
    addYear = "&yearTo=" + yearNow;
  } else {
    addYear = "&nobelPrizeYear=" + year + "&yearTo=" + year;
  }
  url = url + addYear;
  return await axios.get(url);
}