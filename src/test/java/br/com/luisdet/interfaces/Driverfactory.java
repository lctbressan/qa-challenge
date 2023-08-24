package br.com.luisdet.interfaces;

import br.com.luisdet.Steps.Hook.Hook;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import java.net.InetAddress;
import java.util.concurrent.TimeUnit;

public class Driverfactory extends Hook {


    public static WebDriver getDriver(String path, String browser) throws Exception {
        OpenBrowserChrome(path, "");
        return Webdriver;
    }


    public static WebDriver OpenBrowserChrome(String p0,String Path) throws Exception {

        System.setProperty("webdriver.chrome.driver", "/usr/local/sbin/chromedriver");
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

}
