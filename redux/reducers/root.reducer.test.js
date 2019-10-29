import combinedReducer from "./root.reducer";

describe('Combined Reducer', () => {
    
    it('Should not null', () => {
        const reducers = combinedReducer();
        
        expect(reducers).toBeDefined();
    });

});