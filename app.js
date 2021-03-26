let reviews = document.querySelector(".reviews");
let counter = 0;

function fetchData() {
  fetch("https://reqres.in/api/users?page=2")
    .then((data) => data.json())
    .then((x) => {
      display(x.data);
    })
    .catch((e) => console.log(e));
}
fetchData();

function display(array) {
  let template = "";
  if (array && array.length > 0) {
    array.forEach((user) => {
      if (user !== undefined) {
        template += `
            <div class="user">
                <div class="userImg">
                    <img src=${user.avatar} alt="imagen review" class="userImg">
                    <div class="quotes"><i class="fas fa-quote-right"></i></div>
                </div>
                <h3 class="name">${user.first_name} ${user.last_name}</h3>
                <span class="job">Web Developer</span>
                <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, repellat
                    commodi
                    saepe est earum iure! Consequatur veritatis id, rem iure mollitia, doloremque corrupti nisi, omnis
                    vero
                    error perspiciatis dignissimos dolore?</p>
            </div>`;
      }
    });
  } else {
    return "There are no elements";
  }
  reviews.innerHTML += template;
  let users = document.querySelectorAll(".user");
  users.style.display = "none";
  users[0].style.display = "block";
}

function moveLeft() {
  if (counter > 1) {
    reviews.style.transform += "translateX(302px)";
    counter--;
  } else if (counter == 1) {
    reviews.style.transform = "translateX(4px)";
    counter--;
  } else {
    counter = 3;
    reviews.style.transform = "translateX(-906px)";
  }
}
function moveRight() {
  if (counter < 3) {
    reviews.style.transform += "translateX(-302px)";
    counter++;
  } else if (counter == 3) {
    counter = 0;
    reviews.style.transform = "translateX(0)";
  }
}
