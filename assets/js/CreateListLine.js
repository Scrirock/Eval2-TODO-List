import {CreateIcon} from "./CreateIcon";

export const CreateListLine = {

    /**
     * Create a line of the list
     */
    lineList: function (){
        let containerList = document.querySelector("#containerList");

        let line = document.createElement("div");
        line.className = "lineList";
        containerList.prepend(line);

        CreateIcon.createIcon();
    },

    /**
     * Create the title's list
     */
    titleList: function (title, location){
        let titleList = document.createElement("p");
        titleList.className = "titleList"
        titleList.innerHTML = title;
        location.prepend(titleList);
    }
}