import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import CVEditor from './CVEditor';
import SectionTest from './sections/SectionTest';
import sections from '../reducers/sections'

const createSection = (id) => {
    return(<SectionTest key={id} id={id} />);
}

const createTestStore = () => {
    const store = createStore(
        combineReducers({
            sections
        })
    );

    return store;
}

let store;
describe("tests cveditor", () => {

    beforeEach(() => {
        store = createTestStore();
        store.dispatch({
            type: "ADD_SECTION",
            section: createSection(0),
            panel: "main"
        });
        store.dispatch({
            type: "ADD_SECTION",
            section: createSection(1),
            panel: "main"
        });
        store.dispatch({
            type: "ADD_SECTION",
            section: createSection(2),
            panel: "main"
        });
        store.dispatch({
            type: "ADD_SECTION",
            section: createSection(3),
            panel: "main"
        });
    });

    it("renders cveditor", () => {
        render(<Provider store={store}><CVEditor /></Provider>);
        const section0 = screen.getByText(/Section 0/i);
        const section1 = screen.getByText(/Section 1/i);
        const section2 = screen.getByText(/Section 2/i);
        const section3 = screen.getByText(/Section 3/i);
        expect(section0).toBeInTheDocument();
        expect(section1).toBeInTheDocument();
        expect(section2).toBeInTheDocument();
        expect(section3).toBeInTheDocument();
    });

});