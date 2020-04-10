package runner;


import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


// just as we have TestNG.xml in TDD (Test Driven Development) similarly we have Features in Cucumber BDD (Business Driven Development)
// right click on Project and convert to Cucumber Project as a Mandatory step


//Following at some important Cucumber options

@RunWith(Cucumber.class)
@cucumber.api.CucumberOptions(
		features = "D://Selenium Class//BDDCucumber//src//main//java//feature//login.feature",
		glue= {"stepdefinitions"},  //glue means the location where step definitions files are available
		format= {"pretty","html:test-outout","json:json_ouput/cucumber.json","junit:junit_xml/cucumber.xml"},
				// format is used for generating different types of reports
		monochrome= true, //display the console ouput in a proper readable format
		//strict= true,   // it will check for step definitions and will run only if all are present, if any step 
						// definition is absent it will execute and provide exception for not implemented step definitions
		dryRun = false  // use to check the mapping of each gherkin node when dy run is true it will only check the missing methods 
						// when it is set to false it will execute the scripts
		
		)  //video pasued at 31:59

	//url https://www.youtube.com/watch?v=vHzMJuc9Zuk&list=PLFGoYjJG_fqoBFPevCDZDCufDX5h-o3yO

public class TestRunner {
	
}
