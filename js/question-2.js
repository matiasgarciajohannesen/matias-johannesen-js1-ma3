const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const doc = document.querySelector(".games");

fetch(url)
.then(Response => Response.json())
.then(data => game(data))
.catch(error => doc.innerHTML = "Wooops, something whent wrong...");


game = (games) => {
    console.log(games);
    doc.innerHTML = ""
    for (game of games.results){
        if(game === games.results[8]){
            break
        }
        const newGame = `
        <ul>
        <li><h2>${game.name}</h2></li>
        <li><p>Rating: ${game.rating}</p></li>
        <li><p>Number of tags: ${game.tags.lenght}</p></li>
        </ul>
        `;
        doc.innerHTML += newGame;
    } 

};