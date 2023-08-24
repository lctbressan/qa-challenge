package br.com.luisdet.Steps.Hook;


import cucumber.api.java.After;
import org.junit.AfterClass;
import org.junit.BeforeClass;

public class Hook extends BaseStep {

    @BeforeClass
    public static void inicializaAutomacao() throws Exception {
        System.out.println("#####################################################################################}");
        System.out.println("                  {STARTING AUTOMATION WAIT PLS - }");
          System.out.println("#####################################################################################}");

    }


    @AfterClass
    public static void finalizaAutomacao() throws Exception {

        //Reporter.loadXMLConfig(new File("src/test/resources/extent-config.xml"));
        /*Reporter.setSystemInfo("user", System.getProperty("user.name"));
        Reporter.setSystemInfo("os", "Win/Mac OSX");
        Reporter.setTestRunnerOutput("Sample test runner output message");
        Reporter.assignAuthor("Braziltest");*/

        System.out.println("Finalizando Testes");
        System.out.println("#####################################################################################}");
        System.out.println("                  { CLOSING AUTOMATION ..}");
        System.out.println("#####################################################################################}");

                Webdriver.quit();

    }


}
