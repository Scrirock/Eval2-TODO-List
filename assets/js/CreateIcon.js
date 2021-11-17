import {CreateListLine} from "./CreateListLine";
import {Creategraph} from "./Creategraph";

export const CreateIcon = {

    /**
     * Call the other function
     */
    createIcon: function (){
        this.iconContainer();
        this.icon();
    },

    /**
     * Create the div container
     */
    iconContainer: function (){
        let lineList = document.querySelectorAll(".lineList");

        let container = document.createElement("div");
        container.className = "icon";
        lineList[0].append(container);
    },

    /**
     * Create the icon
     */
    icon: function (){
        let container = document.querySelectorAll(".icon");

        let check = document.createElement("i");
        check.className = "far fa-check-circle";
        container[0].append(check);

        let edit = document.createElement("i");
        edit.className = "far fa-edit";
        container[0].append(edit);

        let deleteIcon = document.createElement("i");
        deleteIcon.className = "far fa-times-circle";
        container[0].append(deleteIcon);

        check.addEventListener("click", (e)=>{
            let item = e.target.parentNode.previousSibling;

            item.className = "titleList checked";

            for (let key in localStorage){
                if (localStorage.getItem(key) === item.innerHTML){
                    localStorage.setItem(key, item.innerHTML+"-");
                }
            }
        });

        edit.addEventListener("click", (e)=>{
            let lineList = e.target.parentNode.parentNode;

            let title = e.target.parentNode.previousSibling;

            let input = document.createElement("input");
            input.type = "text";
            input.value = title.innerHTML;
            input.style.width = "85%";

            title.remove();
            lineList.prepend(input);

            input.addEventListener("keypress", (e)=>{
                if (e.key === "Enter"){
                    if (input.value){
                        CreateListLine.titleList(input.value, e.target.parentNode)
                        for (let key in localStorage){
                            if (localStorage.getItem(key) === title.innerHTML){
                                localStorage.setItem(key, input.value);
                            }
                        }
                        input.remove();
                    }
                }
            })
        });

        deleteIcon.addEventListener("click", (e)=>{
            let item = e.target.parentNode.previousSibling.innerHTML;
            for (let key in localStorage){
                if (localStorage.getItem(key) === item){
                    localStorage.setItem(key, "del");
                }
            }
            e.target.parentNode.parentNode.remove();
            Creategraph.createGraph();
        });

    }
}