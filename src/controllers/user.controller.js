import User from '../models/User';

class UserControuller {
  /**
   * // Criando um novo login de usuario
   * @param { import('express').Request } req
   * @param { import('express').Response } res
   * @returns { Promise<User> }
   */

  async store(req, res) {
    try {
      const newUser = await User.create(req.body);
      return res.json(newUser);
    } catch (e) {
      return res
        .status(401)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }

  /**
   * // funçao para mostrar todos os usuarios
   * @param { import('express').Request } req
   * @param { import('express').Response } res
   * @returns { Promise<User[]> }
   */

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  /**
   * // Funçao para mostrar dados de um usuario com id especifico.
   * @param { import('express').Request } req
   * @param { import('express').Response } res
   * @returns { Promise<User[]> }
   */

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(null);
    }
  }

  /**
   * //Funçao para atualizar dados do usuario
   * @param { import('express').Request } req
   * @param { import('express').Response } res
   * @returns { Promise<User> }
   */

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) return res.status(404).json({ errors: [' Usuario não existe!'] });

      const newData = await user.update(req.body);
      return res.json(newData);
    } catch (e) {
      return res
        .status(401)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }

  /**
   * // Funçao para deletar usuario
   * @param { import('express').Request } req
   * @param { import('express').Response } res
   * @returns { void }
   */

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) return res.status(404).json({ errors: [' Usuario não existe!'] });

      await user.destroy();

      return res.json(null);
    } catch (e) {
      return res
        .status(401)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new UserControuller();
