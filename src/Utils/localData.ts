export const loadDataLocalStorage = ( key : string ) => {

    let data = JSON.parse(localStorage.getItem(key) || '""' || '{}' || '[]')    
    return data

}


export const saveDataLocalStorage = ( key : string, value : string | boolean | number | [] | {} ) : void => {
    localStorage.setItem(key, JSON.stringify(value ))
}

export const removeDataLocalStorage = ( key : string ) : void => {
    localStorage.removeItem(key)
}
