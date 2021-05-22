function convertFahrToCelsius(tempInFahrenheit) {
  const argumentType = typeof tempInFahrenheit;
  const tempInCelsius = (tempInFahrenheit - 32) * (5 / 9);
  if (tempInCelsius.toFixed(4) !== "NaN") {
    return tempInCelsius.toFixed(4);
  } else if (argumentType === "object") {
    //check if it is array or object
    return `${JSON.stringify(
      tempInFahrenheit
    )} is not a valid number but a/an ${
      Array.isArray(tempInFahrenheit) ? "array" : "object"
    }.`;
  } else {
    return `${tempInFahrenheit} is not a valid number but a/an ${typeof tempInFahrenheit}.`;
  }
}

function checkYuGiOh(n) {
  if (!Number(n)) {
    return `invalid parameter: ${n}`;
  }
  const YU = "yu";
  const GI = "gi";
  const OH = "oh";
  const arrayOfNumbers = new Array(n);
  for (let i = 0; i < n; i++) {
    const currentNumber = i + 1;
    let replacementValue = "";
    if (currentNumber % 2 === 0) {
      replacementValue += YU;
    }
    if (currentNumber % 3 === 0) {
      replacementValue += `-${GI}`;
    }
    if (currentNumber % 5 === 0) {
      replacementValue += `-${OH}`;
    }
    replacementValue = replacementValue.replace(/^-/, "");
    if (
      currentNumber % 5 !== 0 &&
      currentNumber % 3 !== 0 &&
      currentNumber % 2 !== 0
    ) {
      arrayOfNumbers[i] = 1 + i;
    } else {
      arrayOfNumbers[i] = replacementValue;
    }
  }
  return JSON.stringify(arrayOfNumbers);
}
