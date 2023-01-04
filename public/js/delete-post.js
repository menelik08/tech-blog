const deletePostHandler = async (event) => {
    event.preventDefault();

    // Collect values from the update post form
    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
        
    if (id) {
        // Send a DELETE request to the API endpoint
        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
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

document.querySelector('#deletePostBtn').addEventListener('click', deletePostHandler);