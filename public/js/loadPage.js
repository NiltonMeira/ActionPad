const load = (id_user, id_page) => {
    
    fetch(`/getHTML?id_user=${id_user}&id_page=${id_page}`, {
        method: "GET",
    }).then(x => {
        return x.text();
    }).then(value => {
        document.querySelector("body").innerHTML = value;
        getElements();
        Array.from(document.querySelectorAll(".myCanvas")).forEach(x => {
            initializeDrawing(x);
        })
        createListeners();

    })
}




document.addEventListener("DOMContentLoaded", () => {
    getElements();
    createListeners();
    load(current_user, current_page)
})