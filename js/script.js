alert("Welcome to my Resume");

function toggleText() {
    var moreText = document.getElementById("moreText");
    var buttonText = document.querySelector("button");

    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline"; 
        buttonText.textContent = "Show Less"; 
    } else {
        moreText.style.display = "none"; 
        buttonText.textContent = "Read More"; 
    }
}
