package br.com.luisdet.Runners;


import br.com.luisdet.Steps.Hook.Hook;


import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(format = { "pretty", "html:target/cucumber", "json:target/cucumber.json" },
        monochrome = true,
        dryRun = false,
        glue = {"br.com.luisdet"},
        features = {"/Users/braziltest/sources/repos/qa-challenge/src/test/java/resources/features"},
        plugin = {"com.vimalselvam.cucumber.listener.ExtentCucumberFormatter:", "json:target/cucumber.json", "html:target/cucumber-report", "junit:target/junit.xml"},
        tags={"@e2e"},
        strict = true,
        snippets = SnippetType.CAMELCASE)
public  class Runner extends Hook {

}
