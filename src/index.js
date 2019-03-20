// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let money = {"H":0,"Q":0,"D":0,"N":0,"P":0}

    if (currency >= 10000) {
        return err = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }

    while (currency >= 50) {
        money.H++;
        currency -= 50;
        } 

    while (currency >= 25 && currency < 50) {
        money.Q++;
        currency -= 25;
        }

    while (currency >= 10 && currency < 25) {
        money.D++;
        currency -= 10;
        }

    while (currency >= 5  && currency < 10) {
        money.N++;
        currency -= 5;
        }

    while (currency >= 1 && currency < 5) {
        money.P++;
        currency -= 1;
        }

    for (key in money) {
        if (money[key] === 0) {
            delete money[key];
        }
    }
    
    return money;
}