$(document).ready(function () {
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    })
    
    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    })
    
    $('#cep').mask('00000-000', {
        placeholder: '012345-678'
    })
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: true
    })
    
    $('form').validate({
        rules: {
            nome: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                minlength: 9
            },
            endereco: {
                required: true,
            },
            cep: {
                required: true,
                minlength: 9
            },
            cpf: {
                required: true,
                minlength: 14
            },
        },
        messages: {
            nome: {
                required: "Por favor insira seu nome completo",
                minlength: "O nome deve ter pelo menos 3 caracteres."
            },
            email: {
                required: "Por favor, insira seu e-mail.",
                email: "Digite um e-mail válido."
            },
            telefone: {
                required: "Por favor, insira seu telefone.",
                minlength: "Digite um telefone válido no formato (00) 00000-0000."
            },
            cpf: {
                required: "Por favor, insira seu CPF.",
                minlength: "Digite um CPF válido no formato 000.000.000-00."
            },
            endereco: {
                required: "Por favor, insira seu endereço."
            },
            cep: {
                required: "Por favor, insira seu CEP.",
                minlength: "Digite um CEP válido no formato 00000-000."
            }
        },
        submitHandler: function (form) {
            alert("Parabens pela sua aquisição!")
            form.submit();
        },
        invalidHandler: function(evento, validator) {
            let camposIncorretos = validator.numberOfInvalids();
            if (camposIncorretos) {
                alert("Por favor, preencha os campos para prosseguir com a compra!");
            }
        }
    })
})