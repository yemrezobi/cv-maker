function SectionSelector() {
    var instance = 0;
    function isPressed() {

        var element = document.getElementsByClassName("cv-editor box")[0];
        instance++;

        // Create new input field
        var newInput = document.createElement("INPUT");

        // var newInput = document.createElement("INPUT");

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

        //document.body.insertBefore(document.createElement("BR"), element);
        //document.body.insertBefore(newInput, element);
        //document.body.insertBefore(label, newInput);

        /*card.innerHTML = "Hello";
        var h1 = document.createElement("h1");
        h1.innerHTML = "Some h1 text";

        card.append(h1);
        document.body.append(card);

        var inviteSection = document.getElementsByClassName("cv-editor box")[0];

        inviteSection.append(card);*/

    }


    return (
        <div class="select-section box">
            <p>section selector placeholder</p>
            <button id="clicky" className="sectionAdd" onClick={isPressed} type="button">Click me</button>
        </div>
    )
}


export default SectionSelector