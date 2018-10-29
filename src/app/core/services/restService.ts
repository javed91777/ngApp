import {HttpClient, HttpHeaders} from "@angular/common/http"
import {Injectable} from "@angular/core"


@Injectable()
export class RestService{

    constructor(private http: HttpClient){
    }

    private getURL = "https://reqres.in/api/users?page=2";

    getData(){
        return this.http.get(this.getURL);
    }

}