const listaProposta = document.getElementById("listaProposta")

const insertProposta = () => {
    fetch('http://192.168.1.7:55200/proposta-cadastrar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    }).then((response) => {
        if(response.ok){
            location.href = 'index.html'
        }
    })
}

const viewProposta = (arr) =>{
    let indexNome = ""
    let indexPreco = ""
    listaProposta.innerHTML = ""
    arr.forEach((el) => {
        for(let i in el.beneficiario){
            indexNome += `<p class="card-text">${el.beneficiario[i].nome}</p>`
            indexPreco += `<p class="card-text">${el.beneficiario[i].preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>`
        }
        listaProposta.innerHTML += 
        `<div class="card">
        <div class="card-header">
          ${el.plano}
        </div>
        <div class="card-body">
          <h5 class="card-title">Beneficiarios</h5>
          <span class="row border-bottom mt-3">
          <span class="col">
          ${indexNome}
          </span>
          <span class="col text-right mb-3">
          ${indexPreco}
          </span>
          </span>
          <div class="text-right my-3">
          <a>Valor Total: ${el.precoTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}<a>
          </div>
          <a href="index.html" class="btn btn-primary">Voltar</a>
          <button onclick="insertProposta()" class="btn btn-success">Inserir</button>
        </div>
      </div>`
    });
}

(() => {
    listaProposta.innerHTML = 
        `<div class="d-flex justify-content-center my-5">
            <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
            </div>
         </div>
        `
    setTimeout(()=>{
        fetch('http://192.168.1.7:55200/proposta-find', {
            method: 'GET',
                }).then((response) => {
                const res = response.json()
                res.then((json) => {
                    viewProposta(json)
                })
            })
    }, 2*1000)
})()



