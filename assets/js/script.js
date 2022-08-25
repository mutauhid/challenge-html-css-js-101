const loadAnime = () => {
  // fetch
  fetch("anime.json")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("data-anime").innerHTML = "";

      const json = JSON.stringify(data.anime);
      const result = JSON.parse(json);

      for (let i = 0; i < result.length; i++) {
        console.log(result[i].img);
        document.getElementById("data-anime").innerHTML += `<div class="card">
        <img
          src="${result[i].img}"
          alt=""/>
        <div class="card-body">
          <h4>${result[i].name}</h4>
        </div>
      </div>`;
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
};
