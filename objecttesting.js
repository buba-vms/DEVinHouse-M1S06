function Account(name, balance) {
  this.name = name;
  this.balance = balance;
}

Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`saldo atual é ${this.balance}`);
};

const jhon = new Account('jhon', 200);
jhon.deposit(300);
