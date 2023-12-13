import { useEffect, useState } from "react";
import axios from "axios";

export const useConfig = () => {
    const [configData, setConfigData] = useState({})

    useEffect(() => {
        let isMounted = true;
        const fetchLanguageData = async () => {
          try {
            const response = await axios.get(
              `https://online.123fakturere.no/api/v1/config`,
            );
              setConfigData(response.data);
          } catch (error) {
              console.log(error);        
        }
        };
    
        fetchLanguageData();
    
        return () => {
          isMounted = false;
        };
      }, []);
    // const res = await axiosInstance('/config')
    // if(!res.data) throw new Error('failed to fetch')
    // const configData = res.data
      return configData;
}
