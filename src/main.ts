import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { AppComponent } from './app/app.component';

function loggingInterceptor() {

}

bootstrapApplication(AppComponent, {
    providers: [provideHttpClient(
        withInterceptors([])
    )]
}).catch((err) => console.error(err));
