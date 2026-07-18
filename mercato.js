const items = document.querySelectorAll(".market-item");

items.forEach(item => {
  const title = item.querySelector(".market-title");
  const content = item.querySelector(".market-content");

  title.addEventListener("click", () => {

    // chiude le altre notizie
    items.forEach(i => {
      if (i !== item) {
        i.querySelector(".market-content").style.display = "none";
      }
    });

    // apre/chiude la notizia cliccata
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }

  });
});