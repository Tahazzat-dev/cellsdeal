// interface for Category data of navigation links
export interface Category {
  id?: string;
  label: string;
  href: string;
}

// interface for OurTopCategories section in the Homepage;
export interface OurTopCategory {
  _id?: string;
  category_name: string;
  category_image: string;
}

// interface for OurTopCategoryProducts
export interface TopCategoryProduct {
  _id?: string;
  name: string;
  price: number;
  image: string;
  upload_date: string;
  description: string;
  location: string;
  condition: string;
  warranty: string;
  category: string;
}
