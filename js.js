const APIkey='6768921efecd1aa7144a00947b38c9fb'

const loadTemparature=city=>{
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`
      fetch(url)
      .then(res=>res.json())
      .then(data=>displayTemparature(data))
}

const displayTemparature=data=>{
//      const temparature=document.getElementById("temparature");
      settimebyid('temparature',data.main.temp)
      // temparature.innerText=data.main.temp;
      // console.log(data.weather[0].main);
      settimebyid("condition",data.weather[0].main)
}

const settimebyid=(id,text)=>{
      const inputfield=document.getElementById(id);
      inputfield.innerText=text;
}
 document.getElementById("btn-search").addEventListener("click",function (){
      let inputfieldddd=document.getElementById("input-field");
      const city=inputfieldddd.value;
      const namee=document.getElementById("city");
      namee.innerText=city;
      // console.log(city)
      loadTemparature(city);
 })
// dhaka
// new yourk