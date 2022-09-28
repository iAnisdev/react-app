import React, { createContext, Dispatch, Fragment, SetStateAction, useState } from 'react'

interface FCInterface {
    children: any
}

interface CurrentContextInterface {
    CurrentPage: String,
    SetCurrentPage: Dispatch<SetStateAction<string>>
}

export const CurrentPageContext = createContext<CurrentContextInterface>({
    CurrentPage: '',
    SetCurrentPage: () => { }
})

const CurrentPageContextProvider: React.FC<FCInterface> = (props: FCInterface) => {

    const [CurrentPage, SetCurrentPage] = useState('')

    return (
        <CurrentPageContext.Provider value={{ CurrentPage, SetCurrentPage }}>
            {props.children}
        </CurrentPageContext.Provider>
    )
}

export default CurrentPageContextProvider