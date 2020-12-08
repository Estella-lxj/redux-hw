import counter from './counter';

describe('Test for counter reducer', () => {
    it('Should return "0" for default state', () => {
        expect(counter(undefined, {})).toEqual(0);
    });
    it('handle increase action', () => {
        const action = { type: 'INCREASE_COUNTER' };
        expect(counter(undefined, action)).toEqual(1);
    });
    it('handle decrease action', () => {
        const action = { type: 'DECREASE_COUNTER' };
        expect(counter(undefined, action)).toEqual(-1);
    });
});