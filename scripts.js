
const TodosMachine = {
    data(){
        return {
            todos: [],
            newTodo: {},
        }
    },
    methods: {
        storeTodos: function(){
            console.log("ok");
            window.localStorage.setItem("todos", JSON.stringify(this.todos));
        },

        clearTodos: function(){
            this.todos = [];
            window.localStorage.setItem("todos", JSON.stringify(this.todos));
            this.storeTodos();
        },

        addTodo: function(){
            if (!this.newTodo.text){
                alert("Fill To Do description!");
                return;
            };
            this.todos.push({
                "text": this.newTodo.text,
                "done": false,
            });
            this.newTodo = {};
            this.storeTodos();
        },
        
        setDoneTodo: function(todo){
            todo.done = !todo.done;
            this.storeTodos();
        },
    },
    created(){
        var localTodos = window.localStorage.getItem("todos");
        if (localTodos) this.todos = JSON.parse(localTodos);
    },
};

Vue.createApp(TodosMachine).mount("#app");
