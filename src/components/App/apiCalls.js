async function fetchData() {
    let response = await fetch('https://rancid-tomatillos.herokuap.com/api/v2/movies')
    if (response.ok === false) {
      throw new Error(response.statusText)
    }
    let data = await response.json()
    return data
  } 

async function fetchSingleData(id) {
    let response = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    if (response.ok === false) {
      console.log(response)
      throw new Error(response.statusText)
    }
    let data = await response.json();
    return data;
  } 


export { fetchData, fetchSingleData }