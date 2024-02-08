import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../useAxiosPublic';


const useGetMessage = ({senderEmail, reciverEmail, propretyId}) => {
    const axiosPublic = useAxiosPublic();
    console.log(senderEmail, reciverEmail, propretyId)

    const { data: messageLogs = [], isLoading: messegeLoading, refetch, isPending: messegePending } = useQuery({
        queryKey: ["messageLogs", propretyId, senderEmail, reciverEmail],
        queryFn: async () => {
            const res = await axiosPublic.get(`/getMessage?senderEmail=${senderEmail}&reciverEmail=${reciverEmail}&propertyId=${propretyId}`)
            return res.data;
        }
    })
    return {messageLogs, messegeLoading, refetch, messegePending};
};

export default useGetMessage;