const P_mentales = require("./P_mentalesSchema");
exports.getP_mentales = (req, res) => {
  P_mentales.find((err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user);
  });
};

exports.getP_mentales = (req, res) => {
  let id = req.params.id;

  P_mentales.find({ _id: id }, (err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user);
  });
};

exports.newP_mentales = (req, res) => {
  const newP_mentales = new P_mentales(req.body);
  newP_mentales.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newP_mentales);
  });
};

exports.updateP_mentales = (req, res) => {
  let nombre = req.body.nombre;
  P_mentales.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nombre },
    (err, todo) => {
      if (err) return res.status(500).send(err);
      return res.send(todo);
    }
  );
};

exports.deleteP_mentales = (req, res) => {
  P_mentales.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Todo successfully deleted",
      id: todo._id
    };
    return res.status(200).send(response);
  });
};
