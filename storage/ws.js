import api from "../API/api";

let ws ={
    async showAll(){
        const data = await api.getData();
        let html=''
        data.forEach(game => {
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
            html+=`
            <div>${title}</div>
        <div><img id="img" src="${thumbnail}"></div>
        <div>${short_description}</div>
        <div>${publisher}</div>
        <div>${release_date}</div>
        <div>${platform}</div>
        <div>${genre}</div>
        <div>${id}</div>
        <div>${developer}</div>
        <div><a href="${freetogame_profile_url}">LINK AL JUEGO</a></div><br>
            `
    });
    return [html]
    }
}
self.addEventListener("message",(e)=>{
    postMessage(ws[`${e.data.module}`](e.data.data));
})