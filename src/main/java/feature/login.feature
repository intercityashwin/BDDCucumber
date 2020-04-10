 
Feature: Spice Jet Website
	I want to test the Login Functionality 
	
	#this is without using Example keyword, in this method the Regexp is used
  Scenario: validate the login
 		Given user is on home page
 		When title of home page is crm
 		Then user enters the "9890594702" and "Ashwin@18"
 		Then user clicks on login button
 		And user is loggedin
 	
 	
 	#this is with using the Example Keyword use Scenario outline, when Examples is used then Scenario Outline is used
  Scenario Outline: validate the login 
 		Given user is on home page
 		When title of home page is crm
 		Then user enters the "<username>" and "<password>"
 		Then user clicks on login button
 		And user is loggedin
 			Examples: 
 			| username   | password  |
 			| 9890594702 | Ashwin@18 |
 			
 			#https://www.youtube.com/watch?v=W1NhwqWC29M&list=PLFGoYjJG_fqoBFPevCDZDCufDX5h-o3yO&index=4
 	