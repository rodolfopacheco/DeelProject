"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const protractor_1 = require("protractor");
const CucumberReportExtension_1 = require("../reporting/CucumberReportExtension");
const jsonReports = process.cwd() + "/reports/json";
exports.config = {
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
        "login": "../features/Contracts.feature"
    },
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ["--disable-gpu", "--window-size=1920x1080"]
        }
    },
    onPrepare: () => {
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.manage().window().maximize();
        CucumberReportExtension_1.CucumberReportExtension.CreateReportFile(jsonReports);
        protractor_1.browser.driver.get("https://app.deel.training/login");
    },
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        strict: true,
        format: "json:./reports/json/cucumber_report.json",
        require: ['../steps/*.js', '../hooks/*.js'],
        tags: '@test'
    },
    onComplete: () => {
        CucumberReportExtension_1.CucumberReportExtension.GenerateCucumberReport();
    },
};
//# sourceMappingURL=conf.js.map