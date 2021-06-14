import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { LifeCycles, registerApplication, start } from "single-spa";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


// Simple usage
registerApplication(
  'app1',
  () => import('../../app-angular/src/main.single-spa'),
  (location) => location.pathname.startsWith('/app1'),
  { some: 'value' }
);
  /*
  registerApplication({
    name: "app-react",
    app: (): Promise<LifeCycles> => (window as any).System.import("@single-spa-test/app-react"),
    activeWhen: "/react"
  });
  
  */
  start();