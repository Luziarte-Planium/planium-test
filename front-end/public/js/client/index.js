const listaAllProposta = document.getElementById("listaAllProposta")

const viewAllProposta = (arr) =>{
    listaAllProposta.innerHTML = ""
    arr.forEach((el, index) => {
        listaAllProposta.innerHTML += 
        `<tr>
        <th scope="row">${index + 1}</th>
        <td>${el.plano}</td>
        <td>${el.precoTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
        </tr>`
    });
}

(async() =>{
    const Allproposta = await fetch('http://10.4.0.82:55200/proposta', {
        method: 'GET'})

        const data = await Allproposta.json()
        viewAllProposta(data)    
})()




