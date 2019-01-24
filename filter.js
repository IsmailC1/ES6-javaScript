// example of method called filter
var products = [
    {name: 'cucumber', type: 'vegetable'},
    {name: 'banana', type: 'fruit'},
    {name: 'celery', type: 'vegetable'},
    {name: 'orange', type: 'fruit'}
    ];
    
    var filteredProducts = [];
    
    
    products.filter(function(product){
           return product.type === 'vegetable';
    })
    
    filteredProducts;
    
    var products2 = [
    {name: 'cucumber', type: 'vegetable', quantity: 0, price: 1},
    {name: 'banana', type: 'fruit', quantity: 10, price: 15 },
    {name: 'celery', type: 'vegetable', quantity: 30, price: 9},
    {name: 'orange', type: 'fruit', quantity: 3, price: 5}
    ];
    
    
    var filteredProducts2 = [];
    
    products2.filter(function(price){
       return price.type === 'vegetable' && price.quantity >10
    })
    

    // an example from a real world
    
    var post = { id: 4, title: 'New Post'};
    
    var comments = [
        {postID: 4, content: 'awesome post'},
        {postID: 3, content: 'it was ok'},
        {postID: 4, content: 'neat'}
    ];

    
    function commentsForPost(post, comments){
        return comments.filter(function(comment){
            return comment.postID === post.id;
        });
    };

    commentsForPost(post, comments);