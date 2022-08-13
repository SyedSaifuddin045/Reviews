// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const image=document.getElementById("person-img");
const author=document.getElementById("author");
const job=document.getElementById("job");
const info=document.getElementById("info");

const nextbutton=document.querySelector(".next-btn");
const previousbutton=document.querySelector(".prev-btn");
const randombutton=document.querySelector(".random-btn");

let currentitem=0;

function setReview(currentitem)
{
  image.src=reviews[currentitem].img;
  author.innerText=reviews[currentitem].name;
  job.innerHTML=reviews[currentitem].job;
  info.innerText=reviews[currentitem].text;
}
document.onload=setReview(currentitem);
nextbutton.addEventListener("click",()=>
{
if(currentitem<reviews.length-1)
{currentitem++;}
else{
  currentitem=0;
}
//console.log(currentitem);
setReview(currentitem)
}
);
previousbutton.addEventListener("click",()=>{
  if(currentitem<=0)
  {
    currentitem=reviews.length-1;
  }
  else{
    currentitem--;
  }
  setReview(currentitem);
});
randombutton.addEventListener("click",()=>{
  let p=currentitem;
  do{currentitem=Math.floor(Math.random()*reviews.length);}
  while(currentitem==p);
  //console.log(currentitem);
  setReview(currentitem);
});