/*
		Lambton College
		CSD 3103 - Full Stack JavaScript
		Term project
		Hugo Beltran Escarraga - C0845680
		Juan Luis Casanova Romero - C0851175
*/

const password = process.env.PRACTICE_TEST
console.log(process.env.JAVA_HOME)
module.exports = {
    //url: 'mongodb://0.0.0.0:27017/G1-Practice-Test'
    url:'mongodb+srv://admin:${password}@fullstackjs.cbyf9va.mongodb.net/PracticeTest'
  }