export const fetchSinglePage = async (id: string) => {
  const response = await fetch(`https://madeappliance.com/wp-json/wp/v2/${id}`);
  console.log(response);
};
