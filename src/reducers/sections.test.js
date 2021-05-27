import { reducer } from '../store';
import SectionTest from '../components/sections/SectionTest';

const initialState = {
    sections: {
        sidePanel: [],
        mainPanel: [],
        side: null
    }
}

const createSection = (id) => {
    return(<SectionTest key={id} id={id} />);
}

describe("sections reducers", () => {

    it("initializes state", () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it("adds a section", () => {
        expect(reducer(undefined, {
            type: "ADD_SECTION",
            section: createSection(0),
            panel: "main"
        })).toEqual({
            ...initialState,
            sections: {
                ...initialState.sections,
                mainPanel: [...initialState.sections.mainPanel, createSection(0)]
            }
        });
    });

    it("removes a section", () => {
        expect(reducer({
            ...initialState,
            sections: {
                ...initialState.sections,
                mainPanel: [createSection(0), createSection(1), createSection(2)]
            }
        }, {
            type: "REMOVE_SECTION",
            id: 0
        })).toEqual({
            ...initialState,
            sections: {
                ...initialState.sections,
                mainPanel: [createSection(1), createSection(2)]
            }
        });
    });

    it("moves a section from mainpanel to mainpanel", () => {
        expect(reducer({
            ...initialState,
            sections: {
                ...initialState.sections,
                mainPanel: [createSection(0), createSection(1), createSection(2), createSection(3)]
            }
        }, {
            type: "MOVE_SECTION",
            id: 0,
            index: 2,
            panel: "main"
        })).toEqual({
            ...initialState,
            sections: {
                ...initialState.sections,
                mainPanel: [createSection(1), createSection(2), createSection(0), createSection(3)]
            }
        });
    });

    it("moves a section from sidepanel to sidepanel", () => {
        expect(reducer({
            ...initialState,
            sections: {
                ...initialState.sections,
                sidePanel: [createSection(0), createSection(1), createSection(2), createSection(3)]
            }
        }, {
            type: "MOVE_SECTION",
            id: 0,
            index: 2,
            panel: "side"
        })).toEqual({
            ...initialState,
            sections: {
                ...initialState.sections,
                sidePanel: [createSection(1), createSection(2), createSection(0), createSection(3)]
            }
        });
    });

    it("moves a section from mainpanel to sidepanel", () => {
        expect(reducer({
            ...initialState,
            sections: {
                ...initialState.sections,
                mainPanel: [createSection(0), createSection(1), createSection(2), createSection(3)],
                sidePanel: [createSection(4), createSection(5)]
            }
        }, {
            type: "MOVE_SECTION",
            id: 0,
            index: 1,
            panel: "side"
        })).toEqual({
            ...initialState,
            sections: {
                ...initialState.sections,
                mainPanel: [createSection(1), createSection(2), createSection(3)],
                sidePanel: [createSection(4), createSection(0), createSection(5)]
            }
        });
    });

    it("moves a section from sidepanel to mainpanel", () => {
        expect(reducer({
            ...initialState,
            sections: {
                ...initialState.sections,
                mainPanel: [createSection(4), createSection(5)],
                sidePanel: [createSection(0), createSection(1), createSection(2), createSection(3)]
                
            }
        }, {
            type: "MOVE_SECTION",
            id: 0,
            index: 1,
            panel: "main"
        })).toEqual({
            ...initialState,
            sections: {
                ...initialState.sections,
                mainPanel: [createSection(4), createSection(0), createSection(5)],
                sidePanel: [createSection(1), createSection(2), createSection(3)]
            }
        });
    });

})
