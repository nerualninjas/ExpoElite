

const Location = () => {
    return (
        <div>
            <div className="mb-4 mx-2">
                <h1 className="font-bold text-lg mb-2">Description</h1>
                <p className="text-sm">There are many variations of propertys available. Choose your dream property according to your requirement.  </p>
                <h1 className="text-sm my-2"><a href="/about" className="text-rose-500">Read More</a></h1>

            </div>

            <div className="mb-10 mx-2">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14610.27308423812!2d90.38425380000001!3d23.72710665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1705584403245!5m2!1sen!2sbd" className="w-full min-h-44 rounded-xl" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <button className="bg-rose-500 text-white w-full py-2 rounded mx-2">Price:$25,5673</button>
        </div>
    );
};

export default Location;