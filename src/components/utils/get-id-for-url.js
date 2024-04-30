//captura da url a info que vem depois da barra para pegar o id do filme ou serie
//exemplo de url:
//http://localhost:3000/movie/550
//http://localhost:3000/serie/550
//http://localhost:3000/movie
//http://localhost:3000/serie
//Url montada:
//http://localhost:3000/{type}/{id}
//http://localhost:3000/{type}
const getIdForUrl = () => {
    const url = window.location.pathname;
    const urlArray = url.split('/');
    const urlType = urlArray[1];
    const id = parseInt(urlArray[2]);
    return {urlType, id};
}
export default getIdForUrl;