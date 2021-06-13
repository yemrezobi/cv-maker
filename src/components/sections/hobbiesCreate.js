import React from "react";
const HobbiesList = props => {
    return props.hobbiesDetails.map((val, idx) => {
        let name = `name-${idx}`;
        return (
            <div className="form-row" key={val.index}>
                <table>
                    <tr>
                        <td>
                            <label>Name</label>
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                data-id={idx}
                                id={name}
                            />
                        </td>
                        <td className="col p-4">
                            {idx === 0 ? (
                                <button
                                    onClick={() => props.add()}
                                    type="button"
                                    className="btn btn-primary text-center"
                                >
                                    Add
                                </button>
                            ) : (
                                <button
                                    onClick={() => props.delete(val)}
                                >
                                    Delete
                                </button>
                            )}
                        </td>
                    </tr>
                </table>
            </div>
        );
    });
};
export default HobbiesList;
