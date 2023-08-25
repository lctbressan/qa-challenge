package br.com.luisdet.Pages;

import br.com.luisdet.Steps.Hook.BaseStep;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.ArrayList;
import java.util.List;

public class searchPage extends BaseStep {
    public static void checkMessage(String arg0) {
        try {
           WebElement ele = Webdriver.findElement(By.xpath("//*[contains(text(),'" + arg0 + "')]"));
           ele.click();
            //WebDriverWait waitCad = new WebDriverWait(Webdriver, 10);
            //waitCad.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[contains(text(),'" + arg0 + "')]"))).click();

        }catch(Exception e){
            Assert.assertFalse(true);
            System.out.println(e.getMessage());
        }
    }

    public static void searchForARepoRepo(String arg0) {

            try {

                WebElement ele = Webdriver.findElement(By.id("username"));
                ele.sendKeys(arg0);

                //WebDriverWait waitCad = new WebDriverWait(Webdriver, 10);
                //waitCad.until(ExpectedConditions.elementToBeClickable(By.id("username"))).sendKeys(arg0);

                WebElement ele1 = Webdriver.findElement(By.xpath("//*[contains(text(),'Go')]"));
                ele1.click();

                //WebDriverWait waitCad1 = new WebDriverWait(Webdriver, 10);
                //waitCad1.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[contains(text(),'Go')]"))).click();


            }catch(Exception e){
                Assert.assertFalse(true);
                System.out.println(e.getMessage());
            }

    }

    public static void navigateOnRepo(String arg0) {
        try {


            //WebDriverWait waitCad1 = new WebDriverWait(Webdriver, 10);
            //waitCad1.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[contains(text(),'" + arg0 + "')]"))).click();

            WebElement ele1 = Webdriver.findElement(By.xpath("//*[contains(text(),'" + arg0 + "')]"));
            ele1.click();

            ArrayList<String> wid = new ArrayList<String>(Webdriver.getWindowHandles());
            Webdriver.switchTo().window(wid.get(1));
            System.out.println("Page title of active tab: " + Webdriver.getTitle());


        }catch(Exception e){
            Assert.assertFalse(true);
            System.out.println(e.getMessage());
        }
    }

    public static void checkMessageOnScreenGithub(String arg0) {

        List<WebElement> listElement = Webdriver.findElements(By.cssSelector("[data-target='readme-toc.content']"));
        for (int i = 0; i < listElement.size(); i++) {
            String elementText = listElement.get(i).getText();
            System.out.println(elementText);
            if (!elementText.toUpperCase().contains(arg0.toUpperCase())) {
                Assert.assertFalse(true);
            }

        }
    }
}
