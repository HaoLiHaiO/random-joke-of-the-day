const randomJoke = document.getElementById("randomJoke");

fetch("https://official-joke-api.appspot.com/random_joke", {
  method: "GET",
})
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    randomJoke.innerHTML += data["setup"];
    setTimeout(function () {
      return (randomJoke.innerHTML =
        randomJoke.innerHTML + " " + data["punchline"]);
    }, 3000);
  })
  .catch((error) => console.log("ERROR!!!!"));
