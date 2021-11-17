import "./css/style.css";
import {CreateContainer} from "./js/CreateContainer";
import {CreateListLine} from "./js/CreateListLine";
import {Creategraph} from "./js/Creategraph";

CreateContainer.startCreate();
Creategraph.createGraph();

document.querySelector("#clear").addEventListener("click", ()=>{
    const allList = document.querySelectorAll(".lineList");
    for (let j = 0; j < localStorage.length; j++){
        localStorage.setItem(j, "del");
    }
    for (let i = 0; i < allList.length; i++){
        allList[i].remove();
    }
    Creategraph.createGraph();
});

document.querySelector("input[type='submit']").addEventListener("click", (e)=>{
    const input = document.querySelector("#nameList");
    if (input.value){
        CreateListLine.lineList();
        CreateListLine.titleList(input.value, document.querySelectorAll(".lineList")[0]);
        localStorage.setItem(localStorage.length, input.value);
        input.value = "";
    }
})

