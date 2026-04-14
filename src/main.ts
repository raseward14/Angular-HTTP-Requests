import { bootstrapApplication } from '@angular/platform-browser';
import {
    HTTP_INTERCEPTORS,
    HttpHandlerFn,
    HttpRequest,
    provideHttpClient,
    withInterceptors,
    withInterceptorsFromDi
} from '@angular/common/http';

import { AppComponent } from './app/app.component';

import { LoggingInterceptor } from './loggingInterceptor';

// function loggingInterceptor(
//     request: HttpRequest<unknown>,
//     next: HttpHandlerFn
// ) {
//     // const req = request.clone({
//     //     headers: request.headers.set('X-DEBUG', 'TESTING')
//     // });
//     console.log('[Outgoing Request]');
//     console.log(request);
//     return next(request);
// }

bootstrapApplication(AppComponent, {
    // providers: [provideHttpClient(
    //     withInterceptors([
    //         loggingInterceptor
    //     ])
    // )]
    providers: [provideHttpClient(
        withInterceptorsFromDi()
    ),
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }
    ]
}).catch((err) => console.error(err));
