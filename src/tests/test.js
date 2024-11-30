const page = 0;
const page1 = 5;

const pages = [
    { label: 'home', link: "/" },
    { label: 'Pokemon V2', link: "/pokemonv2" },
    { label: 'Pokemon Table', link: "/pokemon" }
  ];

export const handleNext = (a) => {
    return page + a;
}

export const handlePrevious = (a) => {
    return page1 - a;
}


export const menu = () => {
    const result = pages.map(page => (
        page.label
    ));
    return result;
}

export const handleChangeFilter = (name) => {
    const b = () => {}
    if (name.length > 3) {
        return b
    }

}

export const data = (card) => {
   if (card.length < 1) {
    return card;
   }
   return []
}


export const responseData = (res) => {
    if (res === 401) {
     return 'Ocurrio un error al consultar los datos';
    } else if (res === 200){
        return []
    } else if (res === 404){
        return 'Sin resultados'
    }
 }