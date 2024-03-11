class Account {
    constructor (AccountNo,Password,Balance,Interest) {
        this.AccountNo = AccountNo
        this.Password = Password
        this.Balance = Balance
        this.Interest = Interest
        this.Lastday = newDay();
    }

    New() {
        new Account(AccountNo,Password,Balance,Interest); 
    }
}


class Fixed extends Account {
    constructor (AccountNo) {
        this.Tern = AccountNo
    }

    New () {
        super.New();

    }
    Display(AccountNo,Password,Balance) {
        console.log(AccountNo);
        console.log(Password);
        console.log(Balance);

    }
}

class Saving extends Account {
    constructor(Balance) {
        this.Minnimun = Balance;
    }

    New () {
        super.New();

    }
    Display(AccountNo,Password,Balance) {
        console.log(AccountNo);
        console.log(Password);
        console.log(Balance);

    }
    InterestAmount(Balance,Interest) {
        this.day = newDay();
        this.InterestAmount = Balance * Interest * (day-Lastday);
        console.log(InterestAmount)
    }
}