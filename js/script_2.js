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
let currentAccount = account1;

function calcUserName() {
  accounts.forEach(account => {
    const username = account.owner
      .trim()
      .split(' ')
      .map(el => el[0])
      .join('')
      .toLowerCase();
    account.username = username;
  });
}
calcUserName();

function formatCurrency(amount, currencyCode = 'USD', locale = 'en-US') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
  }).format(amount);
}

function formatDate(date, locale = currentAccount.locale, options = {}) {
  return new Intl.DateTimeFormat(locale, options).format(new Date(date));
}

function calcDisplayBalance(movements) {
  return movements.reduce((sum, mov) => sum + mov, 0);
}

function calcDisplaySummary(account) {
  let totalIn = 0;
  let totalOut = 0;

  account.movements.forEach(mov =>
    mov > 0 ? (totalIn += mov) : (totalOut += Math.abs(mov))
  );
  const interest = (totalIn / 100) * account.interestRate;

  summaryIn.textContent = formatCurrency(
    totalIn,
    account.currency,
    account.locale
  );
  summaryOut.textContent = formatCurrency(
    totalOut,
    account.currency,
    account.locale
  );
  summaryInterest.textContent = formatCurrency(
    interest,
    account.currency,
    account.locale
  );
}

function displayMovements(account, isSorted) {
  let html = '';
  const totalMovements = account.movements.length;
  movementsContainer.textContent = '';

  const movements = isSorted
    ? account.movements.slice().sort((a, b) => b - a)
    : account.movements.slice().reverse();

  movements.forEach((mov, idx) => {
    const movementType = mov >= 0 ? 'deposit' : 'withdrawal';

    html += `<div class="movements__row">
          <div class="movements__type movements__type--${movementType}">${
      totalMovements - idx
    } ${movementType}</div>
          <div class="movements__date">${formatDate(
            account.movementsDates[totalMovements - (idx + 1)]
          )}</div>
          <div class="movements__value">${formatCurrency(
            mov,
            account.currency,
            account.locale
          )}</div>
        </div>`;
  });

  movementsContainer.insertAdjacentHTML('beforeend', html);
}

function displayTimer() {}

function updateUI() {
  if (!currentAccount) return;

  const options = {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    // minute: 'numeric',
    // hour: 'numeric',
  };

  greetings.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
  date.textContent = formatDate(Date.now(), 'en-US', options);
  balance.textContent = formatCurrency(
    calcDisplayBalance(currentAccount.movements),
    currentAccount.currency,
    currentAccount.locale
  );
  displayMovements(currentAccount);
  calcDisplaySummary(currentAccount);
}
updateUI();

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
      app.style.opacity = '1';
      currentAccount = account;

      // clear input value
      inputUser.value = inputPin.value = '';

      // clear focus
      inputUser.blur();
      inputPin.blur();
    }
  });
});

let isSorted = false;
btnSort.addEventListener('click', () => {
  displayMovements(currentAccount, !isSorted);
  isSorted = !isSorted;
  btnSort.classList.toggle('active');
});

btnTransfer.addEventListener('click', e => {
  e.preventDefault();

  const transferAccount = inputTo.value;
  const transferAmount = Number(inputAmount.value);

  const receiverAcc = accounts.find(acc => acc.username === transferAccount);

  if (!receiverAcc || transferAmount <= 0) return;

  currentAccount.movements.push(-transferAmount);
  receiverAcc.movements.push(transferAmount);

  const date = new Date().toISOString();
  currentAccount.movementsDates.push(date);
  receiverAcc.movementsDates.push(date);

  inputTo.value = inputAmount.value = '';
  inputTo.blur();
  inputAmount.blur();

  updateUI();
});

btnLoan.addEventListener('click', e => {
  e.preventDefault();

  const loanAmount = Number(inputLoan.value);

  if (!loanAmount || loanAmount < 500) return;

  currentAccount.movements.push(loanAmount);
  currentAccount.movementsDates.push(new Date().toISOString());

  inputLoan.value = '';
  inputLoan.blur();

  updateUI();
});

btnClose.addEventListener('click', () => {
  const username = inputCloseUser.value;
  const pin = Number(inputClosePin.value);

  if (!username || !pin) return;
});
