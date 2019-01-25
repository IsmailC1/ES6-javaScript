//These codes should be runned in the https://stephengrider.github.io/JSPlaygrounds/ browser. Otherwise some changes should be made for running in another code executer.

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

users.find(function(user){
    return user.name === 'Alex';
});

// --------------------------------- 

function Car(model) {
    this.model = model;
}

var cars = [
    new Car('Buick'),
    new Car('Camaro'),
    new Car('Focus')
]

cars.find(function(car){
    return car.model === 'Buick';
})



// -------------------------------------
var posts = [
    { id: 1, title: 'New Post' },
    { id: 2, title: 'Old Post' }
]


var comment = { postId: 1, content: 'Great Post'};

function postForComment(posts, comment){
    return posts.find(function(post) {
       return post.id === comment.postId;
    });
};





































