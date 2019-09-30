package com.application.pages;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class LoginPage {
	private WebDriver driver;

	public LoginPage() {
		System.setProperty("webdriver.chrome.driver",".\\chromedriver.exe");
	 	driver = new ChromeDriver();
	 	driver.manage().window().maximize();
	  }

	  public void goToLoginPage() {
	    driver.get("https://www.hudl.com/login");
	  }

	  public void enterUsername(String username){
		  driver.findElement(By.name("username")).sendKeys(username);
	  }

	  public void enterPassword(String password){
		  driver.findElement(By.name("password")).sendKeys(password);
	  }

	  public void clickOnLogin(){
		  driver.findElement(By.id("logIn")).click();
	  }

	  public String getTitle() {
	    return driver.getTitle();
	  }
	  
	  public void close() {
		  driver.close();
	  }
	  
	  public String getValidationMessage() {
		  return driver.findElement(By.xpath("//div[@class='login-error-container']/p")).getText();
	  }
	  
	  public void logout() {
		  driver.findElement(By.className("hui-globaluseritem__avatar")).click();
		  driver.findElement(By.linkText("Log Out")).click();
	  }

	  public WebElement getPasswordField() {
		  return driver.findElement(By.name("password"));
	  }
	}