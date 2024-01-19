// una funcion para calcular la cantidad de dias de diferencia entre dos fechas
function daysBetween(date1, date2) {
  // y como le paso los parametros? en que formato? como lo uso?
  // const date1 = new Date("2021-01-01");

  const oneDay = 1000 * 60 * 60 * 24;
  const date1Ms = date1.getTime();
  const date2Ms = date2.getTime();
  const differenceMs = date2Ms - date1Ms;
  return Math.round(differenceMs / oneDay);
}

function checkWord(newText, prohibitedWords) {
  let result = [false, "", ""];
  for (let word of prohibitedWords) {
    [newText.includes(word) && (result = [true, word, "alert"])];
  }

  if (result[0]) {
    newText = newText.replace(result[1], "");
  }

  return [...result, newText];
}

export { checkWord, daysBetween };
