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

// Upload images to cloudinary
export const handleUpload = async (images: File[], setURL: (urls: string[]) => void) => {
    const uploadUrls: string[] = [];

    for (const image of images) {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "UpDaily");

        const response = await fetch(
            `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
            {
                method: 'POST',
                body: formData,
            }
        );

        const data = await response.json();
        uploadUrls.push(data.secure_url);
    }
    setURL(uploadUrls);
}
