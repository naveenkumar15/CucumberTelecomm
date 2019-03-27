package stepdefinition;
import cucumber.api.junit.*;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/features", glue = { "stepdefinition" }, plugin = { "html:target",
		"json:src/test/java/pack2/report.json"}, tags = {}, monochrome = true, dryRun = false, strict = true)

public class TestRunner {

}
