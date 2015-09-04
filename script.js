var $ = {};

var successFunc = function(){
  console.log("you rock")
}

var failFunc = function(){
  console.log("you suck")
}

var completeFunc = function(){
  alert("this will get annyoing")
}

var ajax = function(options){
  if (typeof(options.async == 'undefined')){
    options.async = true
  }


  var xhr = new XMLHttpRequest();
  xhr.addEventListener( "load", function(){
    if (xhr.status == 200){
      console.log( this.responseText )
      options.success();
    } else {
      options.failure();
    }
    options.complete();
  });
  xhr.open(options.type, options.url + options.data, options.async);
  xhr.send();

};


ajax({url: "/api/users/",
      type: "GET",
      data: 1,
      success: successFunc,
      failure: failFunc,
      complete: completeFunc})




// $.ajax({url: http:..., option1: ...,})