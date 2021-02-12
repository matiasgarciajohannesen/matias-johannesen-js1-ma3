const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const inne = document.querySelector(".games");

fetch(url)
.then(Response => Response.json())
.then(data => game(data))
.catch(error => inne.innerHTML = "Wooops, something whent wrong...");


game = (games) => {
    console.log(games);
    inne.innerHTML = ""
    for (game of games.results){
        if(game === games.results[8]){
            break
        }
        let newGame = `
        <div>
        <h2>${game.name}</h2>
        <p>${game.rating}</p>
        <p>${game.tags}</p>
        </div>
        `;
        inne.innerHTML += newGame;
    } 

};