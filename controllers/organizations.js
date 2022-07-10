const listOrganizations = require("../dataOrganizations.json");

exports.createOrganization = async (req, res) => {
  // #swagger.tags = ['Organization']
  /*  #swagger.parameters['obj'] = {
          in: 'body',
          description: 'Create an organization',
          schema: { $ref: '#/definitions/AddOrganization' }
  } */
  try {
    const organizationPayload = req.body;
    organizationPayload.id = Math.floor(Math.random()*1000001) //Crear random para el id
    res.json(organizationPayload);
  } catch (error) {
    res.status(500).json({
      message: "Ocurrió un error al insertar la organización.",
      error,
    });
    return;
  }
};

exports.listOrganizations = async (req, res) => {
  // #swagger.tags = ['Organization']}
  try {
    const result = listOrganizations;
    res.json(listOrganizations);
  } catch (error) {
    res.status(500).send("GET error on Organizations: " + error);
  }
}