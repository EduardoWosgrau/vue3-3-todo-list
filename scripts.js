
var todos = [
    {
        "text": "Test To Do New",
        "finished": false,
    },
    {
        "text": "Test To Do Finished",
        "finished": true,
    },
];

const TodosMachine = {
    data(){
        return {
            todos: window.todos,
            newTodo: {},
        }
    },
    methods: {
        clearTodos: function(){
            this.todos = [];
        },
        addTodo: function(){
            if (!this.newTodo.text){
                alert("Fill To Do description!");
                return;
            };
            this.todos.push({
                "text": this.newTodo.text,
                "finished": false,
            });
            this.newTodo = {};
        },
    },
};

Vue.createApp(TodosMachine).mount("#app");
