class channel {
  constructor(receiver, sender, deposit, openBlock){
    //
    this.receiver = receiver;
    this.sender = sender;
    this.deposit = deposit;
    this.openBlock = openBlock;

    // Defaults
    this.balance = 0;
    this.isClosed = false;
    this.lastSignature = None;
    this.settleTimeout = -1;
    this.cTime = Date.now();
    this.mTime = this.ctime;
    this.confirmed = false;

    this.unconfirmedTopups = {};
  }

  unconfirmedDeposits(self) {
    return this.deposit + sum(this.unconfirmedTopups.values());
  }
  
}
