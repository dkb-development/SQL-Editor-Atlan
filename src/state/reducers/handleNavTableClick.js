const defaultActiveTableIdState = {
    "currentActiveTableId": 'Table-1'
};

export const handleNavTableClick = (state=defaultActiveTableIdState,action) => {
    if(action.type === 'ClickNavTableToActive'){
        return {
            ...state,
            currentActiveTableId: action.clickedTableId
        }
    }

    return state;
}