import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const API = "http://localhost:3000";


@Injectable({providedIn: 'root'})
export class SignupService{
    constructor(private http: HttpClient){

    }

    checkUserNameTaken(userName: string){
        return this.http.get(API + '/user/exists/' + userName);
    }
}