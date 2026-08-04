const btnAdicionarTarefa = document.querySelector('.app__button--add-task')
const formAdicionarTarefa = document.querySelector('.app__form-add-task')
const textArea = document.querySelector('.app__form-textarea')

const tarefas = []

btnAdicionarTarefa.addEventListener('click', () => {
    formAdicionarTarefa.classList.toggle('hidden')
})

formAdicionarTarefa.addEventListener('submit', (evento) => {
    // não recarrega a página ao enviar o form.
    evento.preventDefault()
    
    const tarefa = {
        descricao: textArea.value
    }

    tarefas.push(tarefa)
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
})