/*
Instructions:

	Create a function which will be able to add two numbers.
		-Numbers must be provided as arguments.
		-Display the result of the addition in our console.

	Create a function which will be able to subtract two numbers.
		-Numbers must be provided as arguments.
		-Display the result of subtraction in our console.

	Create function which will be able to multiply two numbers.
		-Numbers must be provided as arguments.
		-Return the result of the multiplication.

	-Create a new variable called product.
		-This product should be able to receive the result of multiplication function.

	Log the value of product variable in the console.

Pushing Instructions:

Go to Github:
	-in your project folder and access pcco107 folder.
	-inside your pcco107 folder create a new folder/subgroup: 
		<firstLetterOfYourName><lastName>_s03
	-inside s03, create a new project/repo called activity
	-untick the readme option
	-copy the git url from the clone button of your activity repo.

Go to Gitbash:
	-go to your pcco107/s03 folder and access activity folder
	-initialize activity folder as a local repo: git init
	-connect your local repo to our online repo: git remote add origin <gitURLOfOnlineRepo>
	-add your updates to be committed: git add .
	-commit your changes to be pushed: git commit -m "includes javascript intro activity"
	-push your updates to your online repo: git push origin master

Go to PCCO107 Lab Canvas:
	-copy the url of the home page for your s03/activity repo (URL on browser not the URL from clone button) and link it to boodle:



*/
function addNum (num1, num2){
	result = num1 + num2
	// console.log(result)
	return result;
}

let sumResult = addNum(10,5)
console.log(`The result of the addition is: ${sumResult}`)



function subNum (num1, num2){
	result = num1 - num2;
	return result;
}

let differenceResult = subNum(20,5)
console.log(`The result of subtraction is: ${differenceResult}`)

function multiplyNum (num1, num2){
	result = num1 * num2;
	return result;
}

let productResult = multiplyNum(25,5)
console.log(`The result of multiplication is: ${productResult}`)

let variable = 'product';
let productNumber = 8;
productNumber = productNumber * 2
console.log(`The result of the product variable is ${productNumber}`)
