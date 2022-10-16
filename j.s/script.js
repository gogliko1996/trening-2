let main = document.getElementById("main");
let div = document.getElementById("post");
let clearX = document.getElementById("clearx");
let p = document.createElement("p");
let form = document.getElementById("form");
let valuetext = document.getElementById("valuetext");

function getserver(url, serverfor) {
  let server = new XMLHttpRequest();
  server.open("GET", url);
  server.send();
  server.addEventListener("load", function () {
    let serverjson = JSON.parse(this.responseText);
    serverfor(serverjson);
  });
}

getserver("https://jsonplaceholder.typicode.com/posts/", function (serverjson) {
  serverjson.forEach((element) => {
    seivserver(element);
  });
});

function seivserver(element) {
  let divbox = document.createElement("div");
  divbox.setAttribute("class", "stl");
  divbox.setAttribute("data-id", element.id);

  let h2 = document.createElement("h2");
  h2.innerHTML = element.title;

  let h3 = document.createElement("h3");
  h3.innerText = element.id;

  let deletePost = document.createElement("button");
  deletePost.innerHTML = "delete";
  deletePost.setAttribute("data-id", element.id);

  divbox.innerHTML = `<i class="fa-solid fa-arrow-right" id="${element.id}"></i>`;
  divbox.appendChild(deletePost);
  divbox.appendChild(h2);
  divbox.appendChild(h3);
  main.appendChild(divbox);

  document.getElementById(element.id).addEventListener("click", function () {
      div.style.display = "block";
      let url = `https://jsonplaceholder.typicode.com/posts/${element.id}`;
      getserver(url, function (element) {
        p.innerText = element.body;
        div.appendChild(p);
      });
    });

  deletePost.addEventListener("click", function () {
    fetch (`https://jsonplaceholder.typicode.com/posts/${element.id}`,{
      method:"DELETE",
    })
    divbox.remove();
  });
}

document.getElementById("clearx").addEventListener("click", function () {
  div.style.display = "none";
  p.innerHTML = "";
});

document.getElementById("add").addEventListener ("click", function (){
  form.style.display = "block";
  document.getElementById("add").style.display = "none";
  document.getElementById("valuetext").value= "";

})

form.addEventListener ("submit", function (serveradd){
  serveradd.preventDefault();
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      "title": serveradd.target[0].value
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      seivserver(json)
      form.style.display = "none";
      document.getElementById("add").style.display = "block";
    });
})
