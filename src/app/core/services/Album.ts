export interface Album {
    id: string;
    name: string;
    images: {
        height: number;
        width: number;
        url: string;
    }[]
}
