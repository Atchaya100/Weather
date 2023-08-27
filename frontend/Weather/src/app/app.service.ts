import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn:'root'
})
export class WeatherService{
 private loginUrl="http://localhost:8091";
 private httpOptions={
 
     headers: new HttpHeaders({
        
         'Content-Type':'application/json'
     })
 }


constructor(private _http: HttpClient){}
login(cities:[]){

    const l=`${this.loginUrl}/getWeather`;
    let p={
        cities:cities
    }
    console.log(p,"h")
    return this._http.post(l,p,this.httpOptions);
    
   
}
}