import { useEffect, useState } from "react";
import { API_URL } from "../constants/constants";
import { IBrand } from "../models/Brand";

const useBrands = () => {
    const [brands, setBrands] = useState<IBrand[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
      const fetchBrands = async () => {
        setIsLoading(true);
        setError(null);

        try {
          const response = await fetch(API_URL + 'products/brands');
          if (!response.ok) {
            throw new Error('Failed to fetch products');
          }
          const data = await response.json();
          setBrands(data);
        } catch (err) {
          setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
          setIsLoading(false);
        }
      };

      fetchBrands();
    }, []);

    return { brands, isLoading, error };
  };

  export default useBrands;