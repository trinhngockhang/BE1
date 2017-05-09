$(document).ready(function() {
  var itemTemplate = Handlebars.compile($("#item-template").html());
  checkToken();
})

function checkToken() {
  var userLogin = false;
  $.get("../api/users/me", function(res) {
    if (res.username) {
      $('#username_label').html(res.username);
      $('#user_label').show();
      $('#sign_in_form').hide();
    } else {
      $('#user_label').hide();
      $('#sign_in_form').show();
    }
  })
}

function signin() {
  username = $('#username').val();
  password = $('#password').val();
  $.ajax({
    type : "post",
    url : "/api/users/signin",
    data : { username , password }
  }).then(function(res) {
    if (res.username) {
      $('#username_label').html(res.username);
      $('#user_label').show();
      $('#sign_in_form').hide();
    }
  }).fail(function(err) {
    console.log(err);
  });
}

function signout() {
  $.ajax({
    type : "delete",
    url : "api/users/signout"
  }).then(function(res){
    $('#user_label').hide();
    $('#sign_in_form').show();
    alert(res);
  })
}

function requestImage(itemTemplate){
  $.ajax({
    type  : "get",
    url   : "api/image"
  }).then(function(data){
    var data;
    data.items = data;
    var itemHtml = $(itemTemplate(data));
    $('#item_list').html(itemHtml);
  }).fail(function(error){
    console.log(error);
  });
}

function requestUser(userTemplate) {
  $.ajax({
    type : "get",
    url  : "/api/users"
  }).then(function(data){
    var userHtml = $(userTemplate(data));
  }).fail(function(error){
    console.log(error);
  })
}

function getEditImage(imageEditTemplate) {
  var id = getQueryStringValue("id");
  if (id) {
    $.ajax({
      type : "get",
      url : "../api/image?id=" + id,
    }).then(function(data){
      var imageHtml = $(imageEditTemplate(data));
      $('#image_info').html(imageHtml);
    }).fail(function(error) {
      console.log(error);
    })
  } else {
    var imageHtml = $(imageEditTemplate());
    $('#image_info').html(imageHtml);
  }
}

function editImage(data) {
  $.ajax({
    type : "put",
    url : "../api/image",
    data : data
  }).then(function(result){
    alert(result);
  }).fail(function(error) {
    console.log(error);
  })
}

function likeImage(imageId) {
  var data = imageId;
  //console.log(id);
  $.ajax({
    type : "post",
    url : "../api/image/like",
    data : {
      id : imageId
    }
  }).then(function(result){
      console.log(result);
      //requestImage(itemTemplate);
  }).fail(function(err) {
      console.log(err);
  })
}

function getQueryStringValue (key) {
  return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}
