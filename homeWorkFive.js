let sum = (a, b) => console.log(`Сложение типов '${typeof a}' и '${typeof b}' =  ${a + b}`)
let multiplication = (a, b) => console.log(`Умножение типов '${typeof a}' и '${typeof b}' =  ${a * b}`)
let division = (a, b) => console.log(`Деление типов '${typeof a}' и '${typeof b}' =  ${a / b}`)
let explicitConversion = (a, type) => console.log(`Явное преобразование '${typeof a}' к ${typeof type(a)} = ${type(a)}`)

sum('234', false)
sum('123', 102)
sum(543, true)

multiplication('0.5', true)
multiplication('125', 0.56)
multiplication(45, false)

division('str', true)
division('123', 123)
division(45, false)

explicitConversion(true, Number)
explicitConversion(undefined, String)
explicitConversion(NaN, Boolean)