#  G1 Driver License Practice Test V2 

G1 Practice Test website allows users to prepare for the Canadian G1 Driver’s License test by presenting them random questions, as well as recording and reviewing their answers in real time, to finally display a chart with the results.

![Index](/public/assets/index.jpg "Index")


The purpose of this project is to improve the [test website](https://github.com/juanluiscr27/g1-practice-test).  that we created as a term project for CSD 2103 - Front End Web Development II course using different HTML and JavaScript technologies and frameworks. 

The scope of the project is to include new functionalities and migrate the existing ones to a modern approach by using MVC architecture by using MERN stack and other technologies to improve the security, scalability, and maintenance of the software. 

The new functionalities in version 2 include an administration module to manage the questions in the database. Also, as the previous version doesn’t track user sessions, new login and signup functionalities are included. 

## Features 

- The system allows users to create their own profiles. 

- Users are allowed to set up their tests by selecting the quantity of questions from each category. 

- The questions are displayed randomly by category when the test is being conducted. 

- During the test, the system gives real-time feedback on each question before moving to the next one. 

- During the test, users are allowed to skip questions. Skipped questions will be moved to the last position in the queue. 

- A summary of correct and incorrect answers is displayed along with a pie chart that illustrates the performance for each attempt once the question pool is depleted. 

- The system allows admin users to manage the questions database by viewing, adding and deleting them. 

## Database Schema 
As mentioned before, MongoDB stores data in a structure similar to a Json file. No ERD is used for this approach. 

### Users collection 
```js
UserSchema = Schema({
    name: String,
    email: String,
    phone: String,
    password: String,
    role: String
})
```
### Questions collection 

```js
QuestionSchema = Schema({
    number: Number,
    text: String,
    category: String,
    presentation: String,
    reference: String,
    answers: [AnswerSchema],
    explanation: String
})
```

```js
AnswerSchema = Schema({
    text: String,
    isCorrect: Boolean
})
```

## Software Design 

Following the MERN stack deployment and MVC architecture, the application uses the following files and folders to control its configuration features. 

 - server.js: Includes the components configuration 

- router.js: Includes the routes to the pages 

- backend/config/database.config.js:  Includes the database connection parameters 


As for the data flow for backend to frontend and vice versa, the following folders store the components according to their function. 

- backend/models: Includes the components related to database objects 

- backend/controllers: Includes business logic and functionality to transport information from end to end 

- views: Includes the files to display information to the user 

## Samples
Desciptive representation of the test web application

### Sign up 

Allows users to create a new profile to access the application. 

![signup](/public/assets/signup.jpg "signup")
 

### Login 

Allows existing users to access the application. 

![login](/public/assets/login.jpg "login")

### Set up 

After signing in or logging in, the application displays the test set up view. Users are allowed to establish the test’s parameters at this point. 

![setup](/public/assets/setup.jpg "setup")

### Test 

This view allows users to select a possible answer and get feedback regarding his choice. 

![questions rules](/public/assets/questions-rules.jpg "questions rules")

![questions signs](/public/assets/questions-signs.jpg "questions signs")

### Result 

After all questions have been answered, the result view displays a summary of the attempt. 

![Results](/public/assets/results.jpg "Results")

![Results mobile](/public/assets/resuts-mobile.jpg "Results Mobile")
 
### Administration module 

The administration module view is accessible to users with admin roles. It allows to choose between view questions and create questions. 

![admin](/public/assets/admin.jpg "admin")

Questions View displays the list of questions in the database, grouped by category. 

![View questions](/public/assets/view-questions.jpg "View questions")

Create question view enables the admin to create new questions and store them in the database for immediate use. 

![Create questions](/public/assets/create-question.jpg "Create questions")
