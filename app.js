function showGame() {
    const contenedor = document.querySelector('#contenidoA')
    const ws = new Worker('storage/ws.js');//Instanciamos el worker con la ruta del storage
    ws.postMessage({data: 'se envio el mensaje'})//enviamos un mesaje al worker, si no lo enviamos no funciona, la data depende de donde sale la informacion, en este caso la data va directamente al worker por esto no la redirigimos
    ws.addEventListener('message', e => {
        contenedor.innerHTML = "";
        contenedor.innerHTML = e.data//insertamos la data
    })
}

showGame()//llamamos la funcion
/* ;

 */
// document.addEventListener("DOMContentLoaded", () => {
//     const formulario = document.querySelector("#formulario");
//     const contenedor = document.querySelector("#contenidoA");

//     formulario.addEventListener("submit", async (e) => {
//         e.preventDefault();
//         contenedor.innerHTML = '';
//         const searchTerm = document.querySelector("#searchTerm").value;
//         console.log(searchTerm);
//         formulario.reset();

//         if (searchTerm) {
//             try {
//                 const searchResponse = await fetch(
//                     `https://free-to-play-games-database.p.rapidapi.com/api/games?search=${searchTerm}`, {
//                         method: "GET",
//                         headers: {
//                             "X-RapidAPI-Key": "cc2e083b58msh94959c04b8fc1c4p1017e1jsna6f447753c4e",
//                             "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
//                         },
//                     }
//                 );
//                 const searchData = await searchResponse.json();
//                 console.log(searchData);
//                 showGame(searchData);
//             } catch (error) {
//                 console.log(error);
//             }
//         } else {
//             getData();
//         }
//     });
// });