function generatePlan(){

let destination=document.getElementById("destination").value;
let days=parseInt(document.getElementById("days").value);
let budget=parseInt(document.getElementById("budget").value);
let travelType=document.getElementById("travelType").value;
let interest=document.getElementById("interest").value;

if(destination==="" || isNaN(days) || isNaN(budget)){
alert("Please fill all fields");
return;
}

let itinerary="";

for(let i=1;i<=days;i++){

if(i===1){
itinerary+=`<li>Day ${i}: Arrival at ${destination} and local sightseeing.</li>`;
}
else if(i===days){
itinerary+=`<li>Day ${i}: Shopping and departure.</li>`;
}
else{
itinerary+=`<li>Day ${i}: Explore ${interest} attractions and enjoy local experiences.</li>`;
}
}

let hotel=Math.round(budget*0.4);
let food=Math.round(budget*0.2);
let travel=Math.round(budget*0.25);
let activities=Math.round(budget*0.15);

document.getElementById("result").innerHTML=`

<div class="card">

<h2>📍 Destination Suggestions</h2>
<ul>
<li>${destination}</li>
<li>Nearby Tourist Spots</li>
<li>Hidden Gems</li>
</ul>

<div class="section">
<h2>🗓 Day-wise Itinerary</h2>
<ul>
${itinerary}
</ul>
</div>

<div class="section">
<h2>💰 Budget Estimate</h2>
<ul>
<li>Hotel: ₹${hotel}</li>
<li>Food: ₹${food}</li>
<li>Travel: ₹${travel}</li>
<li>Activities: ₹${activities}</li>
<li><strong>Total: ₹${budget}</strong></li>
</ul>
</div>

<div class="section">
<h2>🎒 Packing Checklist</h2>
<ul>
<li>Clothes</li>
<li>Power Bank</li>
<li>Charger</li>
<li>ID Card</li>
<li>Medicines</li>
<li>Sunglasses</li>
<li>Water Bottle</li>
</ul>
</div>

<div class="section">
<h2>🌤 Weather Suggestion</h2>
<p>Check local weather forecast before departure.</p>
</div>

<div class="section">
<h2>🛡 Safety Tips</h2>
<ul>
<li>Keep emergency contacts saved.</li>
<li>Carry cash and digital payment options.</li>
<li>Keep documents safe.</li>
<li>Stay aware of local rules.</li>
</ul>
</div>

<div class="section">
<h2>✨ Travel Summary</h2>
<p>Enjoy your ${travelType} trip to ${destination} focused on ${interest} experiences.</p>
</div>

</div>
`;
}

function downloadPlan(){

let content=document.getElementById("result").innerText;

if(content===""){
alert("Generate a travel plan first!");
return;
}

let blob=new Blob([content],{type:"text/plain"});
let link=document.createElement("a");

link.href=URL.createObjectURL(blob);
link.download="Travel_Plan.txt";

link.click();
}
