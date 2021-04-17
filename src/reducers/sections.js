const sections = (state = [], action) => {
    switch (action.type) {
        case "ADD_SECTION":
            return [...state, action.section];
        case "REMOVE_SECTION":
            return state.filter(section => section.props.id !== action.id);
        default:
            return state;
    }
}

export default sections;
