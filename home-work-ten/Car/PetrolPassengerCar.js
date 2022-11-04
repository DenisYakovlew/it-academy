const Car = require('./Car.js');

class PetrolPassengerCar extends Car {

    constructor(brand, model, yearManufacture, totalMileage, marketCost, color, steeringWheelLocation, transmissionType, 
        engineType, maxSpeed, numberPassengerSeats, typeFuel, fuelConsumption, fuelCapacity) {
        super(brand, model, yearManufacture, totalMileage, marketCost, color, steeringWheelLocation, transmissionType, 
            engineType, maxSpeed, numberPassengerSeats);
        this.typeFuel = typeFuel;
        this.fuelConsumption = fuelConsumption;
        this.fuelCapacity = fuelCapacity;
    }

    getFuelConsumption () {
        return this.fuelConsumption;
    }
}

module.exports = PetrolPassengerCar;