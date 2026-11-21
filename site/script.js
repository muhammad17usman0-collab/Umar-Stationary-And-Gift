const NUM="923269827332";
const P=[
 [
  "Rose Gold Pearl Crown Set",
  "sets",
  "images/product-01.jpg"
 ],
 [
  "Silver Butterfly Set",
  "sets",
  "images/product-02.jpg"
 ],
 [
  "Silver Black Stone Set",
  "sets",
  "images/product-03.jpg"
 ],
 [
  "Lilac Bloom Silver Set",
  "sets",
  "images/product-04.jpg"
 ],
 [
  "Rose Gold Green Jewel Set",
  "sets",
  "images/product-05.jpg"
 ],
 [
  "Silver Black Heart Set",
  "sets",
  "images/product-06.jpg"
 ],
 [
  "Rose Gold Antique Set",
  "sets",
  "images/product-07.jpg"
 ],
 [
  "Gold Pearl Star Set",
  "sets",
  "images/product-08.jpg"
 ],
 [
  "Rose Gold Pearl Bow Set",
  "sets",
  "images/product-09.jpg"
 ],
 [
  "Gold Heart Pearl Set",
  "sets",
  "images/product-10.jpg"
 ],
 [
  "Ruby Red Mesh Set",
  "sets",
  "images/product-11.jpg"
 ],
 [
  "Pink Dial Butterfly Set",
  "sets",
  "images/product-12.jpg"
 ],
 [
  "Gold Ruby Flower Set",
  "sets",
  "images/product-13.jpg"
 ],
 [
  "Turquoise Butterfly Set",
  "sets",
  "images/product-14.jpg"
 ],
 [
  "Gold Crystal Sun Set",
  "sets",
  "images/product-15.jpg"
 ],
 [
  "Champagne Rose Gold Set",
  "sets",
  "images/product-16.jpg"
 ],
 [
  "Silver Ruby Square Set",
  "sets",
  "images/product-17.jpg"
 ],
 [
  "Gold Sapphire Dial Set",
  "sets",
  "images/product-18.jpg"
 ],
 [
  "Rose Gold Ruby Round Set",
  "sets",
  "images/product-19.jpg"
 ],
 [
  "Gold Ruby Square Dial Set",
  "sets",
  "images/product-20.jpg"
 ],
 [
  "Gold Black Circle Set",
  "sets",
  "images/product-21.jpg"
 ],
 [
  "Rose Gold Pink Stone Set",
  "sets",
  "images/product-22.jpg"
 ],
 [
  "Pink Clover Set",
  "sets",
  "images/product-23.jpg"
 ],
 [
  "Emerald Green Set",
  "sets",
  "images/product-24.jpg"
 ],
 [
  "Butterfly Heart Set",
  "sets",
  "images/product-25.jpg"
 ],
 [
  "Silver Starfish Set",
  "sets",
  "images/product-26.jpg"
 ],
 [
  "Pink Flower Star Set",
  "sets",
  "images/product-27.jpg"
 ],
 [
  "Rose Gold Coin Pendant Set",
  "sets",
  "images/product-28.jpg"
 ],
 [
  "Green Box Clover Set",
  "sets",
  "images/product-29.jpg"
 ],
 [
  "Red Clover Set",
  "sets",
  "images/product-30.jpg"
 ],
 [
  "Black Clover Gold Set",
  "sets",
  "images/product-31.jpg"
 ],
 [
  "Purple Star Set",
  "sets",
  "images/product-32.jpg"
 ],
 [
  "Travel Jewellery Box Set",
  "sets",
  "images/product-33.jpg"
 ],
 [
  "Pink Pendant Gift Set",
  "sets",
  "images/product-34.jpg"
 ],
 [
  "Clover Bracelet & Watch",
  "sets",
  "images/product-35.jpg"
 ],
 [
  "Rose Gold Coin Set",
  "sets",
  "images/product-36.jpg"
 ],
 [
  "Diamond-Cut Golden Bangles",
  "bangles",
  "images/product-37.jpg"
 ],
 [
  "Engraved Golden Bangles",
  "bangles",
  "images/product-38.jpg"
 ],
 [
  "Enamel Detail Bangles",
  "bangles",
  "images/product-39.jpg"
 ],
 [
  "Slim Textured Bangles",
  "bangles",
  "images/product-40.jpg"
 ],
 [
  "Filigree Golden Bangles",
  "bangles",
  "images/product-41.jpg"
 ],
 [
  "ANC/ENC Touch-Screen Earbuds",
  "tech",
  "images/product-42.jpg"
 ],
 [
  "Digital Display Clear Earbuds",
  "tech",
  "images/product-43.jpg"
 ],
 [
  "Men’s Gift Box: Wallet, Perfume & Pen",
  "men",
  "images/product-44.jpg"
 ]
];
const CATS=[["all","All"],["sets","Watch & jewellery sets"],["bangles","Golden bangles"],["tech","Earbuds"],["men","Men’s gifts"]];
const wa=t=>"https://wa.me/"+NUM+"?text="+encodeURIComponent(t);
document.querySelectorAll("[data-wa]").forEach(a=>a.href=wa("Assalam o Alaikum! Umar Stationary And Gifts ki website se message kar raha/rahi hoon."));
const col=document.getElementById("collage");
[[0,"a"],[1,"b"],[37,"c"]].forEach(([i,c])=>{const im=new Image();im.src=P[i][2];im.alt=P[i][0];im.className=c;col.appendChild(im)});
const grid=document.getElementById("grid"),tabs=document.getElementById("tabs");
function render(f){grid.innerHTML="";P.filter(p=>f=="all"||p[1]==f).forEach(p=>{
const c=document.createElement("article");c.className="card";
c.innerHTML='<img loading="lazy" alt=""><div><h3></h3><a class="btn" target="_blank" rel="noopener">Order on WhatsApp</a></div>';
c.querySelector("img").src=p[2];c.querySelector("img").alt=p[0];c.querySelector("h3").textContent=p[0];
c.querySelector("a").href=wa("Assalam o Alaikum! Mujhe is item ki price aur details chahiye: "+p[0]);grid.appendChild(c)})}
CATS.forEach(([k,l],i)=>{const b=document.createElement("button");b.className="tab";b.textContent=l;b.setAttribute("aria-pressed",i==0);
b.onclick=()=>{tabs.querySelectorAll(".tab").forEach(x=>x.setAttribute("aria-pressed","false"));b.setAttribute("aria-pressed","true");render(k)};tabs.appendChild(b)});
render("all");
