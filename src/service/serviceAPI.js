const urlBase = "http://localhost:3000/user";

/**
 * 
 * @param {*} id 
 * @param {*} categorie 
 * @returns 
 */
const getData = async (id, categorie) => {
    let urlComplet = categorie ? urlBase + `/${id}/${categorie}` : urlBase + `/${id}`
    console.log("url "+urlComplet)
    const data = await fetch(urlComplet)
    const dataFetch = await data.json()
    return dataFetch;
}

export default getData