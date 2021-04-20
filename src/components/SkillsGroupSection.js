import { useDispatch } from "react-redux";
import StarRatingComponent from 'react-star-rating-component';
import React from "react"
/*import Skill from "./Skill"
import { useState } from "react"
*/

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

function SkillsGroupSection(props) {

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

    const remove_skills_group = (e) => {
        dispatch({
            type: "REMOVE_SECTION",
            id: props.id
        });
    }
    //////////////////////////////

    /*
        const [count, setCount] = useState(0);
    
    
        const add_skill = (e) => {
            dispatch({
                type: "ADD_SECTION",
                section: <Skill key={"s" + count} id={"s" + count} />
            });
            setCount(count + 1);
        }*/

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


            </table>

            <button onClick={remove_skills_group}>
                Remove Me
            </button>


        </div>
    )
}











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