export async function makeRequest(path, value) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "true",
    },
    body: JSON.stringify({ value }),
  };
  const response = await fetch(
    `http://localhost:5000/countries/${path}`,
    requestOptions
  );
  const data = await response.json();

  return data;
}

export async function getSuggestions(value) {
  return makeRequest("suggestions", value);
}

export async function getCountry(value) {
  console.log(value);
  return makeRequest("select_country", value);
}
