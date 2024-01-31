
// export const getSingleProperty = async (id) => {
//   try {
//     const res = await fetch("/property.json");
//     const data = await res.json();
    
//     // Find the property in the array based on the id
//     const property = data.find((item) => item.id === id);

//     return property;
//   } catch (error) {
//     console.error("Error fetching single property:", error);
//     throw error;
//   }
// };