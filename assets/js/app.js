const { createApp } = Vue;

createApp({
    data() {
        return {
            todos: [
                { text: 'Pagare la palestra', done: false },
                { text: 'Pagare la bolleta della luce', done: true },
                { text: 'Studiare per la verifica', done: false },
                { text: 'Andare dal dottore', done: false },
                { text: 'Prendere le medicine dalla farmacia', done: true },
            ]
        }
    }
})
    .mount('#app')



    console.log('it work');