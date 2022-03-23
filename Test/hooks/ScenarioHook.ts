const { BeforeAll, Before, After, Status, setDefaultTimeout } = require("cucumber");
import { browser } from "protractor";
import { CucumberReportExtension } from "../reporting/CucumberReportExtension";
import { LoginPage } from '../pages/LoginPage'
import { config } from "../steps/conf";

const jsonReports = process.cwd() + "/reports/json";

    const BaseP = new LoginPage();
    setDefaultTimeout(650000);
    BeforeAll(async () => {
        CucumberReportExtension.CreateReportFile(jsonReports);
    });

    Before(async function (scenario: any) {
        console.log(`Starting scenario ${scenario.sourceLocation.uri}:${scenario.sourceLocation.line} (${scenario.pickle.name})`);
    });

    After(async function(scenario: any) {
        console.log(`Finishing scenario ${scenario.sourceLocation.uri}:${scenario.sourceLocation.line} (${scenario.pickle.name})`);
        if (scenario.result.status === Status.FAILED) {
            // screenShot is a base-64 encoded PNG
             const screenShot = await browser.takeScreenshot();
             this.attach(screenShot, "image/png");
             browser.restart();
             await BaseP.pause(4000);
             config.onPrepare();
             await BaseP.pause(4000);
        }
    });


