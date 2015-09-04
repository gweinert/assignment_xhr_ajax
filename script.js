// var $ = {};

var successFunc = function(){
  console.log("you rock");
};

var failFunc = function(){
  console.log("you suck");
};

var completeFunc = function(){
  alert("this will get annyoing");
};

var ajax = function(options){
  if (typeof(options.async == 'undefined')){
    options.async = true;
  }

  if(typeof(options.data == 'undefined')){
    options.data = "";
  }

  if(typeof(options.type == 'undefined')){
    options.type = "GET";
  }

  if(typeof(options.success == 'undefined')){
    options.success = function(){
      console.log("success");
    };
  }

  if(typeof(options.failure == 'undefined')){
    options.failure = function(){
      console.log("failure");
    };
  }

  if(typeof(options.complete == 'undefined')){
    options.complete = function(){
      console.log("completed");
    };
  }

  var xhr = new XMLHttpRequest();
  xhr.addEventListener( "load", function(){
    if (xhr.status == 200){
      console.log( this.responseText );
      options.success();
    } else {
      options.failure();
    }
    options.complete();
  });

  xhr.open(options.type, options.url + options.data, options.async);

  var dstart = new Date();
  xhr.send();
  console.log("time elapsed: "+ (new Date() - dstart) );
  

};


ajax({
      url: "/api/users/",
      type: "GET",
      failure: failFunc,
      complete: completeFunc,
      async: false
    });




// $.ajax({url: http:..., option1: ...,})