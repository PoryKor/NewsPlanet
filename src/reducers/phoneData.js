export function phoneData(state = ["1111111111", "2222222222", "3333333333"], action) {
    switch (action.type) {
        case "ADD_DATA_PHONE":
            state.push(action.phoneData)
            return state
        default:
            return state
    }
}