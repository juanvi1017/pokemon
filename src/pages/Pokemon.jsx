import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid2'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import TablePagination from '@mui/material/TablePagination';

// component
import Alert from '../component/Alert';
import RowTable from '../component/Table/RowTable';
import HeadTable from '../component/Table/HeadTable';
import CardPoke from '../component/Pokemon';
import { Loading } from '../component/Loading';

// api
import { get } from '../apirest';

// style
import './style/pokemon.css'


const Pokemon = () => {

    const [loading, setLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [data, setData] = useState([])
    const [detail, setDetail] = useState(null)
    const [count, setCount] = useState(0)
    const [page, setPage] = useState(0)
    const [search, setSearch] = useState('');

    const getPoke = useCallback(async (pageInfo) => {
        setLoading(true)
        setSearch('')
        const response = await get(`https://pokeapi.co/api/v2/pokemon?offset=${pageInfo * 20}&limit=20`)
        if (response.status === 200) {
            setData(response.data.results)
            setCount(response.data.count)
        } else {
            Alert.fire({ icon: 'error', title: 'Ocurrio un error al consultar los datos ' })
        }
        setLoading(false)
    }, [])

    const getPokeSearch = useCallback(async (filter, val = false) => {
        setLoading(true)
        const response = await get(`https://pokeapi.co/api/v2/pokemon/${filter}`)
        if (response.status === 200) {
            // Abrir el modal si se llama esta función para obtener detalles
            // la variable val indica si se esta buscando un registro para actualizar la tabla
            // o si se quiere ver el detalle de un pokemon para pasarle los parametros por props
            if (val) {
                setDetail({
                    id: response.data.id,
                    name: response.data.name,
                    img: response.data.sprites.other.dream_world.front_default,
                    experience: response.data.base_experience,
                    abilities: response.data.abilities,
                    types: response.data.types
                })
                setOpenModal(true)
            } else {
                //solo ingresa aca si se esta filtrando por nombre
                setData([
                    {
                        id: response.data.id,
                        name: response.data.name,
                    }
                ])
            }
        } else if (response.status === 404) {
            setData([])
        } else {
            Alert.fire({ icon: 'error', title: 'Ocurrio un error al consultar los datos ' })
        }
        setLoading(false)
    }, [])


    const handleChange = (event, newPage) => {
        getPoke(newPage)
        setPage(newPage);
    };

    const view = (e) => {
        getPokeSearch(e, true)
    }

    const handleChangeFilter = (event) => {
        if (event.target.name === "search") {
            if (event.target.value.length > 2) {
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
        <Container>
            <Card>
                <Grid container spacing={2} justifyContent='center'>
                    <Grid sx={{ xs: 12, md: 6, margin: '100px 0px 20px' }}>
                        <TextField
                            value={search}
                            name="search"
                            fullWidth
                            label="Search"
                            variant="outlined"
                            onChange={handleChangeFilter}
                        />
                    </Grid>
                </Grid>
                {loading && (
                    <Loading open={loading} />
                )}
                {!loading && (<>
                    {data.length > 0 && (
                        <>
                            <TableContainer sx={{ overflowX: 'auto' }}>
                                <Table sx={{ minWidth: 300 }}>
                                    <HeadTable
                                        rowCount={data.length}
                                        headLabel={[
                                            { id: 'name', label: 'Nombre' },
                                        ]}
                                    />
                                    <TableBody>
                                        {data.map((row) => (
                                            <RowTable
                                                key={row.name}
                                                name={row.name}
                                                view={view}
                                            />
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Stack spacing={2} className='pagination'>
                                <TablePagination
                                    component="div"
                                    rowsPerPageOptions={[20]}
                                    count={count}
                                    rowsPerPage={20}
                                    page={page}
                                    onPageChange={handleChange}
                                />
                            </Stack>
                        </>
                    )}
                    {data.length < 1 && (
                        <div className="card-content-nodata">
                            <h2 className="card-title">No se encontraron resultados</h2>
                            <p className="card-description">
                                Por favor verifique el nombre de su pokemon
                            </p>
                        </div>
                    )}
                </>
                )}
            </Card>
            {openModal && (
                <CardPoke
                    open={openModal}
                    setOpen={setOpenModal}
                    size="sm"
                    value={detail}
                />
            )}
        </Container>
    );
}

export default Pokemon;