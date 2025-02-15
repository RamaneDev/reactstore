import { useEffect, useState } from "react";
import { API_URL } from "../constants/constants";
import { IProductType } from "../models/ProductType";

const useProductTypes = () => {
    const [productTypes, setProductTypes] = useState<IProductType[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
      const fetchProductTypes = async () => {
        setIsLoading(true);
        setError(null);

        try {
          const response = await fetch(API_URL + 'products/types');
          if (!response.ok) {
            throw new Error('Failed to fetch products');
          }
          const data = await response.json();
          setProductTypes(data);
        } catch (err) {
          setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
          setIsLoading(false);
        }
      };

      fetchProductTypes();
    }, []);

    return { productTypes, isLoading, error };
  };

  export default useProductTypes;