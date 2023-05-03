
let ws = {
    async consult() {
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d`;
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
            return data
        } catch (error) {
            console.log(error);
        }
    },
    render_templates(arr_data) {
        let div = '';
        arr_data.forEach(game => {
            const {
                developer,
                freetogame_profile_url,
                genre,
                id,
                platform,
                publisher,
                release_date,
                thumbnail,
                title
            } = game;
            div += `<div id="carta">
            <h1>${title}</h1>
            <a><img id="imas" src="${thumbnail}"></a>
            <p>${publisher}</p>
            <h4>${release_date}</h4>
            <h3>${platform}</h3>
            <h2>${genre}</h2>
            <div>${id}</div>
            <div>${developer}</div>
            <a href="${freetogame_profile_url}">LINK AL JUEGO</a></div><br>
            </div>
            `;
        });
        return div
    },
    /* async butons() {
        const anterior = document.getElementById('but1');
        anterior.addEventListener('click', async () => {
            console.log("faaaa");
            offset -= 1; // Actualizar el offset
            await ws.consult(); 
        })
        const siguiente = document.getElementById('but');
        siguiente.addEventListener('click', async () => {
            offset += 1; // Actualizar el offset
            await ws.consult();
        });
    } */
}


self.addEventListener('message', async (r) => { //enviamos la informacion
    let res_consult = await ws.consult() //almacenamos el array que retorna la api
    let res_template = ws.render_templates(res_consult) //creamos nueva variable que recibe el parametro del array y lo inseta en la funcion
    postMessage(res_template) //enviamos la informacion al worker de la app.js
})