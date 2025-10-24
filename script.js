// Get form and comment list
const form = document.getElementById('commentForm');
const commentList = document.getElementById('commentList');

// Handle comment submission
form.addEventListener('submit', e => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const text = document.getElementById('commentText').value.trim();

    if (name && text) {
        // Create comment div
        const div = document.createElement('div');
        div.className = 'comment';
        div.innerHTML = `<strong>${name}:</strong> ${text} <button>Delete</button>`;

        // Delete button functionality
        div.querySelector('button').onclick = () => {
            div.style.opacity = '0';
            setTimeout(() => div.remove(), 300);
        };

        // Add comment to list
        commentList.appendChild(div);

        // Reset form
        form.reset();
    }
});
