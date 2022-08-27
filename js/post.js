function load() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}

function displayPosts(posts) {
    const postContainer = document.getElementById('post-container');
    posts.map(post => {
        const { id, title, body: des } = post;
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
        <h3>User-${id}</h3>
        <h4>Title: ${title}</h4>
        <p>${des} </p>
        `
        postContainer.appendChild(div)
    })
    // for (let post of posts) {
    //     const { id, title, body: des } = post;
    //     const div = document.createElement('div');
    //     div.innerHTML = `
    //     <h3>User-${id}</h3>
    //     <h4>Title: ${title}</h4>
    //     <p>${des} </p>
    //     `
    //     postContainer.appendChild(div)
    // }
}


load();