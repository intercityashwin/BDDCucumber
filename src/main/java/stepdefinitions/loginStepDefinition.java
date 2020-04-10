package stepdefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;


public class loginStepDefinition {
	WebDriver driver; 
	
	@Given("^user is on home page$")
	public void user_is_on_home_page(){
		System.setProperty("webdriver.chrome.driver","D://Selenium Class//Pom//drivers/chromedriver.exe");
		driver = new ChromeDriver(); 
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();	
		driver.manage().timeouts().pageLoadTimeout(50, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
		driver.get("https://book.spicejet.com/");
	}
	
	@When("^title of home page is crm$")
	public void title_of_home_page_is_crm(){
		String trt = driver.getTitle();
		Assert.assertEquals("Book Low Cost Air Tickets Online on Domestic & International Flights – SpiceJet", trt.trim());
	
	}
	
	@Then("^user enters the \"(.*)\" and \"(.*)\"$")
	public void user_enters_the_username_and_password(String usrname, String passwd) throws InterruptedException{
		Thread.sleep(3000);
		Actions act = new Actions(driver); 
		act.moveToElement(driver.findElement(By.xpath("//a[@id='Login']"))).moveToElement(driver.findElement(By.xpath("//a[contains(text(),'SpiceClub Members')]"))).build().perform();
		//act.moveToElement(driver.findElement(By.xpath("//a[@id='Login']"))).moveToElement(driver.findElement(By.xpath("//a[contains(text(),'SpiceClub Members')]"))).build().perform();
		Thread.sleep(3000);
		driver.findElement(By.xpath("//a[contains(text(),'Member Login')]")).click();
		//driver.findElement(By.xpath("//li[@class='hide-mobile']//ul//li//a[contains(text(),'Member Login')]")).click();
		System.out.println("Enter the UID and Password");
		driver.findElement(By.xpath("//input[@placeholder='Mobile Number']")).sendKeys(usrname);
		driver.findElement(By.xpath("//input[@type='password']")).sendKeys(passwd);
		driver.findElement(By.xpath("//input[@value='Login']")).click();
		Thread.sleep(3000);
		//Alert alt = driver.switchTo().alert();
		//alt.accept();
		driver.findElement(By.xpath("//input[@id='popup_ok']")).click();
		Thread.sleep(3000);
		driver.findElement(By.xpath("//input[@value='Login']")).click();
		
	}
	
	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button(){
		String err = driver.findElement(By.xpath("//div[@class='errorSectionHeader']")).getText(); 
		System.out.println(err);
	}
	
	@And("^user is loggedin$")
	public void user_is_loggedin(){
		System.out.println("Test Case Completed");
	}
	
}
