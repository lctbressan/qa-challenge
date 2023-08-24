package br.com.luisdet.Steps;

import br.com.luisdet.Pages.searchPage;
import br.com.luisdet.Steps.Hook.BaseStep;
import br.com.luisdet.interfaces.Driverfactory;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;


public class searchPageSteps extends BaseStep {
    @Given("open the test environment \"([^\"]*)\"$")
    public void openTheTestEnvironment(String arg0) throws Exception {
        Driverfactory.getDriver(arg0, "");
    }


    @Given("navigate to webpage \"([^\"]*)\"$")
    public void navigateToWebpage(String arg0) {


    }


    @When("check message on screen \"([^\"]*)\"$")
    public void checkMessageOnScreen(String arg0) {
        searchPage.checkMessage(arg0);
    }

    @When("search for a repo \"([^\"]*)\"$")
    public void searchForARepoRepo(String arg0) throws Throwable {
        searchPage.searchForARepoRepo(arg0);
    }


    @And("navigate on repo \"([^\"]*)\"$")
    public void navigateOnRepo(String arg0) {
        searchPage.navigateOnRepo(arg0);
    }

    @When("check message on screen github \"([^\"]*)\"$")
    public void checkMessageOnScreenGithub(String arg0) {
        searchPage.checkMessageOnScreenGithub(arg0);
    }
}