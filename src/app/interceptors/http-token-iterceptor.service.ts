import {
    HttpInterceptor, HttpRequest,
    HttpEvent, HttpHandler,
    HttpHeaders
}
    from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
    constructor(
        private _router: Router,
        private _activeRoute: ActivatedRoute
    ) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const cu = JSON.parse(sessionStorage.getItem('cu'));
        const token = cu && cu.Token ? cu.Token : '';
        if (token) {
            //req.headers.append('Authorization', `Bearer ${cu.Token}`);
        } else {
            if (!token) {
                this._router.navigate([''], { relativeTo: this._activeRoute })
            }
        }

        return next.handle(req);
    }

}