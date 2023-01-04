const createPostHandler = async (event) => {
    event.preventDefault();

    // Collect values from the create post form
    const title = document.querySelector('#createPostTitle').value.trim();
    const post_text = document.querySelector('#createPostContent').value.trim();
  
    if (title && post_text) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, post_text }),
            headers: { 'Content-Type': 'application/json' },
        });
        
        if (response.ok) {
            // If successful, redirect the browser to the dashboard page
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.create-post-form').addEventListener('submit', createPostHandler);