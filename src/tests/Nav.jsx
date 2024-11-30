import { describe, it, expect } from 'vitest'
import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import { menu } from "./test";

import '@testing-library/jest-dom/vitest'

afterEach(() => {
  cleanup()
})


describe('Menu', () => {

  it('Listado de menu, debe recorrer un array ', () => {
    expect(menu()).toBeInstanceOf(Array);
  });

  it('Listado de menu, debe retornar un array con los label', () => {
    expect(menu()).toEqual(['home', 'Pokemon V2', 'Pokemon Table'])
  });

});