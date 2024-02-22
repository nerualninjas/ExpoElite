import useAxiosSecure from '../useAxiosSecure';

const useAddReview = () => {
    const axiosSecure = useAxiosSecure();

    const addReview = async (data) => {
        try {
            const response = await axiosSecure.post("/addReview", data);
            console.log('Review submitted successfully:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error submitting review:', error);
            throw error;
        }
    };

    return { addReview };
};

export default useAddReview;
