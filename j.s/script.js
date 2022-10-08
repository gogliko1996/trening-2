

let newpag = 1;
function serverLink(next) {
   
fetch("https://reqres.in/api/users?page=" + next,{
    method:"GET"
})
.then (function (server) {
    return server.json ();
    if(server.status !== 200){
        throw server.status
    }
})
.then (function (serverjson) {
    serverjson.data.forEach(element => {
        let li = document.createElement("li");
        let fragment = document.createDocumentFragment();
        li.innerText = element.email;
        fragment.appendChild(li);
        document.getElementById("statia").appendChild(li);
    });  
})
.catch (function (error) {
    let p = document.createElement("p");
    p.textContent = "error";
    document.getElementById("statia").appendChild(p);
})
}

serverLink(newpag);
document.getElementById("submit").addEventListener("click", function(){
    if(newpag === 1 ){
        newpag++;
        serverLink(newpag);
    }else{
        newpag--;
        serverLink(newpag);
        document.getElementById("statia").innerHTML = " ";
    }
})
