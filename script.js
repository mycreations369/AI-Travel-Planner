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
itinerary+=`<li>Day ${i}: Arrival at ${destination}, hotel check-in and local sightseeing.</li>`;
}
else if(i===days){
itinerary+=`<li>Day ${i}: Shopping, relaxation and departure.</li>`;
}
else{
itinerary+=`<li>Day ${i}: Explore ${interest} attractions, local culture and famous food spots.</li>`;
}
}

let hotel=Math.round(budget*0.4);
let food=Math.round(budget*0.2);
let travel=Math.round(budget*0.25);
let activities=Math.round(budget*0.15);
let dailyCost=Math.round(budget/days);

document.getElementById("result").innerHTML=`

<div class="card">

<h2>📍 Destination Suggestions</h2>
<ul>
<li>${destination}</li>
<li>Nearby Tourist Attractions</li>
<li>Hidden Gems</li>
<li>Popular Local Experiences</li>
</ul>

<div class="section">
<h2>⭐ Travel Rating</h2>
<p>4.8 / 5 Recommended Destination</p>
</div>

<div class="section">
<h2>🗓 Day-wise Itinerary</h2>
<ul>
${itinerary}
</ul>
</div>

<div class="section">
<h2>💰 Budget Breakdown</h2>
<ul>
<li>Hotel: ₹${hotel}</li>
<li>Food: ₹${food}</li>
<li>Travel: ₹${travel}</li>
<li>Activities: ₹${activities}</li>
<li>Daily Budget: ₹${dailyCost}</li>
<li><strong>Total Budget: ₹${budget}</strong></li>
</ul>
</div>

<div class="section">
<h2>🎒 Packing Checklist</h2>
<ul>
<li>Clothes</li>
<li>Shoes</li>
<li>Power Bank</li>
<li>Mobile Charger</li>
<li>ID Proof</li>
<li>Medicines</li>
<li>Water Bottle</li>
<li>Emergency Contact List</li>
<li>First Aid Kit</li>
<li>Sunglasses</li>
</ul>
</div>

<div class="section">
<h2>🌤 Weather Suggestion</h2>
<p>Check the weather forecast before departure and pack suitable clothing.</p>
</div>

<div class="section">
<h2>📅 Best Time To Visit</h2>
<p>October to March is generally considered a comfortable travel season.</p>
</div>

<div class="section">
<h2>🛡 Safety Tips</h2>
<ul>
<li>Keep emergency contacts saved.</li>
<li>Carry both cash and digital payment options.</li>
<li>Store important documents securely.</li>
<li>Stay aware of local regulations and travel advisories.</li>
</ul>
</div>

<div class="section">
<h2>🤖 AI Travel Analysis</h2>
<ul>
<li>Budget Friendliness: 90%</li>
<li>Adventure Score: 85%</li>
<li>Comfort Score: 92%</li>
<li>Safety Score: 88%</li>
</ul>
</div>

<div class="section">
<h2>✨ Travel Summary</h2>
<p>
Enjoy your ${travelType} trip to <strong>${destination}</strong> with a focus on
<strong>${interest}</strong> experiences.
Have a wonderful journey!
</p>
</div>

</div>
`;
}

function openMap(){

let destination=document.getElementById("destination").value;

if(destination===""){
alert("Enter a destination first");
return;
}

window.open(
`https://www.google.com/maps/search/${destination}`,
"_blank"
);
}

function downloadPlan(){

let content=document.getElementById("result").innerText;

if(content===""){
alert("Generate a plan first");
return;
}

let blob=new Blob([content],{type:"text/plain"});
let link=document.createElement("a");

link.href=URL.createObjectURL(blob);
link.download="Travel_Plan.txt";
link.click();
}
