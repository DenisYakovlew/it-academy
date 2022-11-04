const Car = require('./Car.js');

class ElectricPassengerCar extends Car {

    constructor(brand, model, yearManufacture, totalMileage, marketCost, color, steeringWheelLocation, transmissionType, 
        engineType, maxSpeed, numberPassengerSeats, milleageFullCharge, chargingTime, typeBattery) {
        super(brand, model, yearManufacture, totalMileage, marketCost, color, steeringWheelLocation, transmissionType, 
            engineType, maxSpeed, numberPassengerSeats);
        this.milleageFullCharge = milleageFullCharge;
        this.chargingTime = chargingTime;
        this.typeBattery = typeBattery;
    }

    getMilleageFullCharge() {
        return this.milleageFullCharge;
    }

}

module.exports = ElectricPassengerCar;