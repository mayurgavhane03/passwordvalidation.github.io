const passwordInput = document.querySelector(".pass-field input");
const eyeicon = document.querySelector(".pass-field i ");
const requirementlist = document.querySelectorAll(".requirement-list")

const requirement = [
    {regex: /.{8,}/, index: 0},
    {regex: /[0-9]/, index:1},
    {regex: /[a-z]/, index:2},
    {regex: /[^A-Za-z0-9]/, index:3},
    {regex:/[A-Z]/, index:4},
]

passwordInput.addEventListener("keyup" , (e) => {

    requirement.forEach(item => {
        const isvalid = item.regex.test(e.target.value);
        const requirementitem = requirementlist[item.index];


        if (isvalid){
            requirementitem.classList.add("valid");
            requirementitem.firstElementChild.className = "fa-solid fa-check";

        }

        else {
            requirementitem.classList.remove("valid");
            requirementitem.firstElementChild.className = "fa-solid fa-circle";
        }
    });
});


eyeicon.addEventListener("click", () => {
    passwordInput.type = passwordInput.type === "password"?"text": "password";

    eyeicon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`;
});



