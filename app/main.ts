///<reference path="../typings/globals/core-js/index.d.ts"/>
///<reference path="../typings/globals/node/index.d.ts"/>
//import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
//import { AppModule } from "./app.module";
import { platformBrowser } from "@angular/platform-browser";
import { AppModuleNgFactory } from "../aot/app/app.module.ngfactory";
import { enableProdMode } from "@angular/core";
enableProdMode();
//platformBrowserDynamic().bootstrapModule(AppModule);
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);