const api = {
    async buscarPensamentos() {
        try {

            const response = await fetch('http://localhost:3000/pensamentos')
            return await response.json()

        } catch {
            alert('Erro ao buscar pensamentos.')
            throw error
        }
    },

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
            alert('Erro ao buscar pensamentos.')
            throw error
        }
    }
}

export default api
