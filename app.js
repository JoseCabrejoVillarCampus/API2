document.addEventListener("DOMContentLoaded", () => {
    getData()
})
let offset = 0;
async function getData() {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc&offset=${offset}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cc2e083b58msh94959c04b8fc1c4p1017e1jsna6f447753c4e',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
        showGame(data);
    } catch (error) {
        console.log(error);
    }
}

function showGame(games, limit = 1) {
    const contenedor = document.querySelector('#contenidoA')
    contenedor.innerHTML = "";
    games.slice(0, limit).forEach(game => {
        const {
            developer,
            freetogame_profile_url,
            genre,
            id,
            platform,
            publisher,
            release_date,
            short_description,
            thumbnail,
            title
        } = game;
        const div = document.createElement('div');
        div.innerHTML = `
        <div>${title}</div>
        <div><img src="${thumbnail}"></div>
        <div>${short_description}</div>
        <div>${publisher}</div>
        <div>${release_date}</div>
        <div>${platform}</div>
        <div>${genre}</div>
        <div>${id}</div>
        <div>${developer}</div>
        <div><a href="${freetogame_profile_url}">LINK AL JUEGO</a></div><br>`;

        contenedor.appendChild(div)
    });
}

/* let anterior = document.getElementById('but1');
anterior.addEventListener('click', async () => {
    offset -= 1; // Actualizar el offset
    await getData();
});

let siguiente = document.getElementById('but');
siguiente.addEventListener('click', async () => {
    offset += 1; // Actualizar el offset
    await getData();
}); */
document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector("#formulario");
    const contenedor = document.querySelector("#contenidoA");

    formulario.addEventListener("submit", async (e) => {
        e.preventDefault();
        contenedor.innerHTML = '';
        const searchTerm = document.querySelector("#searchTerm").value;
        console.log(searchTerm);
        formulario.reset();

        if (searchTerm) {
            try {
                const searchResponse = await fetch(
                    `https://free-to-play-games-database.p.rapidapi.com/api/games?search=${searchTerm}`, {
                        method: "GET",
                        headers: {
                            "X-RapidAPI-Key": "cc2e083b58msh94959c04b8fc1c4p1017e1jsna6f447753c4e",
                            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
                        },
                    }
                );
                const searchData = await searchResponse.json();
                console.log(searchData);
                showGame(searchData);
            } catch (error) {
                console.log(error);
            }
        } else {
            getData();
        }
    });
});