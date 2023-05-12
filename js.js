function cambioHtml(htmll) {
    let urlHtml = `${htmll}.html`;//tomo la url desde html
    $(document).ready(function () {
        $.ajax({
            url: urlHtml,
            type: "GET",
            dataType: "html",
            success: function (nuevoHtml) {
                $("#contenido").html(nuevoHtml); // Reemplazar el contenido del contenedor con el nuevo HTML
            },
            error: function (errorThrown) {
                console.error(errorThrown);
            }
        })
    })
}
