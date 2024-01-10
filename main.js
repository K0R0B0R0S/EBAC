jQuery(function () {
    $('#enviar').on("click", function (e) {
        e.preventDefault();
        const listagem = $('#listagem')
        const texto = $('#texto').val()
        const newElement = createUl(texto)
        newElement.on("click", function (e) {
            newElement.addClass("marked")
        })
        newElement.appendTo(listagem)
    })
})

function createUl(text) {
    return $(`
    <li> ${text} </li>
    `)
}