const ElectricPassengerCar = require('./Car/ElectricPassengerCar.js');
const PetrolPassengerCar = require('./Car/PetrolPassengerCar.js');
const PetrolCargoPassengerCar = require('./Car/PetrolCargoPassengerCar.js');
const TaxiComapny = require('./TaxiCompany.js');

const cars = [
    new ElectricPassengerCar('Tesla', 'Model M', 2019, 32000, 11000, 'blue', 'LHD', 'AT', 'Electric', 250, 4, 350, 5, 'Litium'),
    new ElectricPassengerCar('Nissan', 'Leaf', 2016, 45000, 8000, 'white', 'RHD', 'AT', 'electric', 180, 4, 300, 8, 'Litium-INH'),
    new PetrolPassengerCar('Volkswagen', 'Transporter', 2017, 230000, 9500, 'black', 'LHD', 'CVT', 'petrol', 200, 9, 'diesel', 10, 70),
    new PetrolPassengerCar('Infinity', 'FX450', 2008, 190000, 5600, 'gray', 'LHD', 'AT', 'petrol', 230, 4, 'gaz', 16, 70),
    new PetrolPassengerCar('Lada', 'Priora', 2007, 134000, 2500, 'green', 'LHD', 'MT', 'petrol', 180, 4, 'petrol', 7.8, 40),
    new PetrolCargoPassengerCar('Kamaz', '6520', 2008, 340000, 7000, 'red', 'LHD', 'MT', 'petrol', 100, 2, 'diesel', 30, 500, 10000, 5),
    new PetrolCargoPassengerCar('Gazel', 'Valdai NEXT', 2018, 320000, 9800, 'yellow', 'LHD', 'MT', 'petrol', 100, 3, 'gaz', 12, 90, 2500, 6)
]

const taxiCompany = new TaxiComapny(cars);

TaxiComapny.printMessage('Стоимость всего созданного таксопарка', taxiCompany.getCostTaxiCompany());
TaxiComapny.printMessage('Сортировка автомобилей парка по расходу топлива', taxiCompany.getCarSortByFuelConsumption());
TaxiComapny.printMessage('Электрокар таксопарка с максимальным пробегом на одном заряде', taxiCompany.getElectricCarByMaxMilleageFullCharge());
TaxiComapny.printMessage('Грузовой автомобиль таксопарка с максимальной грузоподъемностью', taxiCompany.getCargoCarByMaxTonnage());

