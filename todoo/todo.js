const addTask=()=>{
    if(inpValue.value===''){
        alert("Enter a task!")
    }else{
        const li=document.createElement('li')
        li.innerHTML=inpValue.value
        lst.append(li)

        const i=document.createElement('i')
        i.className="fa-solid fa-trash text-danger"
        li.append(i)

    }
        inpValue.value=""
    store()
}

lst.addEventListener('click',(e)=>{
    if(e.target.tagName==='I'){
        e.target.parentElement.remove()
    }
})

function store(){
    localStorage.setItem('res3',lst.innerHTML)
}


function show(){
    lst.innerHTML=localStorage.getItem('res3')
}
show()

