function enviarName() {
    var name = document.getElementById("name").value;
    const data = { name: name }
    fetch(" http://127.0.0.1:5000/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

    })

    .then(Response => Response.json())
        .then(name => {
            console.log('Sucess:', name);
        })
        .catch((error) => {
            console.error('Error:',
                error);
        });

    document.getElementById("resposta").textContent = alert("Nome registrado: " + name);

}
var enviar = document.getElementById("enviar");
enviar.addEventListener("click", enviarName);