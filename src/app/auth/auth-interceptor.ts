import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private authService: AuthService){}
    intercept(req:HttpRequest<any>, next:HttpHandler){ //Augular calls this method for any HttpRequests leaving this app.
       const authToken= this.authService.getToken();
        const authRequest=req.clone({
            headers:req.headers.set('Authorization', "Bearer "+authToken) //setting the auth header on the frontend
        })
       return next.handle(authRequest); // manipulating incoming requests and adding authorization token on header on the request
    }
}