
export default{
    showGame() {
        const ws = new Worker("./storage/wsMyComponent.js",{type:"module"});
        ws.postMessage({module:this.showGame, data: data})
        let id = ["#contenidoA"];
        let count = 0;
        //esto es lo que llega del worker
        ws.addEventListener("message",(e)=>{

            //estamos parseando lo que trae el evento (mensaje)
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            console.log(doc.body.children);
            
            //insertamos en nuestro index, en el selector #pingPongItems
            document.querySelector(id[count]).append(...doc.body.children);

            //finalizamos el worker
            (id.length-1==count) ? ws.terminate():count++;
        });
} 

    /* const contenedor = document.querySelector('#contenidoA')
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
        <div><img id="img" src="${thumbnail}"></div>
        <div>${short_description}</div>
        <div>${publisher}</div>
        <div>${release_date}</div>
        <div>${platform}</div>
        <div>${genre}</div>
        <div>${id}</div>
        <div>${developer}</div>
        <div><a href="${freetogame_profile_url}">LINK AL JUEGO</a></div><br>`;

        contenedor.appendChild(div)
    }); */
}