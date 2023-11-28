const input = document.getElementById("input");
const submit = document.getElementById("submit");
const subscription = document.querySelector(".subscription");
const content = document.querySelector(".content");
const success = document.querySelector(".success");
const dismiss = document.getElementById("dismiss");
const email = document.getElementById("email");

input.addEventListener("keydown", (e) => {
    if (e.key == "Enter") checkTheEmail()
})


submit.onclick = () => checkTheEmail()

dismiss.onclick = () => dismissAndReturnToFormPage()


function checkTheEmail() {
    let re = /^\w*@\w*.[a-z]{2,3}$/;
    if (re.test(input.value)) {
        content.classList.add("remove");
        subscription.classList.remove("invalid")
        subscription.classList.add("valid")
        success.classList.add("show");
        email.textContent = input.value;
        input.value = "";
    } else {
        subscription.classList.add("invalid")
    }
}

function dismissAndReturnToFormPage() {
    content.classList.remove("remove");
    success.classList.remove("show");
    subscription.classList.remove("valid");
}