const { createApp } = Vue;

createApp({
    data() {
        return {
            todos: [
                { text: 'Pagare la palestra', done: true },
                { text: 'Pagare la bolleta della luce', done: true },
                { text: 'Studiare per la verifica', done: false },
                { text: 'Andare dal dottore', done: false },
                { text: 'Prendere le medicine dalla farmacia', done: true },
            ],
        }

    },
    methods: {
        canceltodo(i) {
            //cancella il todos che viene clickato
            this.todos.splice(i, 1);
        },



    }
})
    .mount('#app')



console.log('it work');