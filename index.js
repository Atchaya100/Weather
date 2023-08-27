const fetch = require("node-fetch");
const express=require('express')
const app=express();
const cors=require('cors')
const parse=require('body-parser');
app.use(cors());
app.use(express.json());
app.use(parse.urlencoded({extended:true}));
app.post('/getWeather',async (req,res)=>{  
   
    const city1=req.body.cities
   const all=[]
   const cities=[]
   const temp=[]
    async function getData(err) {
        for(i=0;i<city1.length;i++){
        const url = "http://api.weatherstack.com/current?access_key=87bd0f8326e19729e5c69c8314830f9f&query="+city1[i];
        all.push(url)
        
        }
        
        for(i=0;i<all.length;i++){
          const response = await fetch(all[i]);
          const jsonResponse = await response.json();
          if(jsonResponse.request){
          cities.push(jsonResponse.location.name)
          temp.push(jsonResponse.current.temperature+"C")
          }
        
        }
      console.log(cities,temp)
      var a={Weather:{}}
      for(i=0;i<cities.length;i++){
      a.Weather[cities[i]]=temp[i]
      console.log([cities[i]],[temp[i]])
      } 
      if(temp.length==0){
          res.send("error")
      }
      else{
      res.send(a)
      }
     
}
getData();
})


app.listen(process.env.PORT || 8091,()=>{
    console.log("server ported")
});
