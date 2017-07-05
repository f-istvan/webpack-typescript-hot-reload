import { Calc } from '../src/Calc';

describe('Calc', () => {
    it('should be defined', () => {
        expect(Calc).toBeDefined();
    });

    it('add should return 2', () => {
        let actual = Calc.add(1, 1);
        let expected = 2;
        expect(actual).toEqual(expected);
    });
});

