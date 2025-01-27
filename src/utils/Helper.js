export function filterData(searchText, allResturant)  {
    const filterData =  allResturant.filter((resturant) =>
      resturant.info.name.toLowerCase().includes(searchText)
    );
    return filterData;
  };
  