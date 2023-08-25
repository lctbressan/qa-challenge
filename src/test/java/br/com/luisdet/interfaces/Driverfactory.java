package br.com.luisdet.interfaces;

import br.com.luisdet.Steps.Hook.Hook;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.BrowserType;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.net.InetAddress;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

public class Driverfactory extends Hook {


    public static WebDriver getDriver(String path, String browser) throws Exception {
        OpenBrowserChrome(path, "");
        //setZeleniumWebDriveChromer(path);
        return Webdriver;
    }


    public static WebDriver OpenBrowserChrome(String p0,String Path) throws Exception {

        System.setProperty("webdriver.chrome.driver", "/usr/local/bin/chromedriver");
        ChromeOptions options = new ChromeOptions();
        if(InetAddress.getLocalHost().getHostName().equals("Imac.local")){
            options.addArguments("window-size=1920,1080"); //1920x1080
         }else{
            options.addArguments("start-maximized");
        }
        options.addArguments("−−lang=en-US");
        options.addArguments("test-type");
        options.addArguments("disable-infobars");
        options.addArguments("--disable-extensions");
        options.addArguments("enable-automation");
        options.addArguments("--no-sandbox");
        options.addArguments("--disable-dev-shm-usage");
        options.addArguments("--disable-browser-side-navigation");
        options.addArguments("--disable-gpu");
         Webdriver = new ChromeDriver(options);
        Webdriver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
        Webdriver.get(p0);
        return Webdriver;
    }

    public static WebDriver setZeleniumWebDriveChromer(String arg0) throws MalformedURLException {
        DesiredCapabilities desiredCapabilities = new DesiredCapabilities();
        desiredCapabilities.setCapability(CapabilityType.BROWSER_NAME, BrowserType.CHROME);
        Webdriver = new RemoteWebDriver(new URL("http://10.10.0.36:4444/wd/hub"), desiredCapabilities);
        Webdriver.navigate().to(arg0);
        Webdriver.manage().window().maximize();
        Webdriver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
        System.out.println("DRIVER CHROME " + Webdriver);
        return Webdriver;
    }

}
