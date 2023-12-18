const MAX_LENGTH = 50;

function calcSum(_, val = "") {
  const listOfNumbers = prompt(
    "Введи список чисел через кому. Якщо число дробове, то дробову частину відокремлюй крапкою",
    val
  );

  if (listOfNumbers === null) {
    alert("Ok! Good bye");
    return;
  } else if (!listOfNumbers) {
    alert("Nothing entered");
    return calcSum();
  }

  const arrayOfNumers = listOfNumbers.split(",");

  if (arrayOfNumers.length >= MAX_LENGTH) {
    alert(`Забагато чисел. Ліміт - ${MAX_LENGTH}`);
    return calcSum(_, listOfNumbers);
  }

  /*if (arrayOfNumers[arrayOfNumers.length - 1].trim() === "") {
    //Обрізаємо останній елемент, якщо він пустий (приклад 2,3,43, === 2,3,43)
    arrayOfNumers.pop();
  }*/

  for (const num of arrayOfNumers) {
    if (num.trim() === "") {
      alert("Одне з чисел пропущене");
      return calcSum(_, listOfNumbers);
    } else if (
      isNaN(num) ||
      num.trim()[0] === "." ||
      num.trim()[num.length - 1] === "."
    ) {
      alert("Введить коректні числа");
      return calcSum(_, listOfNumbers);
    } else if (!isFinite(num)) {
      alert("Число має бути кінцевим");
      return calcSum(_, listOfNumbers);
    }
  }

  const result = arrayOfNumers.reduce((prev, cur) => +prev + +cur, 0); //Якщо без 0 тут написати, то при введені тільки +0 покаже результат +0
  alert("Cума введених числе дорівнює " + result);
}

const btn = document.getElementById("btn");
btn.addEventListener("click", calcSum);
