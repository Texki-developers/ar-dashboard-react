export interface IProductApiBody {
  name: string;
  desc: string;
  actualPrice: number;
  offerPrice: number;
  category: string;
  recipes: string[];
  isRecommended: boolean;
  specialty: string;
  foodType: string;
  recommendedSides?: string[];
  itemValue?: { label: string; value: string }[];
  file: string;
  reviews?: string[];
  youtubeEmbedLink?: string;
}

export interface IProduct {
  _id: string;
  name: string;
  desc: string;
  image: string;
  three_glb: string;
  three_usdz: string;
  actual_price: number;
  offer_price: number;
  category: {
    _id: string;
    name: string;
  };
  file_id: {
    _id: string;
    file_name: string;
    folder_id: {
      _id: string;
      folder_name: string;
    };
  };
  food_type: string;
  recipes: string[];
  is_recommended: boolean;
  speciality: string;
  __v: number;
  vendor_id: string;
}
