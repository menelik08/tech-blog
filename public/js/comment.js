const commentHandler = async (event) => {
    event.preventDefault();

    // Collect value from the comment form
    const comment_text = document.querySelector('#commentsTextArea').value;
    const post_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
        
    if (comment_text) {
        // Send a POST request to the API endpoint
        const response = await fetch("/api/comments", {
            method: 'POST',
            body: JSON.stringify({ comment_text, post_id }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to the dashboard page
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.comment-area-box').addEventListener('submit', commentHandler);