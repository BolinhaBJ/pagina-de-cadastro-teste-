class validator {
    
    constructor(){
        this.validations = [
            'data-min-length',

        ]
    }

    // iniciar validação de todos os campos
    validate(form){

        // pegar os inputs
        let inputs = form.getElementsByTagName('input');

        // transformo uma HTMLCollection -> array
        let inputsArray = [...inputs];

        // loop nos inputs e validação meadiante ao que for encontrado
        inputsArray.forEach(function(input) {
            for(let i = 0; this.validations.length > i; i++) {
                // verifica se a validação atual existe no input
                if(input.getAttribute(this.validations[i]) != null) {

                    // limpando a string para virar um metodo
                    let method = this.validations[i].replace('data-', '').replace('-', '');

                    //
                    let.value = input.getAttribute(this.validations[i]);

                    // invocar o metodo
                    this[method](input, value);


                }
            }
        }, this);
    }
    // verifica se um input tem um numero minimo de caracteres
    minLength(input, minValue){

        let inputLength = input.value.length;

        let erroMessage = `o campo precisa ter pelo menos ${minValue} caracteres`;

        if(inputLength < minValue) {
            this.printMessage(input,erroMessage);

        }

    }

    // metodo para iprimir as mensagens de erro na tela
    printMessage(input, msg) {

        let template = document.querySelector('.error-validation').cloneNode(true);
        template.textContent = msg;
        let inputParent = input.parentNode;
        template.classList.remove('template');
        inputParent.appendChild(template);




    }



    
}

let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

let validator = new validator();

// evento que dispara as validações
submit.addEventListener('click', function(e){

    e.preventDefault();
    validator.validate(form);


});