import {CanActivate} from "@angular/router";
import {Injectable} from "@angular/core"
import {Service} from "./service"


@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private genericService: Service){

    }

    canActivate(){
        console.log("only logged in users");
        // return true;
        if (this.genericService.isLoggedIn()) { 
            return true;
        } else {
            window.alert("You don't have permission to view this page"); 
            return false;
        }
    }
}