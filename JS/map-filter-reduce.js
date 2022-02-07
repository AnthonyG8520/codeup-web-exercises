const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


let langauges = users.filter(user => user.languages.length >= 3)
console.log(langauges)

let emails = users.map(user => user.email)
console.log(emails)


let experience = users.reduce((previousValue, user) => {
    return previousValue + user.yearsOfExperience
}, 0)
console.log(experience / users.length)


let longestEmail = emails.reduce((a, b) =>{
    return a.length > b.length ? a : b;
})
console.log(longestEmail)


let userString = users.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.name + ', '
}, 'Your instructors are: ')
console.log(userString)


