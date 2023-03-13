import { Photo } from "../../types/photo";

export type PhotosSlice = {
    photos: Photo[];
    setPhotos?: (photos: Photo[]) => void;
};

export const photosSlice: PhotosSlice = {
    photos: []
};
