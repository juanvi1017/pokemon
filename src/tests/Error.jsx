import { describe, it, expect } from 'vitest'
import { responseData } from "./test";

import '@testing-library/jest-dom/vitest'


describe('Mensajes de Error', () => {

  it('Muestra mensaje de error si la respuesta de la api es diferente a 200 y 404', () => {
    expect(responseData(401)).toEqual('Ocurrio un error al consultar los datos')
  });

  it('Devuelve un array si los consulta es 200', () => {
    expect(responseData(200)).toBeInstanceOf(Array);
  });

});