module.exports = {
  errorMiddleware: (err, req, res) => {
    if (err.status) {
      return res.status(err.status).json({ message: err.message });
    }
    return res.status(500).json({ message: 'internal Server Error' });
  },
};