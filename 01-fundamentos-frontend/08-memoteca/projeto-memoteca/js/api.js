const api = {

    // buscando todos os pensamentos
    async buscarPensamentos() {
        try {

            const response = await fetch('http://localhost:3000/pensamentos')
            return await response.json()

        } catch {
            alert('Erro ao buscar pensamentos.')
            throw error
        }
    },

    // criando pensamento
    async salvarPensamento(pensamento) {
        try {

            const response = await fetch('http://localhost:3000/pensamentos', {
                method: 'POST', // enviar informação'
                headers: {
                    'Content-Type': 'application/json' // tipo de conteudo enviado na requisição
                },
                body: JSON.stringify(pensamento) // converte de JS para string JSON

            })
            return await response.json()

        } catch {
            alert('Erro ao salvar pensamento.')
            throw error
        }
    },

    // buscando pensamento específico
    async buscarPensamentoPorId(id) {
        try {

            const response = await fetch(`http://localhost:3000/pensamentos/${id}`)
            return await response.json()

        } catch {
            alert('Erro ao buscar pensamento.')
            throw error
        }
    },

    async editarPensamento(pensamento) {
        try {

            const response = await fetch(`http://localhost:3000/pensamentos/${pensamento.id}`, {
                method: 'PUT', // enviar informação'
                headers: {
                    'Content-Type': 'application/json' // tipo de conteudo enviado na requisição
                },
                body: JSON.stringify(pensamento) // converte de JS para string JSON

            })
            return await response.json()

        } catch {
            alert('Erro ao editar pensamentos.')
            throw error
        }
    }
}

export default api
