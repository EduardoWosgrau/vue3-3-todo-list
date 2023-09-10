
const TodosMachine = {
    data(){
        return {
            todos: [],
            newTodo: {},
        }
    },
    methods: {
        clearTodos: function(){
            this.todos = [];
            window.localStorage.setItem("todos", JSON.stringify(this.todos));
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
            window.localStorage.setItem("todos", JSON.stringify(this.todos));
        },
    },
    created(){
        var localTodos = window.localStorage.getItem("todos");
        if (localTodos) this.todos = JSON.parse(localTodos);
    },
    updated(){
        window.localStorage.setItem("todos", JSON.stringify(this.todos));
    }
};

Vue.createApp(TodosMachine).mount("#app");
