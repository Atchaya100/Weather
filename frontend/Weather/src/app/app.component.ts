import { Component } from '@angular/core';
import { WeatherService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather';
  cities!:String;
  weather:any
  error!:String
  constructor(private service:WeatherService){}
   login(formValue:any){
    var b=formValue.cities
    var a=b.split(", ")
    if(a[0].length>10){
      alert("Enter with comma and spaces for multiple cities")
    }
    else{
      this.service.login(a).subscribe(
        (data:any)=>{this.weather=data.Weather,
          console.log(this.weather)
        
        }
        
        
      
      )
    }
   
   
  }
}
