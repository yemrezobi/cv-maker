function SectionSelector() {

    return (
        <div class="select-section box">
            <p>section selector placeholder</p>
            <button className="sectionAdd" onClick={isPressed()} type="button">Click me</button>
        </div>

    )


}
function isPressed() {
    var card = document.createElement("div");
    card.innerHTML = "Hello";

    var h1 = document.createElement("h1");
    h1.innerHTML = "Some h1 text";

    card.append(h1);
    document.body.append(card);

}



export default SectionSelector