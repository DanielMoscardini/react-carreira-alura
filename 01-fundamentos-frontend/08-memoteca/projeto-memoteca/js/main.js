import ui from './ui.js'
import api from './api.js'

const botaoCancelar = document.querySelector('#botao-cancelar')

document.addEventListener('DOMContentLoaded', () => {
    ui.renderizarPensamentos()

    const formularioPensamento = document.querySelector('#pensamento-form')
    formularioPensamento.addEventListener('submit', manipularSubmissaoFormulario)

    botaoCancelar.addEventListener('click', manipularCancelamento)
})

function manipularCancelamento() {
    ui.limparFormulario()
}

async function manipularSubmissaoFormulario(event) {
    event.preventDefault()
    const id = document.querySelector('#pensamento-id').value
    const conteudo = document.querySelector('#pensamento-conteudo').value
    const autoria = document.querySelector('#pensamento-autoria').value
    

    try {
        await api.salvarPensamento({ conteudo, autoria })
        ui.renderizarPensamentos()
    } catch {
        alert('Erro ao salvar pensamentos')
    }
}


