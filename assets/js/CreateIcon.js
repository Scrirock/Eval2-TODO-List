import {CreateListLine} from "./CreateListLine";

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
            e.target.parentNode.previousSibling.className = "titleList checked";
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
        });

    }
}