const API = 'https://rickandmortyapi.com/api/character';

const getData = async(id) => {
    const apiURL = id ? `${API}${id}` : API;
    // trabajar como el estadnar lo dice con un catch
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    } catch { //generar catch para error es buen practica
        console.log('Fetch Error', error);
    }
}

// tenemos que asegurarnos de que trabaje sobre esa API

export default getData;