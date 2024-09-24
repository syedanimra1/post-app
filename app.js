document.addEventListener('DOMContentLoaded', () => {
    const addCommentButton = document.getElementById('add-comment');
    const commentInput = document.getElementById('comment-input');
    const commentsSection = document.querySelector('.comments-section');

    addCommentButton.addEventListener('click', () => {
        const commentText = commentInput.value.trim();
        if (commentText) {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            commentDiv.innerHTML = `
                <span class="comment-username">You</span>
                <p class="comment-text">${commentText}</p>
            `;
            commentsSection.appendChild(commentDiv);
            commentInput.value = ''; // Clear the input field
        }
    });
});