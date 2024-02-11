import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { defineCustomElements as jeepSqlite} from 'jeep-sqlite/loader';

import { AppModule } from './app/app.module';
import {Capacitor} from "@capacitor/core";

const platform = Capacitor.getPlatform();
if(platform === "web") {
  jeepSqlite(window);

  window.addEventListener('DOMContentLoaded', async () => {
    const jeepEl = document.createElement('jeep-sqlite');
    document.body.appendChild(jeepEl);
    jeepEl.autoSave = true;
  })
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
