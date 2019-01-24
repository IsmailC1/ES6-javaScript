var users = [
    { name: 'Jill' },
    { name: 'Alex' },
    { name: 'Bill' }
];

var user;

for (var i = 0; i < users.length; i++) {
    if (users[i].name === 'Alex') {

        user = users[i];
    }
}
user;