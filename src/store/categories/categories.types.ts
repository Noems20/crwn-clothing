// With enum the types are no just a string are a very specific string
// 'categories/FETCH_CATEGORIES_START' this type is string
// but with enum we make this string a type and this type will be the entire specific string
enum CATEGORIES_ACTION_TYPES {
  FETCH_CATEGORIES_START = 'categories/FETCH_CATEGORIES_START',
  FETCH_CATEGORIES_SUCCESS = 'categories/FETCH_CATEGORIES_SUCCESS',
  FETCH_CATEGORIES_FAILED = 'categories/FETCH_CATEGORIES_FAILED',
}

export type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

export type Category = {
  title: string;
  imageUrl: string;
  items: CategoryItem[];
};

export type CategoryMap = {
  [key: string]: CategoryItem[];
};

export default CATEGORIES_ACTION_TYPES;
