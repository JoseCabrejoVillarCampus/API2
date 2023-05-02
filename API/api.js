const getData = async ()=> {
    const url =  `https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc&offset=${offset}`;
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

export default{
    getData
}