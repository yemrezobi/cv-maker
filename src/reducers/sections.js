const initialState = {
    navbar: [],
    content: []
}

const sections = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_SECTION":
            return {
                ...state,
                content: [
                    ...state.content,
                    action.section
                ]
            }
        case "REMOVE_SECTION":
            return {
                ...state,
                content: state.content.filter(section=>section.props.id !== action.id)
            }
        default:
            return state;
    }
}

export default sections;
