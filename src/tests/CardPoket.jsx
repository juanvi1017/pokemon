import { describe, it, expect } from 'vitest'
import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import { handleNext, handlePrevious, menu, handleChangeFilter, data} from "./test";

import '@testing-library/jest-dom/vitest'

afterEach(() => {
  cleanup()
})


describe('CardPoket', () => {
  it('HandleNext es una función', () => {
    expect(typeof handleNext).toBe('function');
  });

  it('Debe sumar el valor de page + 1', () => {
    expect(handleNext(1)).toBe(1);
  });

  it('HandlePrevious es una función', () => {
    expect(typeof handlePrevious).toBe('function');
  });

  it('Debe sumar el valor de page - 1', () => {
    expect(handlePrevious(1)).toBe(4);
  });

  it('Listado de menu, debe recorrer un array ', () => {
    expect(menu()).toBeInstanceOf(Array);
  });

  it('Listado de menu, debe retornar un array con los label', () => {
    expect(menu()).toEqual(['home', 'Pokemon V2', 'Pokemon Table'])
  });

  it('Solo iniciara la busqueda si el nombre tiene mas de 3 caracteres', () => {
    expect(handleChangeFilter('pikachu')).toBeTypeOf('function')
  });

  it('No retornara ninguna función si el name es menor o igual a 3 caracteres', () => {
    expect(handleChangeFilter('pik')).toBeUndefined()
  });


});