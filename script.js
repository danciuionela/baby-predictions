function generateCertificate() {
    const name = document.getElementById("name").value.trim();
    if(name === "") {
        alert("Te rugăm să completezi numele 🤍");
        return;
    }
    let personalities = [];
    document
    .querySelectorAll(".checks input:checked")
    .forEach(item => {
        personalities.push(item.value);
    });
    const prediction = {
        name: name,
        relation:
        document.getElementById("relation").value,
        date:
        document.getElementById("month").value
        + " "
        + document.getElementById("day").value,
        weight:
        document.getElementById("weight").value,
        height:
        document.getElementById("height").value,
        hair:
        document.getElementById("hair").value,
        eyes:
        document.getElementById("eyes").value,
        look:
        document.getElementById("look").value,
        personality:
        personalities.join(", "),
        word:
        document.getElementById("word").value,
        job:
        document.getElementById("job").value,
        message:
        document.getElementById("message").value
    };
    localStorage.setItem(
        "adamPrediction",
        JSON.stringify(prediction)
    );
    window.location.href =
    "certificate.html";
}