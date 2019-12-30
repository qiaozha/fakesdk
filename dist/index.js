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
const autorest_extension_base_1 = require("@azure-tools/autorest-extension-base");
const extension = new autorest_extension_base_1.AutoRestExtension();
extension.Add("namer", (autoRestApi) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // read files offered to this plugin
        const inputFileUris = yield autoRestApi.ListInputs();
        const inputFiles = yield Promise.all(inputFileUris.map(uri => autoRestApi.ReadFile(uri)));
        // read a setting
        const isDebugFlagSet = yield autoRestApi.GetValue("debug");
        let cliCommonSettings = yield autoRestApi.GetValue("fake");
        // emit messages
        autoRestApi.Message({
            Channel: autorest_extension_base_1.Channel.Warning,
            Text: "Hello World fakesdk namer ! The `debug` flag is " + (isDebugFlagSet ? "set" : "not set"),
        });
        autoRestApi.Message({
            Channel: autorest_extension_base_1.Channel.Warning,
            Text: "fakesdk namer settings " + JSON.stringify(cliCommonSettings)
        });
        autoRestApi.Message({
            Channel: autorest_extension_base_1.Channel.Information,
            Text: "AutoRest offers the following input files: " + inputFileUris.join(", "),
        });
        // emit a file (all input files concatenated)
        autoRestApi.WriteFile("code-model-v4-namer.yaml", inputFiles[inputFileUris.indexOf("code-model-v4-cli.yaml")]);
    }
    catch (e) {
        Error(e.message + " -- " + JSON.stringify(e.stack));
    }
}));
extension.Add('fakesdk', (autoRestApi) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // read files offered to this plugin
        const inputFileUris = yield autoRestApi.ListInputs();
        const inputFiles = yield Promise.all(inputFileUris.map(uri => autoRestApi.ReadFile(uri)));
        // read a setting
        const isDebugFlagSet = yield autoRestApi.GetValue("debug");
        let cliCommonSettings = yield autoRestApi.GetValue("fake");
        // emit messages
        autoRestApi.Message({
            Channel: autorest_extension_base_1.Channel.Warning,
            Text: "Hello World fakesdk ! The `debug` flag is " + (isDebugFlagSet ? "set" : "not set"),
        });
        autoRestApi.Message({
            Channel: autorest_extension_base_1.Channel.Warning,
            Text: "fakesdk settings " + JSON.stringify(cliCommonSettings)
        });
        autoRestApi.Message({
            Channel: autorest_extension_base_1.Channel.Information,
            Text: "AutoRest offers the following input files: " + inputFileUris.join(", "),
        });
        // emit a file (all input files concatenated)
        autoRestApi.WriteFile("code-model-v4-cli.yaml", inputFiles[inputFileUris.indexOf("code-model-v4-no-tags.yaml")]);
    }
    catch (e) {
        Error(e.message + " -- " + JSON.stringify(e.stack));
    }
}));
extension.Run();
