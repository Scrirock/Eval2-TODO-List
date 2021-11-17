import {CreateListLine} from "./CreateListLine";

export const CreateContainer = {

    /**
     * Call the other Function
     */
    startCreate: function (){
        this.title();
        this.input();
        this.listContainer();
        this.clearButton();
        this.CreateCanvas();
        this.restoreList();
    },

    /**
     * Create the title
     */
    title: function (){
        let title = document.createElement("h1");
        title.innerHTML = "To Do List";
        document.body.append(title);
    },

    /**
     * Create the input container
     */
    input: function (){
        let divInput = document.createElement("div");
        divInput.id = "input";
        document.body.append(divInput);

        let nameList = document.createElement("input");
        nameList.type = "text";
        nameList.placeholder = "Name...";
        nameList.id = "nameList";
        divInput.append(nameList);

        let submit = document.createElement("input");
        submit.type = "submit";
        submit.value = "Add Item"
        divInput.append(submit);
    },

    /**
     * Create the container for all the lists
     */
    listContainer: function (){
        let container = document.createElement("div");
        container.id = "containerList";
        document.body.append(container);
    },

    /**
     * Create the clear button
     */
    clearButton: function (){
        let container = document.querySelector("#containerList")

        let clear = document.createElement("div");
        clear.id = "clear";
        clear.innerHTML = "Clear Item";
        container.append(clear);

    },

    /**
     * Create the canvas for chart.js
     */
    CreateCanvas: function (){
        let canvas = document.createElement("canvas");
        canvas.id = "myChart";
        document.body.append(canvas);
    },

    /**
     * Search in the localStorage to restore the list
     */
    restoreList: function (){
        for (let i = 0; i < localStorage.length; i++){
            if (localStorage.getItem(i) !== "del"){
                CreateListLine.lineList();
                CreateListLine.titleList(localStorage.getItem(i), document.querySelectorAll(".lineList")[0]);
            }
        }
    }
}