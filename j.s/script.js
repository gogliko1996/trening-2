// let newpag = 1;
// function serverLink(next) {
//   fetch("https://reqres.in/api/users?page=" + next, {
//     method: "GET",
//   })
//     .then(function (server) {
//       if (server.status !== 200) {
//         throw server.status;
//       }
//       return server.json();
//     })
//     .then(function (serverjson) {
//       serverjson.data.forEach((element) => {
//         let li = document.createElement("li");
//         let fragment = document.createDocumentFragment();
//         li.innerText = element.email;
//         fragment.appendChild(li);
//         document.getElementById("statia").appendChild(li);
//       });
//     })
//     .catch(function (error) {
//       let p = document.createElement("p");
//       p.textContent = "error";
//       document.getElementById("statia").appendChild(p);
//     });
// }
// serverLink(newpag);
// document.getElementById("submit").addEventListener("click", function () {
//   if (newpag === 1) {
//     newpag++;
//     serverLink(newpag);
//   } else {
//     newpag--;
//     serverLink(newpag);
//     document.getElementById("statia").innerHTML = " ";
//   }
// });





let nextserver = 1;

function server(next) {
  let getserver = new XMLHttpRequest();
  getserver.addEventListener("load", function () {
    let servertext = this.responseText;
    let serverjson = JSON.parse(servertext);
    serverjson.data.forEach((element) => {
      let li = document.createElement("li");
      let fragment = document.createDocumentFragment();
      li.innerText = element.first_name;
      fragment.appendChild(li);
      document.getElementById("statia").appendChild(li);
    });
  });
  getserver.open("GET", "https://reqres.in/api/users?page=" + next);
  getserver.send();
}
server(nextserver);
document.getElementById("submit").addEventListener("click", function () {
  if (nextserver === 1) {
    nextserver++;
    server(nextserver);
  } else {
    nextserver--;
    server(nextserver);
    document.getElementById("statia").innerHTML = " ";
  }
});
