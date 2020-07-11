var url = "https://randomuser.me/api/";
var btn = document.getElementById("btn");
var avater = document.getElementById("avatar");
var fullname = document.getElementById("fullname");
var username = document.getElementById("username");
var email = document.getElementById("email");
var country = document.getElementById("city");

btn.addEventListener("click", function () {
  fetch(url)
    .then(handleErros)
    .then(parsedTheData)
    .then(updateUserProfile)
    .catch(Errors);
});

function handleErros(res) {
  if (!res.ok) {
    throw Error(res.status);
  }
  return res;
}

function parsedTheData(res) {
  return res.json().then(function (parsedData) {
    return parsedData.results[0];
  });
}

function updateUserProfile(data) {
  email.innerText = data.email;
  fullname.innerText = data.name.first + " " + data.name.last;
  username.innerText = data.login.username;
  country.innerText = data.location.country;
  avater.src = data.picture.thumbnail;
}

function Errors(data) {
  console.log("Something went wrong");
}
