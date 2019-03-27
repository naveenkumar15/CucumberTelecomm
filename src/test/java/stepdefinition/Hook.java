package stepdefinition;

import java.net.MalformedURLException;
import java.net.URL;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hook {
	public static WebDriver driver;

	@Before
	public static void x() throws MalformedURLException {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Gomathi\\eclipse-workspace\\Baseclass\\Driver\\chromedriver.exe");
		System.out.println("before method");
		DesiredCapabilities capability = DesiredCapabilities.chrome();
		capability.setBrowserName("chrome");
		driver = new ChromeDriver();
	}

	@After
	public static void y() {
		System.out.println("after method");
		driver.close();
		driver.quit();
	}

}
