const load = (id_user, id_page) => {
    
    fetch(`/getHTML?id_user=${id_user}&id_page=${id_page}`, {
        method: "GET",
    }).then(x => {
        return x.text();
    }).then(value => {
        document.querySelector("body").innerHTML = value;
        getElements();
        createListeners();
    })
}




document.addEventListener("DOMContentLoaded", () => {
    getElements();
    createListeners();
    load(current_user, current_page)
})