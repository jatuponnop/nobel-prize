export const genYearOptions = () => {
  let year = new Date();
  let obj = [];
  for (let i = year.getFullYear(); i >= 1901; i--) {
    obj.push(<option key={i} value={i}>ค.ศ. {i}</option>);
  }
  return obj;
}

const listPerPage = 6;

export const filterPrizes = (page, prizes) => {
  let list = [];
  let max = page * listPerPage;
  let min = max - listPerPage;
  if (max > prizes.length) {
    max = prizes.length;
  }
  list = prizes.slice(min, max);
  let newList = [];
  for (let i = min; i < max; i++) {
    let prize = prizes[i];
    let cleanPrize = filterPrize(prize);
    newList.push(cleanPrize);
    // prizeAmount
  }
  return newList;
}

export const filterPrize = (prize) => {
  let symbol;
  if (prize.category.en == "Physiology or Medicine") {
    symbol = "med";
  } else {
    symbol = prize.category.en.slice(0, 3).toLowerCase();
  }
  let laureate = {};
  if (prize.topMotivation == undefined) {
    if (prize.laureates[0].orgName == undefined) {
      laureate.knownName = prize.laureates[0].knownName.en;
      laureate.motivation = prize.laureates[0].motivation.en;
    } else {
      laureate.knownName = prize.laureates[0].orgName.en;
      laureate.motivation = prize.laureates[0].motivation.en;
    }
  } else {
    laureate.knownName = "Top Motivation";
    laureate.motivation = prize.topMotivation.en;
  }
  return { ...prize, symbol, laureate };
}

export const isInt = (value) => {
  try {
    return !isNaN(value) &&
      parseInt(Number(value)) == value &&
      !isNaN(parseInt(value, 10));
  } catch (err) {
    return false;
  }
}

export const formatNumber = (number) => {
  try {
    return formatInt(number);
  } catch (err) {
    return 0;
  }
}
export const formatInt = (number) => {
  try {
    return parseInt(number.toFixed()).toLocaleString("en");
  } catch (err) {
    return 0;
  }
}