import { useEffect, useState } from "react";
import { IProduct } from "../models/Product";
import { API_URL } from "../constants/constants";

const useProductList = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
      const fetchProducts = async () => {
        setIsLoading(true);
        setError(null);

        try {
          const response = await fetch(API_URL + 'products?pageSize=6');
          if (!response.ok) {
            throw new Error('Failed to fetch products');
          }
          const data = await response.json();
          setProducts(data.data);
        } catch (err) {
          setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
          setIsLoading(false);
        }
      };

      fetchProducts();
    }, []);

    return { products, isLoading, error };
  };

  export default useProductList;