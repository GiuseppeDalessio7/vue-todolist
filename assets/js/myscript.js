

const { createApp } = Vue

createApp({
    data() {
        return {
            newtask: "",
            todos: [
                {
                    text: "Fare la spesa",
                    done: true,
                },

                {
                    text: "Comprare il latte",
                    done: true,
                },

                {
                    text: "Imparare il vuejs",
                    done: true,
                },
                {
                    text: "Non imparare il vuejs",
                    done: false,
                },
               
               
               
               
            ]
        }
    },

    methods: {
        addTask() {
            if (this.newtask != "") {
                let taskobj = {
                    text : this.newtask,
                    done : true,   
                }

                this.todos.unshift(taskobj)
            }
        },

        //funzione elimina che elimina il todo
        removetodo(index) {
            {
                this.todos.splice(index, 1);
            }
        }
    }
}).mount('#app')



/*
 
MILESTONE 3 Predisporre un campo di input testuale e un pulsante 
“aggiungi”: cliccando sul pulsante, il testo digitato viene letto e 
utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista 
dei todo esistenti.

 Rifare l’esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no
 
MILESTONE 1 Stampare all’interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2 Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.

*/