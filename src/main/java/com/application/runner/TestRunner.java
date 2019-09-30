package com.application.runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		//the path of the feature files
		features = "src/main/java/features",// path for feature file
		glue={"com.application.stepdefinations"},//the path of the step definition files
		monochrome = true, //display the console output in a proper readable format
		plugin= {"pretty","html:test-output","json:json_output/cucumber.json"},//to generate different types of reporting
		dryRun = false,//to check the mapping is proper between feature file and step definition file
		tags = {"@RegressionTest"}
		)
public class TestRunner {

}
