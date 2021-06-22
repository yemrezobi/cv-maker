import { useSelector } from "react-redux"
import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"

import React from "react";
import Pdf from "react-to-pdf";
import { render } from "react-dom";
import { useReactToPrint } from "react-to-print";


import { PDFExport } from '@progress/kendo-react-pdf';
function CVEditor(props) {

    const mainPanel = useSelector(state => state.sections.mainPanel);
    const sidePanel = useSelector(state => state.sections.sidePanel);
    const side = useSelector(state => state.sections.side);
    const ref = useRef();
    const dispatch = useDispatch();

    const dragOver = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        if (sidePanel.length === 0) {
            dispatch({
                type: "CHANGE_SIDE",
                side: null
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(sidePanel)])



    const handlePrint = useReactToPrint({
        content: () => mainPanel.current,
    });

    return (
        <div className="cv-editor box" ref={ref} onDragOver={dragOver}>
            {side === "left" ?
                <div className="cv-side-panel cv-side-panel-left">
                    {sidePanel}
                </div>
                : null}
            <div ref={mainPanel} className={`cv-main-panel ${side ? "cv-main-panel-tight" : ""}`}>
                {mainPanel}
                <hr className="split" />
                <button className="sectionBut" onClick={handlePrint}>Print this out!</button>
            </div>
            {side === "right" ?
                <div className="cv-side-panel cv-side-panel-right">
                    {sidePanel}
                </div>
                : null}

        </div>

    );
}

export default CVEditor
