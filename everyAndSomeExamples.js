function Field( value ){
   this.value = value;
}

Filed.prototype.validate = function() {
    return this.value.length > 0;
}

var username = new Field('2cool');
var password = new Field('password');
var birthdate = new Field('20/10/2010')

// instead of validate all these one by one we can do something else
username.validate() && password.validate();


var fields = [username, password, birthdate];
//something like this
var formIsValid = fields.every(function(item){
    return item.validate();
});


if(formIsValid){
    //allow user to submit!
} else {
    //show an error message!
}

