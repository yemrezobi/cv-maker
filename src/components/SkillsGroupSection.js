import { useDispatch } from "react-redux";
import React from "react"
import Skill from "./Skill"
import { useState } from "react"
//import ReactStars from "react-star-rating-component";
import _uniqueId from 'lodash/uniqueId';

//import StarRating from "react-star-ratings"



function SkillsGroupSection(props) {

    const dispatch = useDispatch();

    const remove_skills_group = (e) => {
        dispatch({
            type: "REMOVE_SECTION",
            id: props.id
        });
    }


    const [count, setCount] = useState(0);
    const [id] = useState(_uniqueId('prefix-'));


    const add_skill = (e) => {
        dispatch({
            type: "ADD_SECTION",
            section: <Skill key={"s" + count} id={"s" + count} />
        });
        setCount(count + 1);
    }


    return (
        <div className="section">
            <span>Skills {props.id}</span>
            <table>
                <th>
                    <input className="skillsgroup" type="text" placeholder="Entere the name of the skills group" />
                </th>
                <tr>
                    <td>
                        <input type="text" placeholder="skill1" />
                    </td>
                    <td>
                        <form name="rating">
                            <div class="stars">
                                <input type="radio" name={"star_a1" + id} class="star-1" id={"star_a1" + id} />
                                <label class="star-1" for={"star_a1" + id}>1</label>
                                <input type="radio" name={"star_b1" + id} class="star-2" id={"star_b1" + id} />
                                <label class="star-2" for={"star_b1" + id}>2</label>
                                <input type="radio" name={"star_c1" + id} class="star-3" id={"star_c1" + id} />
                                <label class="star-3" for={"star_c1" + id}>3</label>
                                <input type="radio" name={"star_d1" + id} class="star-4" id={"star_d1" + id} />
                                <label class="star-4" for={"star_d1" + id}>4</label>
                                <input type="radio" name={"star_e1" + id} class="star-5" id={"star_e1" + id} />
                                <label class="star-5" for={"star_e1" + id}>5</label>
                                <span></span>
                            </div>
                        </form>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="text" placeholder="skill1" />
                    </td>
                    <td>
                        <form name="rating">
                            <div class="stars">
                                <input type="radio" name={"star_a2" + id} class="star-1" id={"star_a2" + id} />
                                <label class="star-1" for={"star_a2" + id}>1</label>
                                <input type="radio" name={"star_b2" + id} class="star-2" id={"star_b2" + id} />
                                <label class="star-2" for={"star_b2" + id}>2</label>
                                <input type="radio" name={"star_c2" + id} class="star-3" id={"star_c2" + id} />
                                <label class="star-3" for={"star_c2" + id}>3</label>
                                <input type="radio" name={"star_d2" + id} class="star-4" id={"star_d2" + id} />
                                <label class="star-4" for={"star_d2" + id}>4</label>
                                <input type="radio" name={"star_e2" + id} class="star-5" id={"star_e2" + id} />
                                <label class="star-5" for={"star_e2" + id}>5</label>
                                <span></span>
                            </div>
                        </form>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="text" placeholder="skill1" />
                    </td>
                    <td>
                        <form name="rating">
                            <div class="stars">
                                <input type="radio" name={"star_a3" + id} class="star-1" id={"star_a3" + id} />
                                <label class="star-1" for={"star_a3" + id}>1</label>
                                <input type="radio" name={"star_b3" + id} class="star-2" id={"star_b3" + id} />
                                <label class="star-2" for={"star_b3" + id}>2</label>
                                <input type="radio" name={"star_c3" + id} class="star-3" id={"star_c3" + id} />
                                <label class="star-3" for={"star_c3" + id}>3</label>
                                <input type="radio" name={"star_d3" + id} class="star-4" id={"star_d3" + id} />
                                <label class="star-4" for={"star_d" + id}>4</label>
                                <input type="radio" name={"star_e3" + id} class="star-5" id={"star_e3" + id} />
                                <label class="star-5" for={"star_e3" + id}>5</label>
                                <span></span>
                            </div>
                        </form>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="text" placeholder="skill1" />
                    </td>
                    <td>
                        <form name="rating">
                            <div class="stars">
                                <input type="radio" name={"star_a4" + id} class="star-1" id={"star_a4" + id} />
                                <label class="star-1" for={"star_a4" + id}>1</label>
                                <input type="radio" name={"star_b4" + id} class="star-2" id={"star_b4" + id} />
                                <label class="star-2" for={"star_b4" + id}>2</label>
                                <input type="radio" name={"star_c4" + id} class="star-3" id={"star_c4" + id} />
                                <label class="star-3" for={"star_c4" + id}>3</label>
                                <input type="radio" name={"star_d4" + id} class="star-4" id={"star_d4" + id} />
                                <label class="star-4" for={"star_d4" + id}>4</label>
                                <input type="radio" name={"star_e4" + id} class="star-5" id={"star_e4" + id} />
                                <label class="star-5" for={"star_e4" + id}>5</label>
                                <span></span>
                            </div>
                        </form>
                    </td>
                </tr>

                <tr>
                    <td>
                        <button onClick={add_skill}>
                            add skill
                        </button>
                    </td>
                </tr>


            </table>

            <button onClick={remove_skills_group}>
                Remove Me
            </button>


        </div>
    )
}


/*<form>
                            <div class="stars">
                                <input type="radio" name={"star_a_" + count} class="star-1" id={"star_a_" + count} />
                                <label class="star-1" for={"star_a_" + count}>1</label>
                                <input type="radio" name={"star_b_" + count} class="star-2" id={"star_b_" + count} />
                                <label class="star-2" for={"star_b_" + count}>2</label>
                                <input type="radio" name={"star_c_" + count} class="star-3" id={"star_c_" + count} />
                                <label class="star-3" for={"star_c_" + count}>3</label>
                                <input type="radio" name={"star_d_" + count} class="star-4" id={"star_d_" + count} />
                                <label class="star-4" for={"star_d_" + count}>4</label>
                                <input type="radio" name={"star_e_" + count} class="star-5" id={"star_e_" + count} />
                                <label class="star-5" for={"star_e_" + count}>5</label>
                                <span></span>
                            </div>
                        </form>
                        
                        
                        
                        
                        <ReactStars className="rating-stars"
                            count={5}
                            onChange={ratingChanged}
                            size={25}
                            activeColor="#0044a7"
                        />
                        */







/*
function StarIcon(props) {
    const {fill = 'none'} = props;
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
            return 'yellow';
        } else if (!hoverRating && rating >= index) {
            return 'yellow';
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
/////////////////////
<div className="box flex">
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

*/

export default SkillsGroupSection