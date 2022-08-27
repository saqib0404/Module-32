function loadData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(user => loadUsers(user))
}

function loadUsers(users) {
    const userList = document.getElementById('user-list');
    for (let user of users) {
        const userName = user.name
        console.log(user.name)
        const li = document.createElement('li');
        li.innerText = `${userName}`
        userList.appendChild(li);
    }

}