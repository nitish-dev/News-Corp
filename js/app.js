const container = document.querySelector("#collections");

//fetch data
function fetchData() {
  fetch("data/data.json")
    .then(response => {
      return response.json();
    })
    .then(data => {
      getCollection(data.collection);
    })
    .catch(err => {
      console.log(err);
    });
}
//collection
function getCollection(data) {
  const row = document.createElement("div");
  row.classList = "leftbox";
  data.forEach(res => {
    getData(res, row);
    container.appendChild(row);
  });
  staticHtml(row);
}

//collection data
function getData(data, row) {
  const collection = document.createElement("div");
  collection.classList = "collection-box";
  data.articles.forEach(el => {
    renderHtml(el, collection);
    row.appendChild(collection);
  });
}

//html
function renderHtml(data, target) {
  const box = document.createElement("div");
  box.classList = "data-col";
  const { Title, Imageurl, Intro, Published, Comment, Tag } = data;
  if (Intro) {
    box.innerHTML = `
    
    <div class="inside-con">
      <a href="">
        <img src="${Imageurl}" alt="" class="hero-img" />
      </a>
      <h2>${Title}</h2>
      <p>
       <span class="red">${Tag}</span> ${Intro}
      </p>
      <div class="info">
        <span class="time"><i class="fa fa-clock-o"></i> ${Published}</span>
        <span class="comment"><i class="fa fa-comment"></i> ${Comment}</span>
      </div>
      
      </div>
  
    `;
  } else {
    box.innerHTML = `
    
    <div class="inside-con">
    <ul>
    <li>
      <a href="">
        <span class="text"
          >${Title}</span
        >
        <span class="img"
          ><img src="${Imageurl}" alt="" class="hero-img"
        /></span>
      </a>
      <div class="info">
        <span class="time"><i class="fa fa-clock-o"></i> ${Published}</span>
        
      </div>
    </li>
   
  </ul>
      
      </div>
  
    `;
  }
  target.appendChild(box);
}
function staticHtml(row) {
  const header = document.createElement("div");
  header.classList = "head-top";
  header.innerHTML = `<img src="images/head.jpg" />`;
  const rightbox = document.createElement("div");
  rightbox.classList = "rightbox";
  rightbox.innerHTML = `<img src="images/right.jpg" /> <img src="images/sec.jpg" />`;
  row.prepend(header);
  container.appendChild(rightbox);
}
fetchData();

window.onload = function(e) {
  staticHtml();
};
