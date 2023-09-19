import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'dklqqkwcp',
  api_key: '189468624715669',
  api_secret: 't0oGRwJ6cv7-FW-rQoPYyI4SxtM'
});

const uploadToCloudinary = async () => {
  cloudinary.uploader.upload(
    'https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg',
    { public_id: 'olympic_flag' },
    function (error, result) {
      console.log(result);
    }
  );
};

export const FileUplaodHelper = {
  uploadToCloudinary
};
