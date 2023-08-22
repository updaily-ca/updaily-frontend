import { useEffect, useState } from "react"

export const useDocumentTitle = (title: string): void => {
    useEffect(() => {
        document.title = title
    }, [title])
}
export const useToggleClass = (initialState: boolean = false): [boolean, () => void, boolean, (value: boolean) => void] => {

    const [isOpen, setIsOpen] = useState<boolean>(initialState);
    const [isElementClicked, setIsElementClicked] = useState<boolean>(false);

    const toggleClass = () => {
        setIsOpen(!isOpen);
        if (isElementClicked) {
            setIsElementClicked(false);
        }
    };

    return [isOpen, toggleClass, isElementClicked, setIsElementClicked];
};

export const performSearch = (searchTerm: string, prevSearchTerm: string, setPrevSearchTerm: (term: string) => void) => {
    if (searchTerm.trim() === '') {
        console.log('Enter a search term');
        return;
    }

    if (searchTerm === prevSearchTerm) {
        console.log('Search something new');
        return;
    }

    if (searchTerm.trim() !== '') {
        console.log(`Searching: ${searchTerm}`);
        setPrevSearchTerm(searchTerm);
    } else {
        console.log('Search error');
    }
};

export const toTimeStamp = (strDate: string): number => {
    const dt = Date.parse(strDate);
    return dt / 1000;
}

// filterFunctions.ts
export const toggleFilter = (id: string, activeFilterStates: Record<string, boolean>, setActiveFilterStates: React.Dispatch<React.SetStateAction<Record<string, boolean>>>) => {
    setActiveFilterStates(prevStates => {
        const newStates = { ...prevStates };
        newStates[id] = !newStates[id];
        return newStates;
    });
};
