/* eslint-disable camelcase */
// eslint-disable-next-line import/no-extraneous-dependencies
import multer from 'multer';
import multerConfig from '../config/multer';
import Photo from '../models/Photo';

const upload = multer(multerConfig).single('photo');

class PhotoControuller {
  /**
   * @param { import("express").Request } req
   * @param { import("express").Response  } res
   * @returns { Photo }
   */
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const photo = await Photo.create({ originalname, filename, aluno_id });
        return res.json(photo);
      } catch (e) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
    });
  }
}

export default new PhotoControuller();
