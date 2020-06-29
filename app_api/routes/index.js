var Express = require('express');
var TipoUsuarioController = require("../controllers/TipoUsuarioController");
var UsuarioController = require("../controllers/UsuarioController");
var SectorController = require("../controllers/SectorController");
var CoordinadorController = require("../controllers/CoordinadorController");
var LiderControllaer = require("../controllers/LiderControllaer");
var VotanteController = require("../controllers/VotanteController");
var BarrioController = require("../controllers/BarrioController");
var PerfilProfesionalController = require("../controllers/PerfilProfesionalController");




var router = Express.Router();


//*****************************************************************************************
//******TIPO DE USUARIO******
router.get("/tipoUsuario", TipoUsuarioController.findAllTipoUsuario);
//*****************************************************************************************

//*************************************************************************************** */
//******************************** */Usuario **********************************************
router.get("/usuario", UsuarioController.findAllUsuario);
router.get("/usuarioOcupacion/:ocupacion", UsuarioController.findAllUsuarioOcupacion);
router.put('/usuario/:id_usuario', UsuarioController.updateUsuario);
router.get('/usuario/:id_usuario', UsuarioController.findById);
router.post("/usuario", UsuarioController.crear);
router.delete("/usuario/:id_usuario", UsuarioController.deleteById);
router.get("/digitador", UsuarioController.findAllDigitador);
router.get("/digitadorCedula/:ced_usu", UsuarioController.findAllDigitadorCedula);
router.get("/digitadorById/:id_usuario", UsuarioController.findAllDigitadorById);
//*************************************************************************************** */


//*************************************************************************************** */
//******************************** */Sector **********************************************
router.get("/sector", SectorController.findAllSector);
router.put('/sector/:id_sector', SectorController.updateSector);
router.get('/sector/:id_sector', SectorController.findById);
router.post("/sector", SectorController.crear);
router.delete("/sector/:id_sector", SectorController.deleteById);
router.get("/sectorPorComuna/:id_comuna", SectorController.buscarPorComuna);
router.get("/sectorPorNombre/:id_sector", SectorController.buscarPorIdSector);
//*************************************************************************************** */


//*************************************************************************************** */
//******************************** */Coordinador **********************************************
router.get("/coordinador", CoordinadorController.findAllCoordinador);
router.get("/coordinadorOcupacion/:ocupacion", CoordinadorController.findAllCoordinadorOcupacion);
router.get("/coordinadorCedula/:ced_coo", CoordinadorController.findAllCoordinadorCedula);
router.put('/coordinador/:id_coordinador', CoordinadorController.updateCoordinador);
router.get('/coordinador/:id_coordinador', CoordinadorController.findById);
router.get('/coordinadorById/:id_coordinador', CoordinadorController.findAllCoordinadorById);
router.get('/coordinadorComuna/:id_comuna', CoordinadorController.findAllCoordinadorComuna);
router.get('/coordinadorSector/:id_sector', CoordinadorController.findAllCoordinadorSector);
router.post("/coordinador", CoordinadorController.crear);
router.delete("/coordinador/:id_coordinador", CoordinadorController.deleteById);
//*************************************************************************************** */

//*************************************************************************************** */
//******************************** */Lider **********************************************
router.get("/lider", LiderControllaer.findAllLider);
router.get("/liderOcupacion/:ocupacion", LiderControllaer.findAllLiderOcupacion);
router.put('/lider/:id_lider', LiderControllaer.updateLider);
router.get('/lider/:id_lider', LiderControllaer.findById);
router.get('/liderCoordinador/:id_coordinador', LiderControllaer.findAllLiderCoordinador);
router.get('/liderComuna/:id_comuna', LiderControllaer.findAllLiderComuna);
router.get('/liderSector/:id_sector', LiderControllaer.findAllLiderSector);
router.post("/lider", LiderControllaer.crear);
router.delete("/lider/:id_lider", LiderControllaer.deleteById);
router.get("/liderById/:id_lider", LiderControllaer.findAllLiderById);
router.get("/liderCedula/:ced_lid", LiderControllaer.findAllLiderCedula);
//*************************************************************************************** */

//*************************************************************************************** */
//******************************** */Votante **********************************************
router.get("/votante", VotanteController.findAllVotante);
router.get("/votanteCedula/:ced_vot", VotanteController.findAllVotanteCedula);
router.get("/votanteOcupacion/:ocupacion", VotanteController.findAllVotanteOcupacion);
router.put('/votante/:id_votante', VotanteController.updateVotante);
router.get('/votante/:id_votante', VotanteController.findById);
router.get('/votanteCoordinador/:id_coordinador', VotanteController.findAllVotanteCoordinador);
router.get('/votanteLider/:id_lider', VotanteController.findAllVotanteLider);
router.get('/votanteById/:id_votante', VotanteController.findAllVotanteById);
router.get('/votanteComuna/:id_comuna', VotanteController.findAllVotanteComuna);
router.get('/votanteSector/:id_sector', VotanteController.findAllVotanteSector);
router.post("/votante", VotanteController.crear);
router.delete("/votante/:id_votante", VotanteController.deleteById);
//*************************************************************************************** */


//*************************************************************************************** */
//******************************** */Barrio **********************************************
router.get("/barrio", BarrioController.findAllBarrio);
router.put('/barrio/:id_barrio', BarrioController.updateBarrio);
router.get('/barrio/:id_barrio', BarrioController.findById);
router.get('/barrioComuna/:id_comuna', BarrioController.findAllBarrioComuna);
router.post("/barrio", BarrioController.crear);
router.delete("/barrio/:id_barrio", BarrioController.deleteById);
//*************************************************************************************** */


//*************************************************************************************** */
//******************************** */Perfil Profesional **********************************************
router.get("/perfilProfesional", PerfilProfesionalController.findAllPerfilProfesional);
router.put('/perfilProfesional/:id_perfil_profesional', PerfilProfesionalController.updatePerfilProfesional);
router.get('/perfilProfesional/:id_perfil_profesional', PerfilProfesionalController.findById);
router.post("/perfilProfesional", PerfilProfesionalController.crear);
router.delete("/perfilProfesional/:id_perfil_profesional", PerfilProfesionalController.deleteById);
//*************************************************************************************** */


module.exports = router;

/*
 * RUTAS DE USUARIOS
 */
/*router.get("/usuario", UsuarioController.findAll);
router.get("/usuario/:id", UsuarioController.findById);
router.post("/usuario", UsuarioController.addUsuario);
router.delete("/usuario/:id", UsuarioController.deleteUsuario);
router.put('/usuario/:id', UsuarioController.update);*/