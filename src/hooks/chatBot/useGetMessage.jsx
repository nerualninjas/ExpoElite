import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../useAxiosPublic';


const useGetMessage = ({senderEmail, reciverEmail, propretyId}) => {
    const axiosPublic = useAxiosPublic();
    console.log(senderEmail)

    const { data: messageLogs = [], isLoading: messegeLoading, refetch, isPending: messegePending } = useQuery({
        queryKey: ["messageLogs",senderEmail],
        queryFn: async () => {
            const res = await axiosPublic.get(`/getMessage?senderEmail=${senderEmail}`)
            return res.data;
        }
    })
    return {messageLogs, messegeLoading, refetch, messegePending};
};

export default useGetMessage;