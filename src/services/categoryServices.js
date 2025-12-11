import categories from "../data/categories.json";
import products from "../data/products.json";

export const fetchCategories = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categories);
    }, 1200); 
  });
};

export const fetchProducts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 800);
  });
};

export const searchCategories = async (query) => {
  const lowerQuery = query.trim().toLowerCase();
  return fetchCategories().then((data) =>
    data.filter(
      (cat) =>
        cat.name.toLowerCase().includes(lowerQuery) ||
        cat.description?.toLowerCase().includes(lowerQuery)
    )
  );
};

export const getCategoryById = async (categoryId) => {
  return fetchCategories().then((data) =>
    data.find((cat) => cat._id === categoryId)
  );
};

// Fetches all child categories for given parent category
export const getChildCategories = async (parentCategoryId) => {
  return fetchCategories().then((data) =>
    data.filter((cat) => cat.parentCategory?._id === parentCategoryId)
  );
};

// Get products by specific category
export const getProductsByCategory = async (categoryId) => {
  return fetchProducts().then((data) =>
    data.filter((product) => product.category._id === categoryId)
  );
};

// Get products from given category and subcategories
export const getProductsByCategoryAndChildren = async (categoryId) => {
  const allProducts = await fetchProducts();
  const allCategories = await fetchCategories();

  // Find category
  const category = allCategories.find((cat) => cat._id === categoryId);

  if (!category) return [];

  // If parent category (parentCategory is null)
  if (!category.parentCategory) {
    // Fetch child category id's
    const childCategoryIds = allCategories
      .filter((cat) => cat.parentCategory?._id === categoryId)
      .map((cat) => cat._id);

    // Append parent category ID
    const allCategoryIds = [categoryId, ...childCategoryIds];

    // Return products in parent category or children
    return allProducts.filter((product) =>
      allCategoryIds.includes(product.category._id)
    );
  }

  // If child category, return only products
  return allProducts.filter((product) => product.category._id === categoryId);
};

// Get main categories (categories without parents)
export const getParentCategories = async () => {
  return fetchCategories().then((data) =>
    data.filter((cat) => cat.parentCategory === null)
  );
};
