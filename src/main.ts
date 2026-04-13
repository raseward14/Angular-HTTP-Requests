import { bootstrapApplication } from '@angular/platform-browser';
import { HttpHandlerFn, HttpRequest, provideHttpClient, withInterceptors } from '@angular/common/http';

import { AppComponent } from './app/app.component';

function loggingInterceptor(request: HttpRequest, next: HttpHandlerFn) {

}

bootstrapApplication(AppComponent, {
    providers: [provideHttpClient(
        withInterceptors([])
    )]
}).catch((err) => console.error(err));
