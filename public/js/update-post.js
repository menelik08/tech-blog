const updatePostHandler = async (event) => {
    event.preventDefault();

    // Collect values from the update post form
    const title = document.querySelector('#editPostTitle').value;
    const post_text = document.querySelector('#editPostContent').value;
    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
        
    if (title && post_text) {
        // Send a PUT request to the API endpoint
        const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
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

document.querySelector('.update-post-form').addEventListener('submit', updatePostHandler);