document.addEventListener('DOMContentLoaded', () => {  
    const noteInput = document.getElementById('noteInput');  
    const addNoteBtn = document.getElementById('addNoteBtn');  
    const notesList = document.getElementById('notesList');  
 
    let notes = JSON.parse(localStorage.getItem('notes')) || [];  
    renderNotes();  

    addNoteBtn.addEventListener('click', () => {  
        const noteText = noteInput.value;  

        if (noteText) {  
            notes.push(noteText);  
            noteInput.value = '';  
            saveNotes();  
            renderNotes();  
        }  
    });  

    function renderNotes() {  
        notesList.innerHTML = '';  
        notes.forEach((note, index) => {  
            const li = document.createElement('li');  
            li.textContent = note;  

            // Create delete icon  
            const deleteIcon = document.createElement('span');  
            deleteIcon.textContent = '❌';  
            deleteIcon.classList.add('delete');  
            deleteIcon.addEventListener('click', () => {  
                deleteNote(index);  
            });  

            li.appendChild(deleteIcon);  
            notesList.appendChild(li);  
        });  
    }  

    function saveNotes() {  
        localStorage.setItem('notes', JSON.stringify(notes));  
    }  

    function deleteNote(index) {  
        notes.splice(index, 1);  
        saveNotes();  
        renderNotes();  
    }  
});