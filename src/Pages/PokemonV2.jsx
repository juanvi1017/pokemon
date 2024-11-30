import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid2';

// component
import CardPoke from '../component/pokemon';
import Alert from '../component/alert';

// api
import { get } from '../apirest';
// styles
import './style/pokemon.css'



// NOTA:

// EN ESTA VISTA SE REALIZA UNA CONSULTA POR CADA POKEMON QUE DEVUELVA EL API PARA OBTENER
// SU IMAGEN Y SU EXPERIENCIA, ESTO NO ES LO IDEAL Y MENOS OBTIMO CON LA VERSION DE TABLA YA
// QUE SE REALIZAN VARIAS PETICIONES PARA CARGAR LA PAGINA

// PERO A NIVEL VISUAL ES MUCHO MÁS ATRACTIVO Y PINTORESCO

function PokemonV2() {

    const [loading, setLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [data, setData] = useState([])
    const [detail, setDetail] = useState(null)
    const [page, setPage] = useState(0)
    const [next, setNext] = useState(null)
    const [previous, setPrevious] = useState(null)
    const [search, setSearch] = useState('');

    const getPoke = useCallback(async (pageInfo) => {
        setLoading(true)
        // Obtenomos la lista de pokemon
        const response = await get(`https://pokeapi.co/api/v2/pokemon?offset=${pageInfo * 20}&limit=20`)
        if (response.status === 200) {
            const { results, next, previous } = response.data
            setNext(next)
            setPrevious(previous)
            // iteramos cada pokemon para obtener una imagen haciendo una consulta con la api
            const info = results.map(async (poke) => {
                const responsePoke = await get(poke.url)
                return {
                    id: responsePoke.data.id,
                    name: responsePoke.data.name,
                    img: responsePoke.data.sprites.other.dream_world.front_default,
                    experience: responsePoke.data.base_experience,
                    abilities: responsePoke.data.abilities,
                    types: responsePoke.data.types
                }
            })

            // esperamos que se resuleva la promesa
            setData(await Promise.all(info))
            setSearch('')
        } else {
            Alert.fire({ icon: 'error', title: 'Ocurrio un error al consultar los datos ' })
        }
        setLoading(false)
    }, [])

    // Busqueda de pokemon por nombre
    // solo se ejecuta la busqueda si hay mas de 3 caracteres ingresado por el usuario
    const getPokeSearch = useCallback(async (filter) => {
        setLoading(true)
        setNext(null)
        setPrevious(null)
        const response = await get(`https://pokeapi.co/api/v2/pokemon/${filter}`)
        if (response.status === 200) {
            setData([
                {
                    id: response.data.id,
                    name: response.data.name,
                    img: response.data.sprites.other.dream_world.front_default,
                    experience: response.data.base_experience,
                    abilities: response.data.abilities,
                    types: response.data.types
                }
            ])
        } else if (response.status === 404) {
            setData([])
        } else {
            Alert.fire({ icon: 'error', title: 'Ocurrio un error al consultar los datos ' })
        }
        setLoading(false)
    }, [])

    const handleNext = () => {
        getPoke(page + 1)
        setPage(page + 1)
    }

    const handlePrevious = () => {
        getPoke(page - 1)
        setPage(page - 1)
    }

    const view = (e) => {
        setDetail(e);
        setOpenModal(true)
    }


    // Evento que escucha los cambios en el input para buscar un pokemon
    const handleChange = (event) => {
        if (event.target.name === "search") {
            if (event.target.value.length > 3) {
                getPokeSearch(event.target.value)
            } else if (event.target.value.length < 1) {
                getPoke(page)
            }
            setSearch(event.target.value)
        }
    }


    useEffect(() => {
        getPoke(page)
    }, [getPoke]);


    return (
        <>
            <section className="hero-poke">
                <div className="container-poke">
                    <div className="hero-poke-text">
                    </div>
                </div>
            </section>
            <div className="card-container" >
                <Grid container spacing={2} justifyContent='center'>
                    <Grid sx={{ xs: 12, md: 12 }}>
                        <TextField
                            value={search}
                            name="search"
                            fullWidth
                            label="Search"
                            placeholder='Ingresa minimo 3 caracteres'
                            variant="outlined"
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
                <div className="card-container-center" >
                    {!loading && (
                        <>
                            {data.length > 0 ? (
                                <>
                                    {data.map((value) => (
                                        <div className="card" key={value.id} onClick={() => view(value)}>
                                            <img
                                                className="card-image"
                                                src={value.img}
                                                alt={value.name}
                                            />
                                            <div className="card-content">
                                                <h2 className="card-title">{value.name}</h2>
                                                <p className="card-description">
                                                    Este pokemon cuenta con una experiencia de {value.experience}.
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                    < div className="card-content-nodata">
                                        <Button onClick={() => handleNext()} variant="contained" disabled={!next ? true : false} className='btn'>
                                            Next
                                        </Button>
                                        <Button onClick={() => handlePrevious()} variant="contained" disabled={!previous ? true : false} className='btn'>
                                            Previous
                                        </Button>
                                    </div>
                                </>
                            ) :
                                <div className="card-content-nodata">
                                    <h2 className="card-title">No se encontraron resultados</h2>
                                    <p className="card-description">
                                        Por favor verifique el nombre de su pokemon
                                    </p>
                                </div>
                            }
                        </>
                    )}
                </div>
            </div >
            {openModal && (
                <CardPoke
                    open={openModal}
                    setOpen={setOpenModal}
                    title="Crear"
                    size="sm"
                    value={detail}
                />
            )
            }
        </>
    );
}

export default PokemonV2;