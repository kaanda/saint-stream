//captura da url a info que vem depois da barra para pegar o id do filme ou serie
//exemplo de url:
//http://localhost:3000/movie/550
//http://localhost:3000/serie/550
//Url montada:
//http://localhost:3000/{type}/{id}
const getIdForUrl = () => {
    const urlPathname = window.location.pathname;
    const urlParts = urlPathname.split('/');
    const urlType = urlParts[urlParts.length - 2];
    const id = parseInt(urlParts[urlParts.length - 1]);
    return {id, urlType};
}
export default getIdForUrl;