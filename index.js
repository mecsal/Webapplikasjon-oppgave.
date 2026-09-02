
// Functional search bar https://www.youtube.com/watch?v=7OU4kTKV8dM
const searchPost = () => {
    const searchpost = document.getElementById("SearchBox").value.toUpperCase();
    const games = document.querySelectorAll(".Game");
    const noResults = document.getElementById("NoResults");

    let found = false;

    for(let p = 0; p < games.length; p++) {
        const title = games[p].querySelector("h3");
        const text = title.textContent.toUpperCase();

        if(text.includes(searchpost)) {
            games[p].style.display = "";
            found = true;
        } else {
            games[p].style.display = "none";
        }
    }

    if(found) {
        noResults.style.display = "none";
    } else {
        noResults.style.display = "block";
    }
}

// Show/hide contents inside the filter https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp

function myFunction() {
  var x = document.querySelector(".InsideFilter");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function selectLanguage() {
  var x = document.querySelector(".LanguageBars");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}