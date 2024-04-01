import { useEffect, useState } from "react";
import api from "../api";

const useAIsize = (selectedSize, setSelectedSize) => {
    const [recommendSize, setRecommendsize] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const handleGetSize = async (info) => {
        setIsLoading(true);

        const { ai_size } = await api.getSize(info);
        setRecommendsize(ai_size);

        setIsLoading(false);
    };

    useEffect(() => {
        setSelectedSize(recommendSize);
    }, [recommendSize, selectedSize]);

    return {
        recommendSize,
        isLoading,
        handleGetSize,
    };
};

export default useAIsize;
