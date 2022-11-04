const ElectricPassengerCar = require('./Car/ElectricPassengerCar.js');
const PetrolPassengerCar = require('./Car/PetrolPassengerCar.js');
const PetrolCargoPassengerCar = require('./Car/PetrolCargoPassengerCar.js');

class TaxiCompany {
    constructor(cars) {
        this.cars = cars;
    }

    getCostTaxiCompany() {
        const sumCost = this.cars.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.getMarketCost();
        }, 0)
        return sumCost;
    }

    getPetrolEngineCar() {
        let petrolEngineCar = [];
        this.cars.forEach(itemCar => {
            if (!(itemCar instanceof ElectricPassengerCar)) {
                petrolEngineCar.push(itemCar);
            }
        });
        return petrolEngineCar;
    }

    getElectricEngineCar() {
        let electricEngineCar = [];
        this.cars.forEach(itemCar => {
            if (itemCar instanceof ElectricPassengerCar) {
                electricEngineCar.push(itemCar);
            }
        });
        return electricEngineCar;
    }

    getAllCargoCar() {
        let cargoCar = [];
        this.cars.forEach(itemCar => {
            if (itemCar instanceof PetrolCargoPassengerCar) {
                cargoCar.push(itemCar);
            }
        });
        return cargoCar;
    }

    getElectricCarByMaxMilleageFullCharge() {
        const electricCar = this.getElectricEngineCar();
        return electricCar.reduce((accumulator, currentValue) => accumulator.getMilleageFullCharge() > currentValue.getMilleageFullCharge() ? accumulator : currentValue);
    }

    getCargoCarByMaxTonnage() {
        const cargoCar = this.getAllCargoCar();
        return cargoCar.reduce((accumulator, currentValue) => accumulator.getMaxTonnage() > currentValue.getMaxTonnage() ? accumulator : currentValue);
    }

    getCarSortByFuelConsumption() {
        return this.getPetrolEngineCar().sort((a, b) => (a.getFuelConsumption() > b.getFuelConsumption()) ? 1 : -1);;
    }

    static printMessage(text, result) {
        console.log(`${text} - ${JSON.stringify(result)}`)
    }
}

module.exports = TaxiCompany;