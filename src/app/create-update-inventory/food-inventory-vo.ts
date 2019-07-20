export class FoodVO {
    foodType: string;
    foodName: string;
    foodPrice: number;
    index: number;
}

export class InventoryVO {
    breakfastList: FoodVO[] = [];
    lunchList: FoodVO[] = [];
    dinnerList: FoodVO[] = [];
}

