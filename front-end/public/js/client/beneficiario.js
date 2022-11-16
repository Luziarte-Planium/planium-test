const nome = document.getElementById("nome")
const plano = document.getElementById("plano")
const idade = document.getElementById("idade")
const listaBeneficiario = document.getElementById("listaBeneficiario")
const valuePlano = document.getElementById("valuePlano")

const _dataBeneficiario = []

const beneficiario = () =>{
    let valueBeneficiario = {
        "nome" : nome.value,
        "idade": idade.value
    }
    _dataBeneficiario.push(valueBeneficiario)
    viewBeneficiario(_dataBeneficiario)
}

(async () => {
    const planos = await fetch('http://10.4.0.82:55200/planos', {
        method: 'GET'})

        const data = await planos.json()
        listarValores(data)    
})()

const listarValores = (arr) => {
    arr.forEach((el) => {
        let option = document.createElement("option")
        option.value = el.nome
        valuePlano.appendChild(option)
    });
}

const viewBeneficiario = (arr) =>{
    listaBeneficiario.innerHTML = ""
    arr.forEach((el, index) => {
        listaBeneficiario.innerHTML += 
        `<tr>
        <th scope="row">${index + 1}</th>
        <td>${el.nome}</td>
        <td>${el.idade}</td>
        </tr>`
    });
}

const inserirBeneficiario = async ()=>{  
    await fetch('http://10.4.0.82:55200/beneficiarios-cadastrar', {
        method: 'POST',
        body : JSON.stringify({
        "plano" : plano.value,
        "beneficiario" : _dataBeneficiario 
        }),
        headers: { 'Content-Type': 'application/json' }}).then((response) => {
            if(response.ok){
                location.href = 'proposta.html'
            }
        })
}





