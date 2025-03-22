export default async function GetProjects(location) {
  return fetch(location)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Error fetching projects:', error);
      throw error;
    });
}
