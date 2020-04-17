const URL = 'https://cfw-takehome.developers.workers.dev/api/variants';

addEventListener('fetch', event => {
  apiData = fetchApi(URL);
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

/**
 * Get Response from API return a random of the two URLs
 */
const API = async function() {
  const url = await apiData
  const randomURL = Math.round(Math.random()); 
  if (randomURL == 0){
    return Response.redirect(url.variants[0], 302);
  }else{
    return Response.redirect(url.variants[1], 302);
  }
}