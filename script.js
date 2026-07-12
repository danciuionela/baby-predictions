function download() {
    const button = document.querySelector("button");

    // Ascunde butonul înainte de captură
    button.style.display = "none";

    html2canvas(document.querySelector("#card"), {
        scale: 3,
        useCORS: true
    }).then(canvas => {

        const link = document.createElement("a");
        link.download = "baby-predictions.png";
        link.href = canvas.toDataURL("image/png");
        link.click();

        // Afișează din nou butonul
        button.style.display = "block";
    });
}