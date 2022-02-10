// users/${username}/events/public
// result[0].created_at


function getLastCommit(owner, repo) {
    fetch(`https://api.github.com/repos/${owner}/${repo}/commits`, {headers: {"Authorization": github_api_key}})
        .then(res => res.json())
        .then(result => console.log(result[0].commit.author.date))
}

getLastCommit('AnthonyG8520', 'codeup-web-exercises')


// fetch(`https://api.github.com/users/AnthonyG8520`, {headers: {"Authorization": github_api_key}})
//     .then(res => res.json())
//     .then(result => console.log(result))


function wait (time) {
   return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve('Successful');
                reject('Failed');
        }, time);
    });
}

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));