var Express = require('express');
var TipoUsuarioController = require("../controllers/TipoUsuarioController");
var ComunaController = require("../controllers/ComunaController");
var BarrioController = require("../controllers/BarrioController");
var MesaController = require("../controllers/MesaController");
var LugarController = require("../controllers/LugarController");
var LugarMesaController = require("../controllers/LugarMesaController");
var AgendaController = require("../controllers/AgendaController");
var HistorialController = require("../controllers/HistorialController");
var ContabilidadController = require("../controllers/ContabilidadController");
var RegistraduriaController = require("../controllers/RegistraduriaController");
var UsuarioController = require("../controllers/UsuarioController");
/*var UsuarioController = require("../controllers/UsuarioController");
var SectorController = require("../controllers/SectorController");
var CoordinadorController = require("../controllers/CoordinadorController");
var LiderControllaer = require("../controllers/LiderControllaer");
var VotanteController = require("../controllers/VotanteController");
var PerfilProfesionalController = require("../controllers/PerfilProfesionalController");*/




var router = Express.Router();


//*****************************************************************************************
//******TIPO DE USUARIO******
router.get("/tipoUsuario", TipoUsuarioController.findAllTipoUsuario);
//*****************************************************************************************

//*****************************************************************************************
//******CRUD de Comuna******
router.post("/comuna", ComunaController.insertComuna); //Inserta una comuna nueva
router.get("/comuna", ComunaController.findAllComuna); //Consulta todas las comunas
router.delete("/comuna/:id_comuna", ComunaController.deleteByIdComuna); //Elimina una de las comunas
router.get("/comuna/:id_comuna", ComunaController.findByIdComuna); //Consulta una de las comunas
router.put('/comuna/:id_comuna', ComunaController.updateComuna); // Actualizar una comuna
//*****************************************************************************************


//*****************************************************************************************
//******CRUD de Barrio******
router.post("/barrio", BarrioController.insertBarrio); //Inserta una barrio nueva
router.get("/barrio", BarrioController.findAllBarrio); //Consulta todas las barrio
router.delete("/barrio/:id_barrio", BarrioController.deleteByIdBarrio); //Elimina una de las barrio
router.get("/barrio/:id_barrio", BarrioController.findByIdBarrio); //Consulta una de las barrio
router.get("/barrioComuna/:id_comunaB", BarrioController.findAllBarrioComuna); //Consulta Barrios por comuna
router.put('/barrio/:id_barrio', BarrioController.updateBarrio); // Actualizar una barrio
//*****************************************************************************************

//*****************************************************************************************
//******CRUD de Mesa******
router.post("/mesa", MesaController.insertMesa); //Inserta una mesa nueva
router.get("/mesa", MesaController.findAllMesa); //Consulta todas las mesas
router.delete("/mesa/:id_mesa", MesaController.deleteByIdMesa); //Elimina una de las mesas
router.get("/mesa/:id_mesa", MesaController.findByIdMesa); //Consulta una de las mesas
router.put('/mesa/:id_mesa', MesaController.updateMesa); // Actualizar una mesas
//*****************************************************************************************



//*****************************************************************************************
//******CRUD de Lugar******
router.post("/lugar", LugarController.insertLugar); //Inserta una lugar nueva
router.get("/lugar", LugarController.findAllLugar); //Consulta todas las lugar
router.delete("/lugar/:id_lugar", LugarController.deleteByIdLugar); //Elimina una de las lugar
router.get("/lugar/:id_lugar", LugarController.findByIdLugar); //Consulta una de las lugar
router.put('/lugar/:id_lugar', LugarController.updateLugar); // Actualizar una lugar
router.get("/lugarComuna/:id_comunaL", LugarController.findAllLugarComuna); //Consultatodos los lugares de una comuna
//*****************************************************************************************


//*****************************************************************************************
//******CRUD de LugarMesa******
router.post("/lugarMesa", LugarMesaController.insertLugarMesa); //Inserta una LugarMesa nueva
router.get("/lugarMesa", LugarMesaController.findAllLugarMesa); //Consulta todas las LugarMesa
router.delete("/lugarMesa/:id_lugar_mesa", LugarMesaController.deleteByIdLugarMesa); //Elimina una de las LugarMesa
router.get("/lugarMesa/:id_lugar/:id_mesa", LugarMesaController.findByIdLugarMesa); //Consulta una de las LugarMesa
router.put('/lugarMesa/:id_lugar_mesa', LugarMesaController.updateLugarMesa); // Actualizar una LugarMesa
router.get("/lugarMesaLugar/:id_lugar", LugarMesaController.findAllByIdLugarMesa); //Consulta los lugares de una comuna
//*****************************************************************************************

//*****************************************************************************************
//******CRUD de Agenda******
router.post("/agenda", AgendaController.insertAgenda); //Inserta una agenda nueva
router.get("/agenda", AgendaController.findAllAgenda); //Consulta todas las agenda
router.delete("/agenda/:id_agenda", AgendaController.deleteByIdAgenda); //Elimina una de las agenda
router.get("/agenda/:id_agenda", AgendaController.findByIdAgenda); //Consulta una de las agenda
router.put('/agenda/:id_agenda', AgendaController.updateAgenda); // Actualizar una agenda
router.get("/agendaFecha/:fecha", AgendaController.findAllAgendaFecha); //Consulta  agenda por fecha
router.get("/agendaUsuario/:id_usuario", AgendaController.findAllAgendaUsuario); //Consulta agenda por usuario
//*****************************************************************************************

//*****************************************************************************************
//******CRUD de Historial******
router.post("/historial", HistorialController.insertHistorial); //Inserta un historial nuevo
router.get("/historial", HistorialController.findAllHistorial); //Consulta todas los historial
router.get("/historialLugar/:id_lugar", HistorialController.findAllHistorialLugar); //Consulta un historial lugar
router.get("/historialFecha/:fec_historial", HistorialController.findAllHistorialFecha); //Consulta  historial por fecha
router.get("/historial/:id_historial", HistorialController.findByIdHistorial); //Consulta historial unico
//*****************************************************************************************


//*****************************************************************************************
//******CRUD de Contabilidad******
router.post("/contabilidad", ContabilidadController.insertContabilidad); //Inserta un contabilidad nuevo
router.get("/contabilidad", ContabilidadController.findAllContabilidad); //Consulta todas los contabilidad
router.put("/contabilidad/:id_contabilidad", ContabilidadController.updateContabilidad); //Consulta un contabilidad lugar
router.delete("/contabilidad/:id_contabilidad", ContabilidadController.deleteByIdContabilidad); //Consulta  contabilidad por fecha
router.get("/contabilidadIdentificacion/:identificacion", ContabilidadController.findAllContabilidadIdentificacion); //Consulta contabilidad unico
router.get("/contabilidad/:id_contabilidad", ContabilidadController.findByIdContabilidad); //Consulta contabilidad unico
//*****************************************************************************************


//*****************************************************************************************
//******CRUD de Registraduria******
router.post("/registraduria", RegistraduriaController.insertRegistraduria); //Inserta un registraduria nuevo
router.get("/registraduria", RegistraduriaController.findAllRegistraduria); //Consulta todas los registraduria
router.get("/registraduriaCedula/:ced_registraduria", RegistraduriaController.findByIdRegistraduriaCedula); //Consulta un registraduria lugar
router.get("/registraduria/:id_registraduria", RegistraduriaController.findByIdRegistraduria); //Consulta  registraduria por fecha
//*****************************************************************************************


//*****************************************************************************************
//******CRUD de Usuario******
router.post("/usuario", UsuarioController.insertUsuario); //Inserta un usuario nuevo
router.get("/usuarioCandidato", UsuarioController.findAllUsuarioCandidato); //Consulta al candidato
router.get("/usuarioCandidatoCedula/:ced_usuario", UsuarioController.findAllUsuarioCandidatoCedula); //Consulta al candidato por cedula
router.get("/usuarioAdministrador", UsuarioController.findAllUsuarioAdministrador); //Consulta todas los usuarios
router.get("/usuarioAdministradorCedula", UsuarioController.findAllUsuarioAdministradorCedula); //Consulta todas los usuarios
router.get("/usuarioCoordinador", UsuarioController.findAllUsuarioCoordinador); //Consulta todas los usuarios
router.get("/usuarioCoordinadorCedula/:ced_usuario", UsuarioController.findAllUsuarioCoordinadorCedula); //Consulta todas los usuarios
router.get("/usuario", UsuarioController.findAllUsuario); //Consulta todas los usuarios
router.get("/usuario/:ced_usuario", UsuarioController.findAllUsuarioCedula); //Consulta todas los usuarios
router.get("/usuario/:id_usaurio", UsuarioController.findByIdUsuario); //Consulta todas los usuarios
router.put("/usuario/:id_usuario", UsuarioController.updateUsuario); //Consulta un contabilidad lugar
router.delete("/usuario/:id_usuario", UsuarioController.deleteByIdUsuario); //Consulta  contabilidad por fecha
//*****************************************************************************************

//*************************************************************************************** */
//******************************** */Usuario **********************************************
/*router.get("/usuario", UsuarioController.findAllUsuario);
router.get("/usuarioOcupacion/:ocupacion", UsuarioController.findAllUsuarioOcupacion);
router.put('/usuario/:id_usuario', UsuarioController.updateUsuario);
router.get('/usuario/:id_usuario', UsuarioController.findById);
router.post("/usuario", UsuarioController.crear);
router.delete("/usuario/:id_usuario", UsuarioController.deleteById);
router.get("/digitador", UsuarioController.findAllDigitador);
router.get("/digitadorCedula/:ced_usu", UsuarioController.findAllDigitadorCedula);
router.get("/digitadorById/:id_usuario", UsuarioController.findAllDigitadorById);*/
//*************************************************************************************** */


//*************************************************************************************** */
//******************************** */Sector **********************************************
/*router.get("/sector", SectorController.findAllSector);
router.put('/sector/:id_sector', SectorController.updateSector);
router.get('/sector/:id_sector', SectorController.findById);
router.post("/sector", SectorController.crear);
router.delete("/sector/:id_sector", SectorController.deleteById);
router.get("/sectorPorComuna/:id_comuna", SectorController.buscarPorComuna);
router.get("/sectorPorNombre/:id_sector", SectorController.buscarPorIdSector);*/
//*************************************************************************************** */


//*************************************************************************************** */
//******************************** */Coordinador **********************************************
/*router.get("/coordinador", CoordinadorController.findAllCoordinador);
router.get("/coordinadorOcupacion/:ocupacion", CoordinadorController.findAllCoordinadorOcupacion);
router.get("/coordinadorCedula/:ced_coo", CoordinadorController.findAllCoordinadorCedula);
router.put('/coordinador/:id_coordinador', CoordinadorController.updateCoordinador);
router.get('/coordinador/:id_coordinador', CoordinadorController.findById);
router.get('/coordinadorById/:id_coordinador', CoordinadorController.findAllCoordinadorById);
router.get('/coordinadorComuna/:id_comuna', CoordinadorController.findAllCoordinadorComuna);
router.get('/coordinadorSector/:id_sector', CoordinadorController.findAllCoordinadorSector);
router.post("/coordinador", CoordinadorController.crear);
router.delete("/coordinador/:id_coordinador", CoordinadorController.deleteById);*/
//*************************************************************************************** */

//*************************************************************************************** */
//******************************** */Lider **********************************************
/*router.get("/lider", LiderControllaer.findAllLider);
router.get("/liderOcupacion/:ocupacion", LiderControllaer.findAllLiderOcupacion);
router.put('/lider/:id_lider', LiderControllaer.updateLider);
router.get('/lider/:id_lider', LiderControllaer.findById);
router.get('/liderCoordinador/:id_coordinador', LiderControllaer.findAllLiderCoordinador);
router.get('/liderComuna/:id_comuna', LiderControllaer.findAllLiderComuna);
router.get('/liderSector/:id_sector', LiderControllaer.findAllLiderSector);
router.post("/lider", LiderControllaer.crear);
router.delete("/lider/:id_lider", LiderControllaer.deleteById);
router.get("/liderById/:id_lider", LiderControllaer.findAllLiderById);
router.get("/liderCedula/:ced_lid", LiderControllaer.findAllLiderCedula);*/
//*************************************************************************************** */

//*************************************************************************************** */
//******************************** */Votante **********************************************
/*router.get("/votante", VotanteController.findAllVotante);
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
router.delete("/votante/:id_votante", VotanteController.deleteById);*/
//*************************************************************************************** */


//*************************************************************************************** */
//******************************** */Barrio **********************************************
/*router.get("/barrio", BarrioController.findAllBarrio);
router.put('/barrio/:id_barrio', BarrioController.updateBarrio);
router.get('/barrio/:id_barrio', BarrioController.findById);
router.get('/barrioComuna/:id_comuna', BarrioController.findAllBarrioComuna);
router.post("/barrio", BarrioController.crear);
router.delete("/barrio/:id_barrio", BarrioController.deleteById);*/
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