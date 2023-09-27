
export function generateQueryString(paramsObject) {
    const params = [];
 
    for (const key in paramsObject) {
      if (paramsObject[key] !== "") {
        params.push(`${encodeURIComponent(key)}=${encodeURIComponent(paramsObject[key])}`);
      }
    }
  
    return params.join("&");
  }

  const queryParams = {
    product_category__product_type: "",
    product_category__category_name__in: "",
    is_signature: true,
    is_designer: false,
    is_discounted: true,
    original_price__range: "",
    selectedItem: "",
    color:"",
    size:"",
    search: "",
    ordering: ""
  };
  
  const queryString = generateQueryString(queryParams);
//   console.log(queryString);