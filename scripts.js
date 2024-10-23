
let p = document.querySelector('p')
let input = document.querySelector('input')

const contact = [
    {name: 'Rodolfo', number: '(11) 11111-1111'},
    {name: 'Paulo', number: '(22) 22222-2222'},
    {name: 'Aline', number: '(33) 33333-3333'},
    {name: 'Maria', number: '(44) 44444-4444'},
    {name: 'Marcos', number: '(55) 55555-5555'},
    {name: 'Jose', number: '(66) 66666-6666'},
    {name: 'Jaqueline', number: '(77) 77777-7777'},
    {name: 'Fabio', number: '(88) 88888-8888'},
    {name: 'Pablo', number: '(99) 99999-9999'},
    {name: 'Ronaldo', number: '(12) 12323-1212'},
    {name: 'Victor', number: '(21) 12343-1231'},
    {name: 'Vinicius', number: '(34) 12343-4564'},
    {name: 'João Rubens', number: '(87) 19273-1029'},
    {name: 'Maria Victoria', number: '(02) 18278-1834'},
    {name: 'Julio', number: '(23) 10293-8276'},
    {name: 'Nathan', number: '(54) 01927-1928'},
    {name: 'Enzo', number: '(65) 02936-0192'},
    {name: 'Nicolas', number: '(12) 01836-0282'},
    {name: 'Flipe', number: '(11) 86438-0986'},
    {name: 'Calito', number: '(34) 01926-0986'},
    {name: 'Neiva', number: '(23) 92842-9375'},
    {name: 'Leo', number: '(76) 02847-2947'},

]

function search() {

    for(let i = 0; i < contact.length ; i++) {
        
        if (input.value.toLowerCase() == contact[i].name.toLowerCase()) {
            p.innerHTML = `Contato encontrado nome:${contact[i].name} tel: ${contact[i].number}`
            break
        } else{
           p.innerHTML = 'contato não encontrado' 
        } 
    }        
}