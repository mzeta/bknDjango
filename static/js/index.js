let formulario = document.getElementById("form-data");
console.log(formulario);

const dataFormulario = new FormData(formulario);
console.log(dataFormulario);

let NodeInputs = document.querySelectorAll(
    "#form-data  input:not(input[type='submit']"
);

console.log(NodeInputs);

function validation(validators) {
    const generalValidator = Object.entries(validators).map(([key, value]) => {
        let booleanState = value(document.getElementsByName(key)[0].value);
        if (booleanState == false) {
            alert(`Por favor ingrese un ${key} válido`);
        }
        return booleanState;
    });

    return generalValidator.every((e) => e === true);
}

const validators = {
    Nombre: (input) => isNaN(Number(input)),
    Mascota: (input) => isNaN(Number(input)),
    email: (email) => {
        const regexp =
            /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+/;
        return regexp.test(email);
    },
};

document.querySelector("form").addEventListener("submit", (e) => {
    return validation(validators);

});

