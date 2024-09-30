document.body.style.color = "white";

let input = document.getElementById("inputfield");
let list = document.getElementById("list");
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  let value = input.value;
  let li = document.createElement("li");
  li.textContent = value;
  let removebtn = document.createElement("button");
  removebtn.innerText = "remove";
  removebtn.style.backgroundColor = "white";
  removebtn.style.borderColor = "transparent";
  removebtn.onclick = () => {
    list.removeChild(li);
  };
  li.appendChild(removebtn);
  list.appendChild(li);
  input.value = "";
});

let element = document.getElementById("main");
function generatejoke() {
  let data = fetch("https://official-joke-api.appspot.com/random_joke");
  data.then((response) => {
    response
      .json()
      .then((result) => {
        console.log(result);
        element.innerHTML = `<h1>joke setup: ${result.setup}</h1>
    <p>joke punchline: ${result.punchline}</p>`;
      })
      .catch(() => {
        console.log("error");
      });
  });
}
