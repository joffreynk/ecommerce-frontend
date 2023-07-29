export interface Billboard {
    id: string;
    label: string;
    imgUrl: string;
}

export interface Category {
    id: string;
    name: string;
    billboard: Billboard;
}