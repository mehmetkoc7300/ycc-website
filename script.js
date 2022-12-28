const questions = document.querySelectorAll("#question")


function answer(e) {
    e.target.nextElementSibling.classList.toggle("on")
}

questions.forEach((question) => {
    question.addEventListener("click", answer)
})