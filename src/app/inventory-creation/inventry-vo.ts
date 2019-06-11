export interface InventryVO {
    foodtype: string;
    foodDetails: FoodDetails[];
}

export class InventryVOList {
    inventryVOList: InventryVO[];
}
export interface FoodDetails {
    food: string;
    price: string;
}
