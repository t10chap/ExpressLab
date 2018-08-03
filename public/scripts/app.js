$(document).ready(() => {

console.log("Sanity Check: JS is working!");

const successFunction = json =>
  json.forEach(album => {
    let title = album.title;
    $('.container').append(`<h3>${title}</h3>`);
  });

const errorFunction = (xhr, status, errorThrown) => console.log('uh oh');

const successFunction2 = json =>
  json.forEach(taqueria => {
    let name = taqueria.name;
    $('.container').prepend(`<h3>${name}</h3>`);
  });

$.ajax({
   method: 'GET',
   url: 'http://localhost:3000/api/albums',
   success: successFunction2,
   error: handleError
 });

$.ajax({
  method: 'GET',
  url: 'http://localhost:3000/api/taquerias',
  success: handleSuccess2,
  error: errorFunction
});


});
