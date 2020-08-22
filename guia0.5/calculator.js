function add(number1, number2) {
  return number1 + number2;
}

function substract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  if (number2 === 0) {
    return undefined;
  }
  return number1 / number2;
}

function calculator(operation, number1, number2) {
	let result = 0;
	console.log(operation);
  switch (operation) {
    case "add":
      result = add(number1, number2);
      break;

    case "substract":
      result = substract(number1, number2);
      break;

    case "multiply":
      result = multiply(number1, number2);
      break;

    case "divide":
      result = divide(number1, number2);
			break;
	}
	return result;
}
