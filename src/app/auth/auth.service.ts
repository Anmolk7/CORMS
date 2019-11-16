import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from './auth-data.model';
import { Subject, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: "root" })
export class AuthService {
    private isAuthenticated = false;
    private token: string;
    private authStatusListener = new Subject<boolean>();
    private tokenTime: any;
    private userId: string;
    private username: string;
   

    constructor(private http: HttpClient, public router: Router) { }

    getToken() {
        return this.token;
    }

    getUserId(){
        return this.userId;
    }
    getUsername(){
        return this.username;
    }

    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }

    getIsAuth() {
        return this.isAuthenticated;
    }

    createUser(email: string, password: string) {
        const authData: AuthData = { email: email, password: password };
        this.http.post("http://localhost:3000/api/user/signup", authData).subscribe(() => {
            this.router.navigate(['/']); 
        },error=>{
            this.authStatusListener.next(false);
            
        }
        )

    }
    login(email: string, password: string) {
        const authData: AuthData = { email: email, password: password };
        this.http.post<{ token: string, expiresIn: number,userId:string, username:string }>("http://localhost:3000/api/user/login", authData).subscribe(response => {
            const token = response.token;
            this.token = token;
 
            if (token) {
                const expireDuration = response.expiresIn;
                console.log(expireDuration);
                this.setAuthTime(expireDuration);
                this.isAuthenticated = true;
                this.userId=response.userId;
                this.username=response.username;
                this.authStatusListener.next(true);
                const now = new Date();
                const expirationDate = new Date(now.getTime() + expireDuration * 1000)
                this.authSave(token, expirationDate,this.userId, this.username)
                console.log(expirationDate);
                this.router.navigate(['/'])
                console.log(token);
            }
        }, error =>{
            this.authStatusListener.next(false);
        })
       
        
    }
    logout() {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        this.authClear();
        clearTimeout(this.tokenTime);
        this.router.navigate(['/']);
        this.userId=null;
        this.username=null;
    }

    autoAuthUser() {
        const authInformation = this.getAuthData();
        if (!authInformation) {
            return;
        }
        const now = new Date();
        const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
        if (expiresIn > 0) {
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.userId=authInformation.userId;
            this.username=authInformation.username;
            console.log("UserID: "+this.userId)
            this.setAuthTime(expiresIn / 1000);
            this.authStatusListener.next(true);
        }
    }

    private setAuthTime(duration: number) {
        console.log("setting duration " + duration);
        this.tokenTime = setTimeout(() => { this.logout(); }, duration * 1000)
    }
    private authSave(token: string, expireDate: Date, userId:string, username:string) {
        localStorage.setItem('token', token);
        localStorage.setItem('expiration', expireDate.toISOString());
        localStorage.setItem('userId',userId);
        localStorage.setItem('username',username)
    }

    private authClear() {
        localStorage.removeItem("token");
        localStorage.removeItem("expiration");
        localStorage.removeItem("username");
    }
    private getAuthData() {
        const token = localStorage.getItem("token");
        const expirationDate = localStorage.getItem("expiration");
        const userId= localStorage.getItem("userId");
        const username=localStorage.getItem("username");
        if (!token || !expirationDate) {
            return;
        }
        return {
            token: token,
            expirationDate: new Date(expirationDate),
            userId:userId,
            username:username
        }
    }
}