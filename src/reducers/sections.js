const initialState = {
    sidePanel: [],
    mainPanel: [],
    side: null
}

const sections = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_SECTION":
            if (action.panel === "main") {
                return {
                    ...state,
                    mainPanel: [
                        ...state.mainPanel,
                        action.section
                    ]
                }
            }
            return {
                ...state,
                sidePanel: [
                    ...state.sidePanel,
                    action.section
                ]
            }
            
        case "REMOVE_SECTION":
            return {
                ...state,
                mainPanel: state.mainPanel.filter(section=>section.props.id !== action.id),
                sidePanel: state.sidePanel.filter(section=>section.props.id !== action.id)
            }

        case "EDIT_BOUNDS":
            return {
                ...state,
                mainPanel: state.mainPanel.map(el => {return(el.props.id === action.id ? {...el, boundingBox: action.boundingBox} : el)}),
                sidePanel: state.sidePanel.map(el => {return(el.props.id === action.id ? {...el, boundingBox: action.boundingBox} : el)}),
            };

        case "MOVE_SECTION":
            /**
             * Moves section with id `id` to index `index` in panel `panel`.
             */
            let index, section, from , to;

            index = state.mainPanel.findIndex(section=>section.props.id === action.id);
            if(index === -1) {
                // section is in side panel
                index = state.sidePanel.findIndex(section=>section.props.id === action.id);
                section = state.sidePanel[index];
                from = [...state.sidePanel];
                from.splice(index, 1);
                if(action.panel === "side"){
                    to = from;
                } else {
                    to = [...state.mainPanel];
                }
            } else {
                // section is in main panel
                section = state.mainPanel[index];
                from = [...state.mainPanel];
                from.splice(index, 1);
                if(action.panel === "main"){
                    to = from;
                } else {
                    to = [...state.sidePanel];
                }
            }
            
            to.splice(action.index, 0, section);
            
            if(action.panel === "main"){
                if(from === to){
                    return {
                        ...state,
                        mainPanel: [...to]
                    };
                }
                return {
                    ...state,
                    mainPanel: [...to],
                    sidePanel: [...from]
                };
            } else {
                if(from === to){
                    return {
                        ...state,
                        sidePanel: [...to]
                    };
                }
                return {
                    ...state,
                    mainPanel: [...from],
                    sidePanel: [...to]
                };
            }

        case "CHANGE_SIDE":
            return {
                ...state,
                side: action.side
            }

        default:
            return state;
    }
}

export default sections;
