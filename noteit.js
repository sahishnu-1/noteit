function showOptions() {
    var optionsContainer = document.querySelector('.options');
    optionsContainer.style.display = optionsContainer.style.display === 'none' ? 'block' : 'none';
}

function addTextNote() {
    var notesContainer = document.getElementById('notesContainer');

    // Create a new note element
    var note = document.createElement('div');
    note.className = 'note';

    // Create delete button
    var deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
    deleteButton.addEventListener('click', function () {
        notesContainer.removeChild(note);
    });

    // Create title element
    var titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.placeholder = 'Title';
    titleInput.className = 'title-input';

    // Create body element
    var bodyInput = document.createElement('textarea');
    bodyInput.placeholder = 'Note';
    bodyInput.className = 'body-input';

    // Create date element
    var dateSpan = document.createElement('span');
    dateSpan.className = 'date';
    var currentDate = new Date();
    dateSpan.textContent = 'Added on ' + currentDate.toLocaleString();

    // Append elements to the note
    note.appendChild(deleteButton);
    note.appendChild(titleInput);
    note.appendChild(bodyInput);
    note.appendChild(dateSpan);

    // Append the note to the notes container
    notesContainer.appendChild(note);

    // Hide options
    document.querySelector('.options').style.display = 'none';
}
