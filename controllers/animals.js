const listAnimals = require("../dataAnimals.json");

exports.createAnimal = async (req, res) => {
    // #swagger.tags = ['Animal']
    /*  #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Create an animal',
            schema: { $ref: '#/definitions/AddAnimal' }
    } */
    try {
      const animalPayload = req.body;
      animalPayload.id = Math.floor(Math.random()*1000001) //Crear random para el id
      res.json(animalPayload);
    } catch (error) {
      res.status(500).json({
        message: "Ocurrió un error al insertar el animal.",
        error,
      });
      return;
    }
  };

  exports.listAnimals = async (req, res) => {
    // #swagger.tags = ['Animal']}
    try {
      const result = listAnimals;
      res.json(listAnimals);
    } catch (error) {
      res.status(500).send("GET error on Animals: " + error);
    }
  }