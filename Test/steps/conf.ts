import { Config, browser } from 'protractor';
import { CucumberReportExtension } from '../reporting/CucumberReportExtension';
const jsonReports = process.cwd() + "/reports/json";

export let config: Config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    SELENIUM_PROMISE_MANAGER: false, 
    specs: ["../features/*.feature"],
    
    framework: 'custom',
    params: {
        enviroment: {
            envDate: 'Production'

        }
    },
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    
    suites: {
        "login" : "../features/Contracts.feature"
    },

    capabilities: {
        browserName: 'chrome',
        
        chromeOptions: {
           args: [ "--disable-gpu", "--window-size=1920x1080"]
           //args: [ "--disable-gpu", "--window-size=1920x1080", "--disable-extensions", "--proxy-server='direct://'", "--proxy-bypass-list=*", "--start-maximized", "--headless", "--disable-dev-shm-usage", "--no-sandbox", "--ignore-certificate-errors"]
         }
      },

    onPrepare: () => {
         
         browser.waitForAngularEnabled(false);
         browser.manage().window().maximize();
         CucumberReportExtension.CreateReportFile(jsonReports);
         browser.driver.get("https://app.deel.training/login");
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        strict: true,
        format: "json:./reports/json/cucumber_report.json",
        require: ['../steps/*.js', '../hooks/*.js'],
        tags: '@test'
    },

    onComplete: () => {
        CucumberReportExtension.GenerateCucumberReport();
    },
}