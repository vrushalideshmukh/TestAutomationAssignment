package com.application.stepdefinations;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import com.application.pages.LoginPage;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefination {
	
	LoginPage loginPage;
	
	public LoginStepDefination() {
		loginPage = new LoginPage();
	}
	
	@Given("^user is already on Login Page$")
	@Before //Hooks 
	public void user_is_already_on_Login_Page() {
		loginPage.goToLoginPage();
	}
	
	 @When("^title of login page is Log In$")
	public void title_of_login_page_is_Log_In() {
	 String title = loginPage.getTitle();
	 System.out.println(title);
	 Assert.assertEquals("Log In - Hudl", title);
	 }
	 
	 @Then("^user enters \"(.*)\" and \"(.*)\"$")
	 public void user_enters_and(String username, String password){
		 loginPage.enterUsername(username);
		 loginPage.enterPassword(password);
	 }
	 
	 @Then("^user clicks on login button$")
	 public void user_clicks_on_login_button() {
		 loginPage.clickOnLogin();
		 System.out.println("Clicked on Login Button");
	 }
	 
	 @Then("^user is on home page$")
	 public void user_is_on_home_page() throws InterruptedException {
		 Thread.sleep(5000);
		 String title = loginPage.getTitle();
     	 System.out.println("Home Page title ::"+ title);
		 Assert.assertEquals("Home - Hudl", title);
	 }
	 
	 @Then("^Close the browser$")
	 @After
	 public void close_the_browser() {
		 loginPage.close();
	 } 
	 
	 @Then("^user gets validation message$")
	 public void user_gets_validation_message() throws InterruptedException {
		 Thread.sleep(5000);
		 String actual_error = loginPage.getValidationMessage();
		 String expected_error="We didn't recognize that email and/or password. Need help?";
		 Assert.assertEquals(actual_error, expected_error);
		 System.out.println("Validation is successful");
	 }
	 
	 @Then("^user clicks on logout button$")
	 public void user_clicks_on_logout_button() throws InterruptedException {
		 loginPage.logout();
		 Thread.sleep(5000);
	 }
	 
	 @Then("^user is on main page$")
	 public void user_is_on_main_page() throws InterruptedException {
		 Thread.sleep(5000);
		 String title = loginPage.getTitle();
     	 System.out.println("Main Page title ::"+ title);
		 Assert.assertEquals("Hudl: We Help Teams and Athletes Win", title);
	 }
	 
	 @Then("^password entered is asterisk$")
	 public void password_entered_is_asterisk() throws InterruptedException {
		 Thread.sleep(5000);
		 WebElement input = loginPage.getPasswordField();
		 boolean isEncrypted = input.getAttribute("type").equals("password");
		 System.out.println("password is masked");
	 }
}
