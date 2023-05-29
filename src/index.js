console.log('Hello');

import router from './routes';

window.addEventListener('load', router); //para saber si esta en el ambiente de la aplicacion, las palciaicones cargan solo una vez a los archivos
window.addEventListener('hashchange', router);