const urlBase = "localhost:3000/user";

const getFetchData = async (id, categorie) => {
    let urlComplet = categorie ? urlBase + `/${id}/${categorie}` : urlBase + `/${id}/`
    const data = await fetch(urlComplet)
    const dataFetch = await data.json()
    return dataFetch;
}

export default getFetchData