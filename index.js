const inputData=document.querySelector('.inputText');
const addBtn=document.querySelector("#submit");
const disTask=document.querySelector(".taskView");
const taskDiv=document.querySelector('.tasks');
const editOpt=document.querySelector("#edit");
const editInput=document.querySelector(".editInput");
const subBtn=document.querySelector(".submitEdit");
const canBtn=document.querySelector(".cancel");
const taskList=document.querySelector(".taskList");
console.log(inputData.value,"nj");
arr=[];
let n=-1;
addBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    n++;
    if(inputData.value==""){
        alert("enter task");
    }else{
    arr.push(inputData.value.trim());
    disTask.remove();
    var li=document.createElement('li');
    li.className="task";
    htmlCreate=`<div class="eachTask">
    <div class="d1"><span class="inpText" id="inpText${n}">${arr[n]}</span></div>
    <div class="EditDiv">
        <a class="tick">✓</a>
        <a class="disk" >EDIT</a>
        <a class="into">X</a>
    </div>
    </div>`
    li.innerHTML=htmlCreate;
    taskList.appendChild(li);
    console.log(arr,n);
    inputData.value='';
    li.addEventListener('click',(e)=>{
        e.preventDefault();
        if(e.target.className=="into"){
            li.remove();
        }else if(e.target.className=="tick"){
            if(li.classList.contains("inputValue")){
                li.classList.remove("inputValue")
            }else{
                li.classList.add('inputValue');
            }
        }else if(e.target.className=="disk"){
            editOpt.classList.add("edit");
            val=li.innerText.split("\n")[0];
            num=arr.indexOf(val);
            editInput.value=val;
            ele=document.getElementById(`inpText${num}`);
            subBtn.addEventListener('click',(event)=>{
                event.preventDefault();
                arr[num]=editInput.value;
                ele.innerText=arr[num];
                editOpt.classList.remove('edit');
            })
        }
       
    })
    canBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        editOpt.classList.remove('edit');
    })
    }
    
    
})

