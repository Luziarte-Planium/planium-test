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

(() =>{
    listaAllProposta.innerHTML = 
        `<tr>
            <td colspan="3" class="text-center py-5">
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </td>          
        </tr>    
        `
        fetch('http://192.168.1.7:55200/proposta', {
            method: 'GET'
            }).then((response) => {
                const data = response.json()
                data.then((json) => viewAllProposta(json))
            })  
})()




