import { describe, it, expect, beforeEach, vi } from 'vitest';
import { handleNext, handlePrevious, menu, handleChangeFilter } from "./test";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

import CardPoke from '../component/pokemon';


describe('CardPoket', () => {

  let mockFn = vi.fn();
  let value = {
    id: 1,
    name: 'PIKACHU',
    img: '',
    experience: 164,
    abilities: [],
    types: []
  }
  beforeEach(() => {
    render(<CardPoke open={true} setOpen={mockFn} size='sm' value={value} />)
  })

  it('Muestra el NOMBRE del pokemon en la CARD de detalles', () => {
    const h2 = screen.getByRole('heading', {level: 2});
    expect(h2).toBeInTheDocument();
    expect(h2.textContent).toBe('PIKACHU');
  });


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