"use client"
const ShowComment = ({commentData}) => {
    const { commentBy, comment, commentDate, commentTime } = commentData;
    return (
        <div>
            <li className="mb-4 ms-6 list-none">
                    <div className="p-4  border-blue-700 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
                        <div className="items-center justify-between mb-3 sm:flex">
                            
                            <div className="text-xs font-normal text-gray-500 lex dark:text-white">Comment by <span className="font-semibold text-gray-700">{commentBy}</span><a href="#" className="font-semibold text-gray-900 dark:text-white hover:underline"></a>{}</div>
                        </div>
                        <div className="p-3 text-left text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">{comment}</div>
<div className="text-xs text-gray-500">{`${commentDate} ${commentTime}`}</div>
                    </div>
                </li>
        </div>
    );
};

export default ShowComment;
