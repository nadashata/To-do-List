var counter =Number(1);
var textIn;
var textObj={};
var  textObj1={};
var textdone;
function printLocal()
{
        if(localStorage.hasOwnProperty("todo"))
        {
            textObj=JSON.parse(localStorage.getItem('todo'));
            for(key in textObj) {
                if(textObj.hasOwnProperty(key)) {
                    counter =parseInt(key);
                    textIn=textObj[counter];
                    addNode(textIn);
                    counter =counter+1;
                }
            }
        } 
        if(localStorage.hasOwnProperty("done"))
        {
            textObj=JSON.parse(localStorage.getItem('done'));
            for(key in textObj) {
                if(textObj.hasOwnProperty(key)) {
                    counter =parseInt(key);
                    textIn=textObj[counter];
                    addNode2(textIn);
                    counter =counter+1;
                }
            }
        } 
}
function addNode(textRecieved)
{ 
        var listNode = document.createElement("LI");   
        var deleteButton = document.createElement("BUTTON");
        deleteButton.setAttribute("id",counter);
        var doneButton = document.createElement("BUTTON"); 
        doneButton.setAttribute("id",counter);                              
        document.getElementById("new-task").value="";          
        var textNode = document.createTextNode(textRecieved);
        listNode.appendChild(textNode); 
        var t = document.createTextNode("X");       
        deleteButton.appendChild(t);  
        listNode.appendChild( deleteButton);  
        t=document.createTextNode("Done");    
        doneButton.appendChild(t);  
        listNode.appendChild(doneButton);                       
        document.getElementById("my-list").appendChild(listNode);    
        deleteButton.addEventListener('click', function(evt) {
            var k=this.getAttribute("id");
            listNode.removeChild(textNode); 
            listNode.removeChild(deleteButton);   
            listNode.removeChild(doneButton);  
            if(localStorage.hasOwnProperty("todo"))
            {
                textObj=JSON.parse(localStorage.getItem("todo"));
                delete textObj[k];
                localStorage.setItem("todo", JSON.stringify(textObj)); 
            }
        }); 
        doneButton.addEventListener('click', function(evt) {
            var k=this.getAttribute("id");
            listNode.removeChild(textNode); 
            listNode.removeChild(deleteButton);   
            listNode.removeChild(doneButton);  
            if(localStorage.hasOwnProperty("todo"))
            {
                textObj=JSON.parse(localStorage.getItem("todo"));
                console.log(k);
                textdone=textObj[k];
                addNode2(textdone);
                delete textObj[k];
                localStorage.setItem("todo", JSON.stringify(textObj)); 
                console.log(textdone);
                console.log(textObj);
            }
            if(localStorage.hasOwnProperty("done")) 
            {
                textObj1=JSON.parse(localStorage.getItem("done"));
                console.log("ifdone"+textObj);
            } 
                textObj1[k]=textdone;
                console.log(textObj1);
                localStorage.setItem("done", JSON.stringify(textObj1));
            
        });
}
function addNode2(textRecieved)
{ 
        var listNode = document.createElement("LI");                       
        document.getElementById("new-task").value="";          
        var textNode = document.createTextNode(textRecieved);
        listNode.appendChild(textNode);                
        document.getElementById("my-done-list").appendChild(listNode); 
}
printLocal();

/**************************************************************************************** */
document.getElementById("add-task").addEventListener('click', function(evt) {
    textIn= document.getElementById("new-task").value; 
    addNode(textIn);
    if(localStorage.hasOwnProperty("todo"))
    {
        textObj=JSON.parse(localStorage.getItem("todo"));
    }
    textObj[counter]=textIn;
    localStorage.setItem("todo", JSON.stringify(textObj));
    counter++;                                     
});
document.getElementById("clear-all-button").addEventListener('click', function () {
    var myToDoList=document.getElementById("my-list");
    var mydoList=document.getElementById("my-done-list");
    localStorage.clear();
    while (mydoList.firstChild) {
        mydoList.removeChild(mydoList.firstChild);
    }
    while (myToDoList.firstChild) {
        myToDoList.removeChild(myToDoList.firstChild);
    }
    counter =1;
});