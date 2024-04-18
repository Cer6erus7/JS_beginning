// Challenge 1

// function tempConverter(fahrenheitNum) {
//     console.log("Fahrenheit to Celsius convertor")
//     console.log("This is your Celsius number - " + Math.round((fahrenheitNum - 32) * 5 / 9))
// }
// 
// tempConverter(123)


// Challenge 1.2

// function tempConverter(fahrenheitNum) {
//     return Math.round((fahrenheitNum - 32) * 5 / 9)
// }
// 
// console.log("Fahrenheit to Celsius convertor")
// let fahrenheitNum = prompt("Write your Fahrenheit value - ")
// let celsiusNum = tempConverter(fahrenheitInt)
// 
// console.log("This is your Celsius number - " + celsiusNum)


// Challenge 2 and 2.1

// let tipCalculator = function(num, tips = 0.1) {return num * tips}

// let tipAnswer = tipCalculator(100)
// console.log("Tips will be - " + tipAnswer)

// let higherTipAnswer = tipCalculator(100, 0.25)
// console.log("Tips with a higher number will be - " + higherTipAnswer)


// Challenge 3 

// let gradeCalculator = function (Grade, MaxGrade) {return Grade/MaxGrade * 100}

// let gradePercentage = gradeCalculator(95, 100)
// let finalGrade = null

// if (gradePercentage <= 59) {
//     finalGrade = "F"
// }
// else if (gradePercentage <= 69) {
//     finalGrade = "D"
// }
// else if (gradePercentage <= 79) {
//     finalGrade = "C"
// }
// else if (gradePercentage <= 89) {
//     finalGrade = "B"
// }
// else {
//     finalGrade = "A"
// }

// console.log("Your final grade is - " + finalGrade)


// Challenge 4

// let person = {
//     Name: "Matvii",
//     Expense: 0,
//     Income: 0
// }

// function addIncome(summ) {
//     person.Income += summ
// }

// function addExpense(summ) {
//     person.Expense += summ
// }

// function resetAccount(account) {
//     account.Expense = 0
//     account.Income = 0
// }

// function getSummary(account) {
//     let balance = account.Income - account.Expense
//     return `${account.Name}. Account $${balance}. Expences are $${account.Expense}, income is $${account.Income}`
// }

// console.log(getSummary(person))

// addIncome(333)
// console.log(getSummary(person))

// addExpense(99)
// console.log(getSummary(person))

// resetAccount(person)
// console.log(getSummary(person))


// Challenge 5

// let lst = ["Rome", "Paris", "London"]
// let num = 1

// for (const i of lst) {
//     console.log(`${num}. ${i}`)
//     num += 1
// }