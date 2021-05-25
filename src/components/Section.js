import { useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { useRef } from "react"

function Section(props){
    const ref = useRef();
    const [dragged, setDragged] = useState(false);
    const [prevX, setPrevX] = useState(0);
    const [prevY, setPrevY] = useState(0);
    const mainPanel = useSelector(state => state.sections.mainPanel);
    const sidePanel = useSelector(state => state.sections.sidePanel);
    const dispatch = useDispatch();

    const dragStart = (e) => {
        setDragged(true);
    }

    /**
     * Moves the section being dragged
     * to where the mouse currently is.
     */
    const drag = (e) => {
        // Check if mouse moved
        if(e.clientX === prevX && e.clientY === prevY)
            return;
        setPrevX(e.clientX);
        setPrevY(e.clientY);
        
        let rect, left, right;
        if(mainPanel.length > 0) {
            rect = mainPanel[0].boundingBox;
            left = rect.left + rect.width/5;
            right = rect.right - rect.width/5;
        } 

        let panel = "main";
        if(sidePanel.length === 0){
            if(e.clientX > rect.left && e.clientX < left){
                panel = "side";
                dispatch({
                    type: "CHANGE_SIDE",
                    side: "left"
                });
            } else if (e.clientX > right && e.clientX < rect.right){
                panel = "side";
                dispatch({
                    type: "CHANGE_SIDE",
                    side: "right"
                });
            }
        } else if (e.clientX > sidePanel[0].boundingBox.left && e.clientX < sidePanel[0].boundingBox.right){
            panel = "side";
        }

        // Iterate through panel to determine under which section
        // the mouse currently is
        let best = 0; // The index where the mouse currently is
        let array;
        let current;
        if(panel === "main"){
            array = mainPanel;
        } else {
            array = sidePanel;
        }

        // iterate through array to find which index the mouse is at
        for(const [index, element] of array.entries()){
            
            // can't move element under itself (would move to its own index)
            if(element.props.id === props.id){
                current = index;
                continue;
            }

            // if mouse is below the middle of the section, move down
            let rect = element.boundingBox;
            let middle = rect.bottom - rect.height/2;

            if(e.clientY > middle){
                // this has to do with if the section is moving up or down
                index > current ? best = index : best = index + 1
            } else {
                break;
            }
        }

        dispatch({
            type: "MOVE_SECTION",
            id: props.id,
            index: best,
            panel: panel
        });
    }

    const dragEnd = (e) => {
        setDragged(false);
    }

    useEffect(() => {
        dispatch({
            type: "EDIT_BOUNDS",
            id: props.id,
            boundingBox: ref.current.getBoundingClientRect()
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(mainPanel)]);
    
    return(
        <div className={`section ${dragged ? "dragged" : ""}`} ref={ref} draggable="true" onDragStart={dragStart} onDrag={drag} onDragEnd={dragEnd}>
            {props.children}
        </div>
    );
}

export default Section;