import * as data from './data.json';
describe('countries data', () => {
  it('cca2 is unique', () => {
    const cca2s = data.map((entry) => entry.cca2);
    expect(cca2s.length).toBe(new Set(cca2s).size);
  });
});
