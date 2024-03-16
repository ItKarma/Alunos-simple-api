class HomeControuller {
  async index(req, res) {
    res.send('oi');
  }
}

export default new HomeControuller();
