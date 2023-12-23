import { useEffect, useState } from "react";
import axios from "axios";

export const useConfig = () => {
    const [configData, setConfigData] = useState({})

    useEffect(() => {
        let isMounted = true;
        const fetchLanguageData = async () => {
          try {
            const response = await axios.get(
              `https://657f24cc9d10ccb465d60cee.mockapi.io/config`,
            );
              setConfigData(response.data[0]);
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
