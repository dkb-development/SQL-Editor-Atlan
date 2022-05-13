export const makeTableActive = (tableId) => {
    return {
        type: 'ClickNavTableToActive',
        clickedTableId: tableId
    }
}