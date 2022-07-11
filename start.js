const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Mambo Adopciones - API",
    description:
      "Este es el API del proyecto en parejas de backend del curso de CI0137",
  },
  host: "localhost:7500",
  schemes: ["http", "https"],
  definitions: {
    AddAnimal: {
      id: 28,
      name: "Catalina",
      images: [
        "https://ci0137.s3.amazonaws.com/mambo-adopciones/animals/0-1.jpeg",
        "https://ci0137.s3.amazonaws.com/mambo-adopciones/animals/0-2.jpeg",
        "https://ci0137.s3.amazonaws.com/mambo-adopciones/animals/0-3.jpeg",
      ],
      gender: "Hembra",
      size: "Mediano",
      years: 2,
      description:
        "Fuimos hasta la parte sur del país para rescatar a esta hermosa chica. Una de sus piernitas traseras estaba muy dañada, por lo que la recomendación del veterinario fue amputarla para que Caty sobreviviera. Ahora, sin dolor, es mucho más feliz y más activa. Ahora Cata tiene una segunda oportunidad por una mejor vida en Territorio de Zaguates y esperamos que encuentre una familia que la ame pronto!",
      organization: "Centro Municipal de Educación para el Cuido Animal",
      numberOfViews: 4,
      state: "Cartago",
    },
    AddOrganization: {
      id: 0,
      name: "Centro Municipal de Educación para el Cuido Animal",
      state: "Cartago",
      phone: "(+506) 2201-8425",
      email: "bienestaranimal@muni-carta.go.cr",
      description: "Somos el primer Centro Municipal de Cuido Animal de Centro América y el Caribe. CMECA es un centro de salud pública veterinaria, bienestar animal y tenencia responsable de mascotas. Nuestro fin principal es reducir la sobrepoblación de animales callejeros en Cartago y mejorar el vínculo humano-animal para promover una mejor calidad de vida para los ciudadanos cartagineses. Dirección: Cartago, en el distrito de Arenilla, sobre la carretera interamericana, 100 metros antes del parque industrial, en la entrada de Bancrédito, 300 metros oeste, 25 metros norte y 300 metros oeste, continuo al Taller Amigo.",
      images: [
        "https://ci0137.s3.amazonaws.com/mambo-adopciones/organizations/cmeca1.png",
        "https://ci0137.s3.amazonaws.com/mambo-adopciones/organizations/cmeca2.png",
        "https://ci0137.s3.amazonaws.com/mambo-adopciones/organizations/cmeca3.png"
      ]
    },
  },
};

const outputFile = "./swagger.json";
const endpointFiles = ["./server.js"];

swaggerAutogen(outputFile, endpointFiles, doc).then(() => {
  require("./server.js");
});
