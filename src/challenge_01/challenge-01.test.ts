import { challenge01 } from "./challenge-01";

describe('GIVEN challenge01', () => {
  describe('WHEN call challenge01 with "gato perro perro coche Gato peRRo sol"', () => {
    test('THEN return "gato2perro3coche1sol1"', () => {
      expect(challenge01('gato perro perro coche Gato peRRo sol')).toBe('gato2perro3coche1sol1');
    });
  });

  describe('WHEN call challenge01 with "llaveS casa CASA casa llaves"', () => {
    test('THEN return "llaves2casa3"', () => {
      expect(challenge01('llaveS casa CASA casa llaves')).toBe('llaves2casa3');
    });
  });

  describe('WHEN call challenge01 with "taza ta za taza"', () => {
    test('THEN return "taza2ta1za1"', () => {
      expect(challenge01('taza ta za taza')).toBe('taza2ta1za1');
    });
  });

  describe('WHEN call challenge01 with "casas casa casasas"', () => {
    test('THEN return "casas1casa1casasas1"', () => {
      expect(challenge01('casas casa casasas')).toBe('casas1casa1casasas1');
    });
  });
})