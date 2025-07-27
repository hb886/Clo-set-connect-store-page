import { createContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({children}) => {

    const[searchTerm, setSearchTerm] = useState('')
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);

    console.log(productList);
    

      useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://closet-recruiting-api.azurewebsites.net/api/data");
        if (!res.ok) throw new Error("Failed to fetch data");
        const json = await res.json();
        setProductList(json);
        setLoading(false);
      } catch (error) {
        console.error("Fetch error:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);


    return(
    <AppContext.Provider value={{ searchTerm, setSearchTerm, selectedOptions, setSelectedOptions, productList, loading }}>
        {children}
    </AppContext.Provider>
    )
}

export default AppContext