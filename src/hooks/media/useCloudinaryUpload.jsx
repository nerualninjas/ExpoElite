import { useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Cloudinary } from 'cloudinary-core';

const cloudinary = new Cloudinary({ cloud_name: 'dnjbmak75' });

const useCloudinaryUpload = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(null);

  const uploadImage = useCallback(async (file) => {
    try {
      setLoading(true);

      // Generate a unique filename using UUID
      const filename = `${uuidv4()}-${file.name}`;

      // Upload image to Cloudinary
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'kjttiq0p'); // Replace with your Cloudinary upload preset

      const response = await fetch(`https://api.cloudinary.com/v1_1/dnjbmak75/image/upload`, {
        method: 'POST',
        body: formData,
      });
      

      if (!response.ok) {
        throw new Error('Image upload failed');
      }

      const result = await response.json();

      // Set the live URL
      const liveUrl = cloudinary.url(result.public_id, {
        crop: 'fill',
      });

      setImageUrl(liveUrl);
      setImage(filename);
      setError(null);
    } catch (err) {
      setError('Image upload failed');
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    image,
    loading,
    imageUrl,
    error,
    uploadImage,
  };
};

export default useCloudinaryUpload;
