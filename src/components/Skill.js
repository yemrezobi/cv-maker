import ReactStars from "react-star-rating-component";
import _uniqueId from 'lodash/uniqueId';


import React, { useState } from "react";


function App() {
    const [inputList, setInputList] = useState([{ firstName: "", rating: "range" }]);

    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };


    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };


    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { firstName: "", rating: "range" }]);

    };

    const [count] = useState(_uniqueId('prefix-'));


    return (
        <div className="section">
            <h5 className="section">Skill</h5>
            <input className="skillsgroup" type="text" placeholder="Entere the name of the skills group" />
            {inputList.map((x, i) => {
                return (
                    <div className="skill">
                        <table>
                            <tr>
                                <td>
                                    <input
                                        name="firstName"
                                        placeholder="Enter Skill Name"
                                        value={x.firstName}
                                        onChange={e => handleInputChange(e, i)}
                                    />
                                </td>
                                <td>
                                    <input type="range" min="0" max="100" defaultValue="50" step="5" onChange={e => handleInputChange(e, i)} />
                                </td>
                            </tr>
                        </table>

                        <div className="btn-box">
                            {inputList.length !== 1 && <button
                                className="mr10"
                                onClick={() => handleRemoveClick(i)}>Remove</button>}
                            {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
                        </div>

                    </div>


                );
            })}
        </div>
    );
}

export default App;






/*
                        <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>





import { useDispatch } from "react-redux";
import React from "react"


<td>
                                    <form name="rating">
                                        <div class="stars">
                                            <input type="radio" name={"star_a_" + i} class="star-1" id={"star_a_" + i} />
                                            <label class="star-1" for={"star_a_" + i}>1</label>
                                            <input type="radio" name={"star_b_" + i} class="star-2" id={"star_b_" + i} />
                                            <label class="star-2" for={"star_b_" + i}>2</label>
                                            <input type="radio" name={"star_c_" + i} class="star-3" id={"star_c_" + i} />
                                            <label class="star-3" for={"star_c_" + i}>3</label>
                                            <input type="radio" name={"star_d_" + i} class="star-4" id={"star_d_" + i} />
                                            <label class="star-4" for={"star_d_" + i}>4</label>
                                            <input type="radio" name={"star_e_" + i} class="star-5" id={"star_e_" + i} />
                                            <label class="star-5" for={"star_e_" + i}>5</label>
                                            <span></span>
                                        </div>
                                    </form>
                                </td>


function StarIcon(props) {
    const { fill = 'none' } = props;
    return (
        <svg class="w-6 h-6" fill={fill} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
    );
}

function RatingIcon(props) {
    const {
        index,
        rating,
        hoverRating,
        onMouseEnter,
        onMouseLeave,
        onSaveRating,
    } = props;
    const fill = React.useMemo(() => {
        if (hoverRating >= index) {
            return 'black';
        } else if (!hoverRating && rating >= index) {
            return 'black';
        }
        return 'none';
    }, [rating, hoverRating, index]);
    return (
        <div
            className="cursor-pointer"
            onMouseEnter={() => onMouseEnter(index)}
            onMouseLeave={() => onMouseLeave()}
            onClick={() => onSaveRating(index)}>
            <StarIcon fill={fill} />
        </div>
    )
}





function Skill(props) {


    const [rating, setRating] = React.useState(0);
    const [hoverRating, setHoverRating] = React.useState(0);
    const onMouseEnter = (index) => {
        setHoverRating(index);
    };
    const onMouseLeave = () => {
        setHoverRating(0);
    };
    const onSaveRating = (index) => {
        setRating(index);
    };



    const dispatch = useDispatch();

    const remove_skill = (e) => {
        dispatch({
            type: "REMOVE_SECTION",
            id: props.id
        });
    }

    return (
        <div className="section skill">
            <tr className="sectionselected">
                <td>
                    <input type="text" placeholder="skill1" />
                </td>
                <td>
                    <div className="flex">
                        {[1, 2, 3, 4, 5].map((index) => {
                            return (
                                <RatingIcon
                                    index={index}
                                    rating={rating}
                                    hoverRating={hoverRating}
                                    onMouseEnter={onMouseEnter}
                                    onMouseLeave={onMouseLeave}
                                    onSaveRating={onSaveRating} />
                            )
                        })}
                    </div>
                </td>
            </tr>
            <button onClick={remove_skill}>
                Remove Me
            </button>

        </div>
    )
}

export default Skill;
*/