'use strict';

class Barmen {
    constructor(cupboard, smsService, accountBook) {
        this._cupboard = cupboard;
        this._smsService = smsService;
        this._accountBook = accountBook;
        this._wasSmsSent = false;
        this._lastDrink = null;
        this._lastVolume = null;
    }

    get wasSmsSent() {
        return this._wasSmsSent;
    }

    pour(drinkName, volume, visitor) {
        if (!this._cupboard.hasDrink(drinkName, volume)) {
            this._smsService.send("Напиток " + drinkName + " закончился. Закажите еще кегу пожалуйста.");
            this._wasSmsSent = true;
        }

        this._lastDrink = drinkName;
        this._lastVolume = volume;
        return this._cupboard.getDrink(drinkName, volume);
    }

    logLastDrinkPayment(cost) {
        this._accountBook.addEntry(this._lastDrink, this._lastVolume, cost);
    }
}

module.exports = Barmen;