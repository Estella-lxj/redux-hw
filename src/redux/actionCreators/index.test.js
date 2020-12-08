import * as actions from './index';

describe('todo actions', () => {
    // it('addTodo should create ADD_TODO action', () => {
    //     expect(actions.addTodo('Use Redux')).toEqual({
    //         type: 'ADD_TODO',
    //         id: Date.now(),
    //         text: 'Use Redux',
    //     });
    // });

    it('setFilter should create SET_FILTER action', () => {
        expect(actions.setFilter('active')).toEqual({
            type: 'SET_FILTER',
            filter: 'active',
        });
    });

    it('toggleTodo should create TOGGLE_TODO action', () => {
        let keyId = Date.now();
        expect(actions.toggleTodo(keyId)).toEqual({
            type: 'TOGGLE_TODO',
            id: keyId,
        });
    });
    it('increaseCounter should create INCREASE_COUNTER action', () => {
        expect(actions.increaseCounter()).toEqual({
            type: 'INCREASE_COUNTER',
        });
    });
    it('decreaseCounter should create DECREASE_COUNTER action', () => {
        expect(actions.decreaseCounter()).toEqual({
            type: 'DECREASE_COUNTER',
        });
    });
});