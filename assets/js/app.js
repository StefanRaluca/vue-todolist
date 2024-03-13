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

            // facciamo una stringa vuota per aggiungere il nuovo todo
            newTodo: '',
        }

    },
    methods: {
        canceltodo(i) {
            //cancella il todos che viene clickato
            this.todos.splice(i, 1);
        },

        addTodo() {
            //console.log(this.addTodo);

            //facciamo una condizione per non stampare in pagina i spazi vuoti 
            if (this.newTodo.trim() !== ('')) {

                this.todos.push({ text: this.newTodo, done: false });

                // Svuota il campo di input dopo l aggiunta del todo
                this.newTodo = '';

            }
        },



    }
})
    .mount('#app')



console.log('it work');