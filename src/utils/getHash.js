const getHash = () =>
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'; // ['','1', '']

    export default getHash;
// cuando vamos a retornar un elemento que accedemos dentro de la logica de la funcion, no es necesario usar {} como en este caso.