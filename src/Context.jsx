import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

const ContextoDental = createContext();

const InitialStateDental = {
    listaDentistas:[],
    dentista: {},
    favs: [{}],
    dark: true
}

const ReducerDental = (state, action) => {
    switch(action.type){
        case 'GET_LIST':
            return {listaDentistas: action.payload, dentista: state.dentista, favs: state.favs, dark:state.dark}
        case 'GET_DENTIST':
            return {listaDentistas: state.listaDentistas, dentista: action.payload, favs: state.favs, dark:state.dark}
        case 'SET_FAV':
            return {listaDentistas: state.listaDentistas, dentista: state.dentista, favs: action.payload, dark:state.dark}
        case 'TOGGLE_DARK':
            return {listaDentistas: state.listaDentistas, dentista: state.dentista, favs: state.favs, dark:!state.dark}
        default:
            throw new Error()
        
    }
}

const Context = ({children}) => {
    const [stateDental, dispatchDental] = useReducer(ReducerDental,InitialStateDental)
    const urlList = "https://jsonplaceholder.typicode.com/users"

    useEffect(()=> {
        axios(urlList)
        .then(res=> dispatchDental({type:'GET_LIST', payload:res.data}))
        .catch(err => console.log(err))

    }, [])

    console.log(stateDental)
    return(
        <ContextoDental.Provider value={{
            stateDental, dispatchDental
        }}>
            
            {children}
        </ContextoDental.Provider>
    )
    }

    export default Context

    export const useContextoDental = () => useContext(ContextoDental) 


