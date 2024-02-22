import useAxiosSecure from "@/hooks/useAxiosSecure";
const useAddReview = () => {
   const axiosSecure = useAxiosSecure();
    const addReview = async (data) => {
        console.log(data);
        await axiosSecure.post("/addReview", data)
        .then((res) => {
            if(res?.data){
                refetch()
            }
        })
    }

    return { addReview };
};

export default useAddReview;
