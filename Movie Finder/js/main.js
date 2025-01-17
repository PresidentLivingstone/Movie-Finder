$(document).ready(() => {
  $("#searchForm").on('submit', (e) => {
    let searchText = $("#searchText").val();
    getMovies(searchText);
    e.preventDefault();
  });
});

function getMovies(searchText) {
  axios.get('http://www.omdbapi.com?s=' + searchText + '&apikey=cb602cb0')
    .then((response) => {
      console.log(response);
      let movies = response.data.Search;
      let output = '';
      $.each(movies, (index, movie) => {
        output += `
        <div class="col-md-3">
            <div class="well text-center">
              <img src="${movie.Poster}">
              <h6>${movie.Title}</h6>
              <h6 class= "text-danger">${movie.Year}</h6>
              <a class="btn btn-primary text-bg-primary" href="#">Watch Movie</a>
            </div>
        </div>
        `;
      });
      $('#movies').html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}


