/*
		Lambton College
		CSD 3103 - Full Stack JavaScript
		Term project
		Hugo Beltran Escarraga - C0845680
		Juan Luis Casanova Romero - C0851175
*/

const password = process.env.PRACTICE_TEST

module.exports = {
    // dburl:'mongodb://0.0.0.0:27017/G1-Practice-Test'
    // dburl:`mongodb+srv://admin:${password}@fullstackjs.cbyf9va.mongodb.net/PracticeTest`
    dburl:`mongodb+srv://admin:${password}@csd3103.66klf4s.mongodb.net/?retryWrites=true&w=majority`
}