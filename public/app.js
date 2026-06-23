const $=s=>document.querySelector(s);const $$=s=>document.querySelectorAll(s);
const jobs=[
 ['Garage Door Repair','Sarah Johnson','Plano, TX 75023','New Lead','$250 - $350','Today, 2:00 PM','Door off track and making loud noise'],
 ['Broken Spring Replacement','David Wilson','Hicksville, NY','New Lead','$180 - $320','Today, 3:30 PM','Double spring replacement request'],
 ['Opener Installation','Lisa Taylor','Plainview, NY','Dispatched','$400 - $600','Today, 11:00 AM','New opener install and programming'],
 ['Cable Replacement','Robert Martinez','Lewisville, TX','On The Way','$150 - $250','ETA 12 min','Cable snapped on single car door'],
 ['Emergency Repair','Kevin Thompson','Frisco, TX','On Site','$300 - $500','Started 9:05 AM','Door stuck open, urgent service'],
 ['Invoice Review','Amanda White','Allen, TX','Awaiting Payment','$220','Invoice Uploaded','Tech uploaded invoice and after photos'],
 ['Tune Up Completed','Chris Davis','Richardson, TX','Completed','$160','Paid','Maintenance completed and review requested']
];
const statuses=['New Lead','Dispatched','On The Way','On Site','Awaiting Payment','Completed'];
const techs=[
 ['Prime Garage Door Pros','Mike Johnson','Philadelphia, PA','4.9','124 jobs','12 min','Emergency','Garage Doors, Gates, Openers'],
 ['Tri-State Overhead Network','Tom Williams','Cherry Hill, NJ','4.8','98 jobs','18 min','Subcontractor','Garage Doors, Commercial Doors'],
 ['Door Masters LLC','Jason Brown','Trenton, NJ','4.7','76 jobs','25 min','Installer','Installations, Openers, Springs'],
 ['Fast Fix Garage Doors','Chris Davis','Wilmington, DE','4.6','88 jobs','30 min','Available','Repair, Tune-ups, Cables']
];
function toast(t){const el=$('#toast');el.textContent=t;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),2200)}
function switchView(id){$$('.view').forEach(v=>v.classList.remove('active'));$('#'+id)?.classList.add('active');$$('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===id));$('#sideNav')?.classList.remove('open');window.scrollTo({top:0,behavior:'smooth'});}
$$('[data-view]').forEach(b=>b.addEventListener('click',()=>switchView(b.dataset.view)));
$('#mobileMenu')?.addEventListener('click',()=>$('#sideNav').classList.toggle('open'));
function renderOpportunities(){
 $('#opportunityCards').innerHTML=[
  ['Garage Door Repair','Jericho, NY','Prime Leads Network','$250 - $500','Posted 12 min ago'],
  ['Spring Replacement','Garden City, NY','Local Publisher Pro','$180 - $350','Posted 30 min ago'],
  ['Opener Installation','Philadelphia, PA','Tri-State Lead Hub','$400 - $650','Posted 1 hour ago']
 ].map(g=>`<article class="gigCard"><div class="gigImg"><div class="gigIcon">FF</div><h3>${g[0]}</h3><p>Verified field opportunity</p></div><div class="gigBody"><div class="rating"><span class="stars">★★★★★</span> 4.9</div><p><b>${g[1]}</b><br>${g[2]}</p><div class="priceLine"><span>${g[4]}</span><b>${g[3]}</b></div><button class="primary" onclick="toast('Opportunity opened')">View Details</button></div></article>`).join('');
}
function renderPros(){
 $('#proList').innerHTML=techs.map(t=>`<div class="proItem"><div class="avatar">${t[1].split(' ').map(x=>x[0]).join('')}</div><div><b>${t[0]}</b><small>${t[1]} • ${t[2]} • Rating ${t[3]} • ${t[4]}</small></div><button class="ghost" onclick="switchView('profile')">View</button></div>`).join('');
}
function renderActivity(){
 $('#activityFeed').innerHTML=['Mike accepted a lead in Philadelphia|2 min ago','Invoice uploaded for Plano repair|11 min ago','Publisher posted emergency spring job|18 min ago','Tom marked arrived on site|32 min ago','Payment released to Chris Davis|1 hour ago'].map(x=>{const a=x.split('|');return `<div class="activityItem"><span class="activityDot paid"></span><div><b>${a[0]}</b><small>${a[1]}</small></div></div>`}).join('');
}
const trustData={
 availability:`<div class="trustBody"><h2>Available Now</h2><div class="trustMetric"><span>Status</span><b>Online</b></div><div class="trustMetric"><span>Emergency service</span><b>Yes</b></div><div class="trustMetric"><span>Avg response</span><b>12 min</b></div><div class="trustMetric"><span>Next opening</span><b>Today 2:00 PM</b></div><div class="trustActions"><button class="primary" onclick="toast('Opportunity sent to Mike')">Send Opportunity</button><button class="ghost" onclick="toast('Message opened')">Contact me</button></div></div>`,
 performance:`<div class="trustBody"><h2>Performance</h2><div class="trustMetric"><span>Completed jobs</span><b>124</b></div><div class="trustMetric"><span>Rating</span><b>4.9 / 5</b></div><div class="trustMetric"><span>Acceptance rate</span><b>98%</b></div><div class="trustMetric"><span>Completion rate</span><b>100%</b></div><div class="trustMetric"><span>On-time arrival</span><b>97%</b></div><div class="trustActions"><button class="primary" onclick="toast('Saved to network')">Add to Network</button></div></div>`,
 coverage:`<div class="trustBody"><h2>Coverage</h2><div class="trustMetric"><span>Base area</span><b>Philadelphia, PA</b></div><div class="trustMetric"><span>Radius</span><b>50 miles</b></div><div class="trustMetric"><span>ZIPs</span><b>19116, 19115, 19020</b></div><div class="trustMetric"><span>Services</span><b>Garage Doors, Gates</b></div><div class="trustActions"><button class="primary" onclick="toast('Coverage map opened')">View Coverage</button></div></div>`
};
function renderTrust(tab='availability'){$('#trustContent').innerHTML=trustData[tab];$$('.trustTabs button').forEach(b=>b.classList.toggle('active',b.dataset.tab===tab));}
$$('.trustTabs button').forEach(b=>b.addEventListener('click',()=>renderTrust(b.dataset.tab)));
function renderTechCards(){
 $('#techCards').innerHTML=techs.map(t=>`<article class="techCard"><h3>${t[0]}</h3><p class="muted">${t[1]} • ${t[2]}</p><div class="badgeRow"><span>Rating ${t[3]}</span><span>${t[4]}</span><span>${t[5]}</span><span>${t[6]}</span></div><p><b>Categories:</b> ${t[7]}<br><b>ZIPs:</b> 19116, 19115, 19020, 19053</p><button class="primary" onclick="toast('Partial lead sent to ${t[0]}')">Send Lead</button> <button class="ghost" onclick="switchView('profile')">View Profile</button></article>`).join('');
}
function renderFieldJobs(){
 $('#fieldJobs').innerHTML=jobs.slice(0,4).map((j,i)=>`<div class="fieldJob"><span class="status ${i===0?'paid':''}">${j[3]}</span><div><b>${j[0]}</b><small>${j[2]} • ${j[5]}</small></div><button class="ghost" onclick="toast('Job details opened')">Open</button></div>`).join('');
}
function renderJobsAccordion(){
 $('#jobsAccordion').innerHTML=statuses.map((st,idx)=>{const list=jobs.filter(j=>j[3]===st);return `<details class="jobSection" ${idx===0?'open':''}><summary><span><b>${st}</b><small>${list.length} sample jobs in this status</small></span><em>${list.length}</em></summary><div class="jobRows">${list.length?list.map(j=>`<div class="jobRow"><div><b>${j[0]}</b><small>${j[1]} • ${j[2]} • ${j[5]} • ${j[4]}</small><p class="muted">${j[6]}</p></div><button onclick="toast('Full job card opened')">View Details</button></div>`).join(''):'<p class="muted">No jobs in this status yet.</p>'}</div></details>`}).join('');
}
function renderNetwork(){
 $('#networkPosts').innerHTML=[
  ['Tech Looking for Work','Senior garage door installer available','Philadelphia, PA · Subcontractor','10 years experience, truck/tools, available for steady company partnerships.'],
  ['Company Hiring','Need 2 techs for Long Island','Long Island, NY · Employee or 1099','Garage door company looking for experienced techs to work only with us.'],
  ['Publisher Seeking Crew','Exclusive area partnership available','New Jersey · Garage Doors','Steady leads available for verified crews with fast response time.'],
  ['Weekend Coverage','Emergency subcontractor needed','Dallas, TX · Weekends','Looking for reliable weekend coverage with invoice/photo uploads.']
 ].map(p=>`<article class="networkPost"><span class="postTag">${p[0]}</span><div><h3>${p[1]}</h3><p><b>${p[2]}</b></p><p class="muted">${p[3]}</p><button class="ghost" onclick="toast('Post opened')">View Details</button></div></article>`).join('');
}
function renderPayouts(){
 $('#payoutTable').innerHTML='<tr><th>Tech Name</th><th>Job Count</th><th>Total Revenue</th><th>Fee Due</th><th>Payment Status</th></tr>'+[
  ['Mike Johnson','7','$1,850','$740','Paid'],['Chris Williams','6','$1,650','$660','Pending'],['Kevin Thompson','5','$1,200','$480','Pending'],['Tom Davis','4','$900','$360','Paid']
 ].map(r=>`<tr><td><b>${r[0]}</b></td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td><span class="status ${r[4]==='Paid'?'paid':'pending'}">${r[4]}</span></td></tr>`).join('');
}
$('#sendBroadcast')?.addEventListener('click',()=>{$('#broadcastResult').innerHTML='<div class="success">Lead sent to 5 matching technicians. 2 accepted. Approve one to reveal full customer info.</div>';toast('Broadcast sent securely')});
$('#addLead')?.addEventListener('click',()=>toast('New lead form opened'));
renderOpportunities();renderPros();renderActivity();renderTrust();renderTechCards();renderFieldJobs();renderJobsAccordion();renderNetwork();renderPayouts();

document.addEventListener('DOMContentLoaded',()=>{
 const c=document.querySelector('#publisher .techList');
 if(c){c.innerHTML=techs.map(t=>`<div class="techCard"><div class="techAvatar"></div><div class="techBody"><h3>${t[0]}</h3><div>${t[1]} • ${t[2]}</div><div class="badges"><span class="rating">★ ${t[3]}</span><span class="jobs">${t[4]}</span><span class="time">${t[5]}</span><span class="emergency">${t[6]}</span></div><p><b>Categories:</b> ${t[7]}</p></div><button class="sendBtn">Send Latest Lead</button></div>`).join('')}
});
