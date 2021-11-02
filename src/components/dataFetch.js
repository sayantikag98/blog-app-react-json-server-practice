export const dataFetch = async (url, setData, setError) => {
    try{
      const response = await fetch(url);
      if(!response.ok){
        throw new Error("Page not found");
      }
      else{
        const data = await response.json();
        setData(data);
      } 
    }
    catch(err){
      setError(err.message);
    }
}; 