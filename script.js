let money = +prompt('“Ваш месячный доход?”'),
    income = 20000,
    addExpenses = prompt('“Перечислите возможные расходы за рассчитываемый период через запятую”'),
    deposit = confirm('“Есть ли у вас депозит в банке?”'),
    mission = 100000,
    expenses1 = prompt('“Введите обязательную статью расходов?”'),
    amount1 = +prompt('“Во сколько это обойдется?”'),
    expenses2 = prompt('“Введите обязательную статью расходов?”'),
    amount2 = +prompt('“Во сколько это обойдется?”'),
    numbersArr,
    budgetDay,
    period = 8;

function getExpensesMonth() {
  let expensesAmount = amount1 + amount2;
  return expensesAmount;
}

console.log('Расходы :',  getExpensesMonth());

function getAccumulatedMonth() {
  let budgetMonth = money - getExpensesMonth();
  return budgetMonth;
}

console.log('Месячный бюджет :', getAccumulatedMonth());

let accumulatedMonth = getAccumulatedMonth();

function getTargetMonth() {
  let missionMonth = Math.ceil(mission / getAccumulatedMonth());
  return missionMonth;
}

console.log('Цель будет достигнута: ', getTargetMonth());

let ourMission = getTargetMonth();

budgetDay = Math.floor(accumulatedMonth / 30);

console.log('budgetDay ' + budgetDay);


let getStatusIncome = function() {
  if (budgetDay >= 1200) {
    console.log('“У вас высокий уровень дохода”');
  } else if (budgetDay >= 600) {
    console.log('“У вас средний уровень дохода”');
  } else if (budgetDay < 600) {
    console.log('“К сожалению у вас уровень дохода ниже среднего”');
  } else if (budgetDay < 0) {
    console.log('“Что то пошло не так”');
  }
}

getStatusIncome();


// console.log(typeof money, typeof income, typeof deposit);
// console.log('Длина строки - addExpenses: ' + addExpenses.length + ' символов');
console.log(`“Цель заработать 100000 рублей будет достигнута за ${ourMission} месяцев"`);

// let Expenses = addExpenses.toLowerCase();
// let ArrExpenses = Expenses.split(',');
// let Result = ArrExpenses.join()

// console.log(Result);

// let budgetDay = money / 30;

// console.log(`budgetDay: ${budgetDay}`);
