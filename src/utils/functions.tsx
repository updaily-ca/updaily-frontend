import { useEffect, useState } from "react"

export const useDocumentTitle = (title: string): void => {
    useEffect(() => {
        document.title = title
    }, [title])
}

export const useToggleClass = (initialState: boolean = false): [boolean, () => void, boolean, (value: boolean) => void] => {
    const [isOpen, setIsOpen] = useState<boolean>(initialState)
    const [isHamburgerClicked, setIsHamburgerClicked] = useState<boolean>(false)

    const toggleClass = () => {
        setIsOpen(!isOpen)
        if (isHamburgerClicked) {
            setIsHamburgerClicked(false)
        }
    }

    return [isOpen, toggleClass, isHamburgerClicked, setIsHamburgerClicked]
}