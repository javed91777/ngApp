import {HttpClient} from "@angular/common/http"
import {Injectable} from "@angular/core"


@Injectable()
export class Service{
    allowLogin:boolean = false;

    constructor(private http: HttpClient){
    }
    getInfo(){
        return this.http.get('./assets/data.json');
    }
    getLoginData(){
        return this.http.get('./assets/loginData.json');
    }
    isLoggedIn(): boolean {
        return this.allowLogin;
    }
}