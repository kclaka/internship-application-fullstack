const URL = 'https://cfw-takehome.developers.workers.dev/api/variants';




addEventListener('fetch', event => {
  respBody = fetchApi(URL);
  event.respondWith(API())
})


/**
 * Get Data from api
 * @param {String} url 
 */
async function fetchApi(URL){
  const data = await fetch(URL);
  return data.json();
}


const API = async function() {
  const body = await respBody
  const num = Math.round(Math.random()); 
  if (num == 0){
    return Response.redirect(body.variants[0], 302);
  }
  if(num == 1){
    return Response.redirect(body.variants[1], 302);
  }
}