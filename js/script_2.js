'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-07-26T17:01:17.194Z',
    '2020-07-28T23:36:17.929Z',
    '2020-08-01T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Masud Rana',
  movements: [500, 3800, -1150, -1790, -32110, -1500, 500, -30],
  interestRate: 1.4,
  pin: 3333,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'BDT',
  locale: 'bn-BD',
};

const accounts = [account1, account2, account3];

//////////////////////////////////
const app = document.querySelector('.app');
const greetings = document.querySelector('.welcome');
const date = document.querySelector('.date');
const timer = document.querySelector('.timer');
const balance = document.querySelector('.balance__value');
const movementsContainer = document.querySelector('.movements');

const summaryIn = document.querySelector('.summary__value--in');
const summaryOut = document.querySelector('.summary__value--out');
const summaryInterest = document.querySelector('.summary__value--interest');

const inputPin = document.querySelector('.login__input--pin');
const inputUser = document.querySelector('.login__input--user');
const inputTo = document.querySelector('.form__input--to');
const inputAmount = document.querySelector('.form__input--amount');
const inputLoan = document.querySelector('.form__input--loan-amount');
const inputCloseUser = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

//////////////////////
let currentAccount = null;

function createUsernames(accs) {
  accs.forEach(account => {
    account.username = account.owner
      .trim()
      .split(' ')
      .map(el => el[0])
      .join('')
      .toLowerCase();
  });
}
createUsernames(accounts);

async function currencyConverter(amount, curFrom, curTo) {
  const res = await fetch(
    `https://api.frankfurter.app/latest?amount=${amount}&from=${curFrom}&to=${curTo}`
  );

  if (!res.ok) return amount;

  const data = await res.json();
  return data.rates[curTo];
}

function formatCurrency(value, currencyCode = 'USD', locale = 'en-US') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
  }).format(value);
}

function formatDate(date, locale = currentAccount.locale, options = {}) {
  return new Intl.DateTimeFormat(locale, options).format(new Date(date));
}

function calcDisplayBalance(acc) {
  acc.balance = acc.movements.reduce((sum, mov) => sum + mov, 0);

  balance.textContent = formatCurrency(
    acc.balance,
    currentAccount.currency,
    currentAccount.locale
  );
}

function calcDisplaySummary(account) {
  let totalIn = 0;
  let totalOut = 0;

  account.movements.forEach(mov =>
    mov > 0 ? (totalIn += mov) : (totalOut += mov)
  );
  const interest = (totalIn / 100) * account.interestRate;

  summaryIn.textContent = formatCurrency(
    totalIn,
    account.currency,
    account.locale
  );
  summaryOut.textContent = formatCurrency(
    Math.abs(totalOut),
    account.currency,
    account.locale
  );
  summaryInterest.textContent = formatCurrency(
    interest,
    account.currency,
    account.locale
  );
}

function displayMovements(account, sort) {
  movementsContainer.textContent = '';

  let movs = account.movements.map((mov, idx) => {
    return { amount: mov, date: account.movementsDates[idx] };
  });

  movs = sort ? movs.sort((a, b) => b.amount - a.amount) : movs.reverse();

  movs.forEach((mov, i) => {
    const type = mov.amount >= 0 ? 'deposit' : 'withdrawal';

    const formattedCur = formatCurrency(
      mov.amount,
      account.currency,
      account.locale
    );

    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__date">${formatDate(mov.date)}</div>
          <div class="movements__value">${formattedCur}</div>
        </div>`;

    movementsContainer.insertAdjacentHTML('afterbegin', html);
  });
}

function startTimer() {
  let totalSeconds = 2 * 60;

  const tick = setInterval(() => {
    const min = Math.floor(totalSeconds / 60);
    const sec = totalSeconds % 60;
    totalSeconds--;

    timer.textContent = `${min.toString().padStart(2, '0')} : ${sec
      .toString()
      .padStart(2, '0')}`;

    if (totalSeconds === -1) {
      clearInterval(tick);
      greetings.textContent = 'Log in to get started';
      app.style.opacity = '0';
    }
  }, 1000);
}

function updateUI(acc) {
  if (!acc) return;

  calcDisplayBalance(acc);
  displayMovements(acc);
  calcDisplaySummary(acc);
  startTimer();
}

/////////////////////
// Event handlers

btnLogin.addEventListener('click', e => {
  e.preventDefault();

  const user = inputUser.value;
  const pin = Number(inputPin.value);

  if (!user || !pin) return;

  // check if the user is authenticated or not
  accounts.forEach(account => {
    if (account.username === user && account.pin === pin) {
      // display app interface
      greetings.textContent = `Welcome back, ${
        currentAccount.owner.split(' ')[0]
      }`;

      const options = {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        // minute: 'numeric',
        // hour: 'numeric',
      };

      date.textContent = formatDate(Date.now(), 'en-US', options);

      app.style.opacity = 100;
      currentAccount = account;

      // clear input value
      inputUser.value = inputPin.value = '';
      inputUser.blur();
      inputPin.blur();

      // update the user interface
      updateUI(currentAccount);
    }
  });
});

btnTransfer.addEventListener('click', async e => {
  e.preventDefault();

  const transferAccount = inputTo.value;
  const transferAmount = Number(inputAmount.value);

  const receiverAcc = accounts.find(acc => acc.username === transferAccount);

  if (
    !receiverAcc ||
    transferAmount <= 0 ||
    currentAccount.balance < transferAmount ||
    receiverAcc.username === currentAccount.username
  )
    return;

  const convertedAmount = await currencyConverter(
    transferAmount,
    currentAccount.currency,
    receiverAcc.currency
  );

  currentAccount.movements.push(-transferAmount);
  receiverAcc.movements.push(convertedAmount);

  const date = new Date().toISOString();
  currentAccount.movementsDates.push(date);
  receiverAcc.movementsDates.push(date);

  inputTo.value = inputAmount.value = '';
  inputTo.blur();
  inputAmount.blur();

  updateUI(currentAccount);
});

btnLoan.addEventListener('click', e => {
  e.preventDefault();

  const loanAmount = Number(inputLoan.value);

  if (!loanAmount || loanAmount < 500) return;

  currentAccount.movements.push(loanAmount);
  currentAccount.movementsDates.push(new Date().toISOString());

  inputLoan.value = '';
  inputLoan.blur();

  updateUI(currentAccount);
});

btnClose.addEventListener('click', () => {
  const username = inputCloseUser.value;
  const pin = Number(inputClosePin.value);

  if (!username || !pin) return;
});

let isSorted = false;
btnSort.addEventListener('click', () => {
  displayMovements(currentAccount, !isSorted);
  isSorted = !isSorted;
  btnSort.classList.toggle('active');
});
