import React, { createContext, useState } from "react";

interface GlobalImage {
    url?: string,
}

interface ImageProps {
    image: GlobalImage,
    setImage: (image: GlobalImage) => void
}

 const ImageContext = createContext<ImageProps>({} as ImageProps);

interface ImageProviderProps {
    children: React.ReactNode
}

 const ImageProvider: React.FC<ImageProviderProps> = ({children}) => {
    const [image, setImage] = useState<GlobalImage>({
        url: 'Url da imagem'
    });

    return(
        <ImageContext.Provider value={{image, setImage}}>
            {children}
        </ImageContext.Provider>
    )
}

export {ImageContext, ImageProvider}