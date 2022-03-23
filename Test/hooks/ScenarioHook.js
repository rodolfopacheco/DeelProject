"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const { BeforeAll, Before, After, Status, setDefaultTimeout } = require("cucumber");
const protractor_1 = require("protractor");
const CucumberReportExtension_1 = require("../reporting/CucumberReportExtension");
const LoginPage_1 = require("../pages/LoginPage");
const conf_1 = require("../steps/conf");
const jsonReports = process.cwd() + "/reports/json";
const BaseP = new LoginPage_1.LoginPage();
setDefaultTimeout(650000);
BeforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    CucumberReportExtension_1.CucumberReportExtension.CreateReportFile(jsonReports);
}));
Before(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`Starting scenario ${scenario.sourceLocation.uri}:${scenario.sourceLocation.line} (${scenario.pickle.name})`);
    });
});
After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`Finishing scenario ${scenario.sourceLocation.uri}:${scenario.sourceLocation.line} (${scenario.pickle.name})`);
        if (scenario.result.status === Status.FAILED) {
            const screenShot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenShot, "image/png");
            protractor_1.browser.restart();
            yield BaseP.pause(4000);
            conf_1.config.onPrepare();
            yield BaseP.pause(4000);
        }
    });
});
//# sourceMappingURL=ScenarioHook.js.map