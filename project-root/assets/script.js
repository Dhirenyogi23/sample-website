// Mock User Data
const mockUser = {
    username: "user",
    password: "password"
};

// Login Script
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const loginError = document.getElementById('login-error');
        
        if (username === mockUser.username && password === mockUser.password) {
            // Redirect to main page
            window.location.href = 'index.html';
        } else {
            loginError.textContent = 'Invalid username or password';
        }
    });
}

// Logout Script
const logoutButton = document.getElementById('logout');
if (logoutButton) {
    logoutButton.addEventListener('click', function() {
        window.location.href = 'login.html';
    });
}

// Posting Status
const postStatusButton = document.getElementById('post-status');
if (postStatusButton) {
    postStatusButton.addEventListener('click', function() {
        const statusText = document.getElementById('status-text').value;
        const imageInput = document.getElementById('image-upload');
        const videoInput = document.getElementById('video-upload');
        const postsContainer = document.getElementById('posts');
        const imageFile = imageInput.files[0];
        const videoFile = videoInput.files[0];

        if (statusText.trim() || imageFile || videoFile) {
            const newPost = document.createElement('div');
            newPost.className = 'post';
            
            let mediaHtml = '';
            if (imageFile) {
                const imageUrl = URL.createObjectURL(imageFile);
                mediaHtml += `<img src="${imageUrl}" alt="Uploaded Image">`;
            }
            if (videoFile) {
                const videoUrl = URL.createObjectURL(videoFile);
                mediaHtml += `<video controls><source src="${videoUrl}" type="${videoFile.type}"></video>`;
            }
            
            newPost.innerHTML = `
                <div class="post-header">
                <div class="post-content">${statusText}</div>
                <div class="media-preview">${mediaHtml}</div>          
                </div>

                     <div class="post-info">   
                        <span class="post-username">User</span>
                        <span class="post-time">Just now</span>
                    </div>
                
                <div class="post-actions">
                    <button>Like</button>
                    <button>Comment</button>
                </div>
            `;
            postsContainer.prepend(newPost);
            document.getElementById('status-text').value = ''; // Clear the input
            imageInput.value = ''; // Clear the image input
            videoInput.value = ''; // Clear the video input
        } else {
            alert('Please enter a status update or upload an image/video.');
        }
    });
}
