class Car {

    constructor(brand, model, yearManufacture, totalMileage, marketCost, color, steeringWheelLocation, transmissionType, 
        engineType, maxSpeed, numberPassengerSeats) {
        this.brand = brand;
        this.model = model;
        this.yearManufacture = yearManufacture;
        this.totalMileage = totalMileage;
        this.marketCost = marketCost;
        this.color = color;
        this.steeringWheelLocation = steeringWheelLocation;
        this.transmissionType = transmissionType;
        this.engineType = engineType;
        this.maxSpeed = maxSpeed;
        this.numberPassengerSeats = numberPassengerSeats;
    }

    getMarketCost() {
        return this.marketCost;
    }
}

module.exports = Car;