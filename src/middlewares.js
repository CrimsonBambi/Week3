import sharp from 'sharp';  // The sharp library is a popular Node.js module for image processing. It allows you to resize, crop and convert images efficiently.

const createThumbnail = async (req, res, next) => { // express middleware function
  console.log('todo: tee kuvakäsittely', req.file);
  if (!req.file) {
    next(); // if upload is not found, passes the control to the next middleware or route handler.
    console.log('Picture was not found.')
    return;
  }

  let extension = 'jpg'; // default file extension for the thumbnail
  if (req.file.mimetype === 'image/png') { // if uploaded file's MIME type is image/png => extension is changed to png.
    extension = 'png';
  }

  await sharp(req.file.path) // loads the uploaded file from the path in req.file.path
    .resize(160, 160)
    .toFile(`${req.file.path}_thumb.${extension}`); // saves image as a new file. Filename = appending _thumb, determining extension jpg or png to original file path.

  next(); // passes control
};

export default createThumbnail; // exports the function to other parts of the application