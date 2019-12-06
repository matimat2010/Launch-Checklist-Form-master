// Write your JavaScript code here!

window.addEventListener("load", function(){
let form = document.querySelector("form");

      form.addEventListener("submit", function(event){
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      let update = '';
      const faultyItems = document.getElementById("faultyItems");
      const  launchStatus = document.getElementById("launchStatus");
      let fuelLevelUpdate = fuelLevel.value;
      let cargoMassUpdate = cargoMass.value;
      


         if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         event.preventDefault();
          } 
          if(isNaN(pilotName.value)=== false || isNaN(copilotName.value)=== false || isNaN(fuelLevel.value)=== true || isNaN(cargoMass.value)=== true ){
         alert("Make sure to enter valid information in each field!");
         console.log(pilotName.value);
         event.preventDefault();
         }


         if(fuelLevel.value < 10000){
          faultyItems.style.visibility = "visible";
          fuelLevelUpdate = "There is not enough fuel for the journey!";
          launchStatus.style.color = "red";
          launchStatus.innerHTML = "Shuttle not ready for launch"
          event.preventDefault();
        }else if(fuelLevel.value >= 10000 ){
         fuelLevelUpdate = "Fuel level high enough for launch";
         event.preventDefault();
        }

           if(cargoMass.value > 10000 ){
          faultyItems.style.visibility = "visible";
          cargoMassUpdate = "There is too much mass for the shuttle to take off!";
          launchStatus.style.color = "red";
          launchStatus.innerHTML = "Shuttle not ready for launch";
          event.preventDefault();
        }else if(cargoMass.value <= 10000){
          cargoMassUpdate = "Cargo mass low enough for launch"
        }


          if (cargoMass.value <= 10000 && cargoMass.value > 0 && fuelLevel.value >= 10000){
          launchStatus.style.color = "green";  
          launchStatus.innerHTML = "Shuttle is ready for launch!";
          event.preventDefault();
                 fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
            response.json().then(function(json){
          const missionTarget = document.getElementById("missionTarget");
            missionTarget.innerHTML = `


<h2>Mission Destination</h2>
<ol>
   <li>Name: ${json[0].name}</li>
   <li>Diameter: ${json[0].diameter}</li>
   <li>Star: ${json[0].star}</li>
   <li>Distance from Earth: ${json[0].distance}</li>
   <li>Number of Moons: ${json[0].moons}</li>
</ol>
<img src="${json[0].image}">



            `;  
            })
          })
                 } 

         update += `
              
                <ol>
                    <li id="pilotStatus">Pilot ${pilotName.value} is ready for launch</li>
                    <li id="copilotStatus">Co-pilot ${copilotName.value} is ready for launch</li>
                    <li id="fuelStatus">${fuelLevelUpdate}</li>
                    <li id="cargoStatus">${cargoMassUpdate}</li>
                </ol>
              
         `;
      faultyItems.innerHTML = update;
      event.preventDefault();    

        
     
      
         
  
           
   });

});



