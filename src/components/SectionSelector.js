import React from 'react';




const normalizePhoneNumber = (value) => {
    return value.replace(/\s/g, "").replace(/s/g, "").match(/.{1,6}/g)?.join(" ").substr(0, 11) || ""
}



function SectionSelector() {




    const { useState, useCallback } = React;

    // The added element component
    const RefSection = () =>
        <div class="sectionselected">
            <form action={"AddReference"}>
                <h4>Add New Refrence</h4>
                <ul>
                    <li>
                        <label for="name">Name : </label><br />
                        <input type="text" name="name" id="" />
                    </li>
                    <br />
                    <li>
                        <label for="Lname">Last Name : </label><br />
                        <input type="text" name="Lname" id="" />
                    </li>
                    <br />
                    <li>
                        <label for="phone">Phone : </label><br />
                        <input type="text" className="phone" name="phone" placeholder="555555 5555" id="phone"
                            onChange={(event) => {
                                const { value } = event.target
                                event.target.value = normalizePhoneNumber(value)
                            }} />
                    </li>
                    <br />
                    <li>
                        <label for="email">Email : </label><br />
                        <input type="email" name="email" id="" />
                    </li>
                </ul>
            </form>
            <hr className="split" />
        </div>

    // The "app" component
    const AddRef = () => {
        const [count, setCount] = useState(0);
        return <div>
            <button className="sectionAdd" id="clicky" onClick={() => setCount(count + 1)}>Add Refrence</button>
            {Array(count).fill(<RefSection />)}
        </div>
    };

    // The added element component
    const EduSection = () =>
        <div class="sectionselected">
            <form action={"AddEducation"}>
                <h4>Add New Education</h4>
                <ul>
                    <li id="li_1">
                        <label class="description" for="element_1">Education/course name </label>
                        <div>
                            <input id="element_1" name="element_1" type="text" maxlength="50" />
                        </div>
                    </li>
                    <li id="li_2">
                        <label class="description" for="element_2">Organization </label>
                        <div>
                            <input id="element_2" name="element_2" type="text" maxlength="50" />
                        </div>
                    </li>
                    <li id="li_3">
                        <label class="description" for="element_3">City </label>
                        <div>
                            <input id="element_3" name="element_3" type="text" maxlength="50" />
                        </div>
                    </li>
                    <li id="li_4">
                        <label class="description" for="element_4">Year Of Start - </label>
                        <label class="description" for="element_6">Year Of End </label>
                        <div>
                            <input type="date" class="Date" id="element_4" name="element_4" type="text" maxlength="4" />
                            <input class="Date" id="element_6" name="element_6" type="text" maxlength="4" />
                        </div>
                    </li>
                    <li id="li_5">
                        <label class="description" for="element_5">Description </label>
                        <div>
                            <textarea id="Description" name="element_5" />
                        </div>
                    </li>
                </ul>
            </form>
            <hr className="split" />

        </div>
    // The "app" component
    const AddEdu = () => {
        const [count, setCount] = useState(0);
        return <div>
            <button className="sectionAdd" id="clicky" onClick={() => setCount(count + 1)}>Add Education</button>
            {Array(count).fill(<EduSection />)}
        </div>
    };

    return (
        <div class="select-section box">
            <p>section selector placeholder</p>
            <AddRef />
            <AddEdu />
        </div>
    )
}


export default SectionSelector







// Render

/*const myelement = (
    var element = document.getElementById("1");

);*/
    //}
    // Create new input field
    //var newInput = document.createElement("INPUT");

/*
        newInput.id = "text" + instance;
        newInput.name = "text" + instance;
        newInput.type = "text";

        var label = document.createElement("Label");

        label.htmlFor = "text" + instance;
        label.innerHTML = "Hello : ";

        element.append(label)
        element.append(newInput);
        var split = document.createElement("HR")
        split.className = "split";
        element.append(split);

*/
    /////////////

/*
content.push(
<div>
                                        <form action={"Addreference" + instance}>
                                            <ul>
                                                <li>
                                                    <label for={"name" + instance}>Name : </label><br />
                                                    <input type="text" name={"name" + instance} id="" />
                                                </li>
                                                <br className="split" />
                                                <li>
                                                    <label for={"Lname" + instance}>Last Name : </label><br />
                                                    <input type="text" name="Lname" id="" />
                                                </li>
                                                <br className="split" />
                                                <li>
                                                    <label for={"phone" + instance}>Phone : </label><br />
                                                    <input type="number" name={"phone" + instance} id="" />
                                                </li>
                                                <br className="split" />
                                                <li>
                                                    <label for={"email" + instance}>Email : </label><br />
                                                    <input type="email" name={"email" + instance} id="" />
                                                </li>
                                            </ul>
                                        </form>
                                    </div>);


ReactDOM.render(content, document.getElementById("1"))

*/
