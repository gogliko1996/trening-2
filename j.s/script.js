let main = document.getElementById("main");
let div = document.getElementById("post");
let clearX = document.getElementById("clearx");
let p_getpost = document.createElement("p");

function getserver (){
let server = new XMLHttpRequest ();
server.addEventListener ("load", function (){
  let serverjson = JSON.parse (this.responseText);

  serverjson.forEach((element) => {
    let divbox = document.createElement("div");
    divbox.setAttribute ("class", "stl");
    divbox.setAttribute ("data-id",element.id);

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

    document.getElementById(element.id).addEventListener("click", function (ivent){
      div.style.display = "block";
      if (element.id == ivent.target.id ){
        let body = serverjson[element.id-1].body;
        p_getpost.innerText = body;
        div.appendChild(p_getpost);
      }
    })

    deletePost.addEventListener ("click", function (){
      divbox.remove();
    })

    clearX.addEventListener("click", function (){
      div.style.display = "none";
      p_getpost.remove();
    })
  });
});
server.open("GET", "https://jsonplaceholder.typicode.com/posts/");
server.send();

}
getserver ()





// let main = document.getElementById("main");
// let div = document.getElementById("post");
// let clearX = document.getElementById("clearx");
// let p_getpost = document.createElement("p");

// function getserver (){
// let server = new XMLHttpRequest ();
// server.addEventListener ("load", function (){
//   let serverjson = JSON.parse (this.responseText);

//   serverjson.forEach((element) => {
//     let divbox = document.createElement("div");
//     divbox.setAttribute ("class", "stl");
//     divbox.setAttribute ("data-id",element.id);

//     let h2 = document.createElement("h2");
//     h2.innerHTML = element.title;

//     let h3 = document.createElement("h3");
//     h3.innerText = element.id;

//     let deletePost = document.createElement("button");
//     deletePost.innerHTML = "delete";
//     deletePost.setAttribute("data-id", element.id);

//     divbox.innerHTML = `<i class="fa-solid fa-arrow-right" id="${element.id}"></i>`;
//     divbox.appendChild(deletePost);
//     divbox.appendChild(h2);
//     divbox.appendChild(h3);
//     main.appendChild(divbox);

//     document.getElementById(element.id).addEventListener("click", function (){
//       div.style.display = "block";
//         let body = serverjson[element.id-1].body;
//         p_getpost.innerText = body;
//         div.appendChild(p_getpost);
//     })

//     deletePost.addEventListener ("click", function (){
//       divbox.remove();
//     })

//     clearX.addEventListener("click", function (){
//       div.style.display = "none";
//       p_getpost.remove();
//     })
//   });
// });
// server.open("GET", "https://jsonplaceholder.typicode.com/posts/");
// server.send();

// }
// getserver ()




// let main = document.getElementById("main");
// let div = document.getElementById("post");
// let clearX = document.getElementById("clearx");
// let p_getpost = document.createElement("p");

// function getserver() {
//   fetch("https://jsonplaceholder.typicode.com/posts/", {
//     method: "GET",
   
//   })
//     .then(function (server) {
//       console.log(server);
//       if (server.status !== 200) {
//         throw server.status;
//       }
//       return server.json;
//     })
//     .then(function (serverjson) {
//       console.log(serverjson);
       
//     })
//     .catch(function (error) {
//       document.createElement("p");
//       p_getpost.innerText = "error";
//       p_getpost.style.color = "red";
//       main.appendChild(p);
//     });
// }
// getserver();
