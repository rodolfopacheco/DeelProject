"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CucumberReportExtension = void 0;
const fs = __importStar(require("fs"));
const report = __importStar(require("cucumber-html-reporter"));
class CucumberReportExtension {
    static CreateReportFile(dirName) {
        if (!fs.existsSync(dirName))
            fs.mkdirSync(dirName);
    }
    static GenerateCucumberReport() {
        report.generate(this.cucumberReporterOptions);
    }
}
exports.CucumberReportExtension = CucumberReportExtension;
CucumberReportExtension.jsonDir = process.cwd() + "/reports/json";
CucumberReportExtension.htmlDir = process.cwd() + "/reports/html";
CucumberReportExtension.jsonFile = CucumberReportExtension.jsonDir + "/cucumber_report.json";
CucumberReportExtension.cucumberReporterOptions = {
    theme: "bootstrap",
    jsonFile: CucumberReportExtension.jsonFile,
    output: CucumberReportExtension.htmlDir + "/cucumber_reporter.html",
    reportSuiteAsScenarios: true,
    metadata: {
        "App Version": "0.0.1",
        "Test Environment": "Testing",
        "Browser": "Chrome",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Local"
    }
};
//# sourceMappingURL=CucumberReportExtension.js.map