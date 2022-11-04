const PetrolPassengerCar = require('./PetrolPassengerCar.js');

class PetrolCargoPassengerCar extends PetrolPassengerCar {

    constructor(brand, model, yearManufacture, totalMileage, marketCost, color, steeringWheelLocation, transmissionType, 
        engineType, maxSpeed, numberPassengerSeats, typeFuel, fuelConsumption, fuelCapacity, maxTonnage, maxSize) {
        super(brand, model, yearManufacture, totalMileage, marketCost, color, steeringWheelLocation, transmissionType, 
            engineType, maxSpeed, numberPassengerSeats, typeFuel, fuelConsumption, fuelCapacity);
        this.maxTonnage = maxTonnage;
        this.maxSize = maxSize;
    }

    getMaxTonnage() {
        return this.maxTonnage;
    }
}

module.exports = PetrolCargoPassengerCar;