import { createContext,useContext,useState } from "react";

const UserContext = createContext();

//  const SearchDataContext  = createContext();
export const UserProvider = ({children})=>{
    
    const [token ,setToken] = useState(sessionStorage.getItem('token'));
    const [name,setName] = useState(sessionStorage.getItem('name'));
    const [searchData, setSearchData] = useState([]);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const onTokenHandler=(data)=>{
          setToken(data);
          sessionStorage.setItem('token',data);
    }

    const onNameHandler=(data)=>{
          setName(data);
          sessionStorage.setItem('name',data);
    }

    const object={
        token,
        name,
        onTokenHandler,
        onNameHandler
    }


    return (<div>
        <UserContext.Provider value={{ object, searchData, setSearchData,isMobile,setIsMobile }}>

      {children}

</UserContext.Provider>
    </div>)
}

export function useUser(){
    return useContext(UserContext);
} 