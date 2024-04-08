$(document).ready(function() {

// mascaras
    $('#nome').mask('SSSSSSSSSSSSSSSSSSSSSSSSSSSSSS',{
    placeholder: 'Carlos Eduardo de Almeida',
    translation: {
        'S' : {
            pattern: /[A-Za-z\s]/
        }
    }})

    $('#numero').mask('(00) 00000-0000', {
        placeholder: '(11) 91234-5678'
    })
    
    $('#email').mask('SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS',{
        placeholder: 'emailgenerico@gmail.com',
        translation: {
            'S' : {
                pattern: /[A-Za-z0-9@.\s]/
            }
        }})

        $('#cpf').mask('000.000.000-00', {
            placeholder: '123.456.789-10'
        })

        $('#cep').mask('00000-000', {
            placeholder: '12345-678'
        })

        $('#cidade').mask('SSSSSSSSSSSSSSSSSSSSSSSSSSSSSS',{
            placeholder: 'Atibaia',
            translation: {
                'S' : {
                    pattern: /[A-Za-z\s]/
                }
            }})









$('form').validate({
    rules: {
        nome: {
            required: true
        }, 
        email: {
            required: true
        },
        numero: {
            required: true
        },
        CPF: {
            required: true
        },
        estado: {
            required: true
        },
        CEP: {
            required: true
        },
        cidade: {
            required: true
        }
    },
    messages: {
        nome: "Por favor, seu nome COMPLETO",
        email: "Um email de contato",
        numero: "Telefone celular",
        CPF: "Seu numero CPF",
        endereco: "Sua cidade",
        CEP: "Cep da sua Rua",
        estado: "Estado onde mora",
        cidade: "Cidade onde reside"
    }
})


























})