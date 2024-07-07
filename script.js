const notesContainer=document.querySelector('.notes-container')
const button=document.querySelector('.btn')
let notes=document.querySelectorAll('.input-box')


button.addEventListener('click',function(){
    
    let inputBox=document.createElement('p')
    let img=document.createElement('img')
    inputBox.className='input-box'
    inputBox.setAttribute('contenteditable','true')
    img.src="notes-app-img/delete.png"
    notesContainer.appendChild(inputBox).appendChild(img)
    
    
})
notesContainer.addEventListener('click',function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove() 
         updateStorage()}
         else if(e.target.tagName==='p'){
            notes=document.querySelectorAll('.input-box')
            notes.forEach((note)=>{
                note.onkeyup=function(){
                    updateStorage()
                }
            })
         }
})

function updateStorage(){
    localStorage.setItem('notes',notesContainer.innerHTML)
}
function showNotes(){
    notesContainer.innerHTML=localStorage.getItem('notes')
}
showNotes()

document.addEventListener('keydown',(event)=>{
    if(event.key==='Enter'){
        event.preventDefault();
         document.execCommand('insertLineBreak');
        
    }
})