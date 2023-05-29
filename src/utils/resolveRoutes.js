const resolveRoutes = (route) => {
    if(route.length <= 3) { //nos aseguramos de que entre en el flujo de nuestra aplicacion sino tiene mas de 3 caracteres
        let validRoute = route === '/' ? route : '/:id';
        return validRoute;
    }
    return  `/${route}`; // tenemos la estrucutra necesaria con /about, para compararlo con la seccion de rutas
}

export default resolveRoutes;