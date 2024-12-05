import { describe, it, expect } from 'vitest';
import { menu } from './test';

import '@testing-library/jest-dom/vitest';



describe('Menu', () => {

  it('Listado de menu, debe recorrer un array ', () => {
    expect(menu()).toBeInstanceOf(Array);
  });

  it('Listado de menu, debe retornar un array con los label', () => {
    expect(menu()).toEqual(['home', 'Pokemon V2', 'Pokemon Table'])
  });

});