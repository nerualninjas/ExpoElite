import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../useAxiosPublic';

const useSearchProperty = ({location}) => {
    const axiosPublic = useAxiosPublic();
    console.log(location);

    const { data: searchedProperty = [], isLoading: searchedProductLoading, refetch, isPending: seachedProductIsPending } = useQuery({
        queryKey: ["seachedProduct"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/searchAndSort?location=${location}`)
            console.log(res.data);
            return res.data;
        }
    })
    return {searchedProperty, searchedProductLoading, refetch, seachedProductIsPending};
};

export default useSearchProperty;