const { sum, myRemove } = require('./exercices');

describe('exercicios parte 1', () => {
  test('exercicio 1', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  })
  test('exercicio 2', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  })
})