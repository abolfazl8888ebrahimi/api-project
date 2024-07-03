let container = document.querySelector(".container");
async function getData() {
  let url = "https://jsonplaceholder.typicode.com/comments";
  try {
    let postpel = await fetch(url);
    if (!postpel.ok) {
       new Error("you have wrong");
    }
    var userList = await postpel.json();
    renderInUi(userList, container);
  } catch (error) {
     console.error(error);
  }
}

getData();

function renderInUi(list, container) {
    list.forEach((item) => {
      let user1 = document.createElement("div");
      user1.classList.add("name");
      user1.innerText = item.name;

      let user2 = document.createElement("div");
      user2.classList.add("email");
      user2.innerText = item.body;

      const coper = document.createElement("div")
      coper.classList.add("user");

      coper.appendChild(user1)
      coper.appendChild(user2)
      container.appendChild(coper)
    });
  }
  