@FunctionalTest
Feature: Hudl Login Feature 

#with Examples Keyword
@RegressionTest
Scenario Outline: Hudl Login Test Scenario(valid username and valid password)

When title of login page is Log In
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on home page


Examples:
	| username                 | password |
	| vrushali3june@gmail.com  | Vrush@123|

@RegressionTest 
Scenario Outline: Hudl Login Test Scenario(invalid username and valid password)

When title of login page is Log In
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user gets validation message


Examples:
	| username                 | password |
	| vrushali3jun@gmail.com   | Vrush@123|

@RegressionTest
Scenario Outline: Hudl Login Test Scenario(valid username and invalid password)

When title of login page is Log In
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user gets validation message

Examples:
	| username                 | password |
	| vrushali3june@gmail.com  | Vrush@12|	
	
@RegressionTest
Scenario Outline: Hudl Logout Test Scenario

When title of login page is Log In
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on home page
Then user clicks on logout button
Then user is on main page


Examples:
	| username                 | password |
	| vrushali3june@gmail.com  | Vrush@123|
	
@RegressionTest
Scenario Outline: password field displayed masked

When title of login page is Log In
Then user enters "<username>" and "<password>"
Then password entered is asterisk

Examples:
	| username                 | password |
	| vrushali3june@gmail.com  | Vrush@123|