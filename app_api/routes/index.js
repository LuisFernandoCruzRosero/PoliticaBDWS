var Express = require('express');
/*llamado a los controladores*/
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
var DigitadorController = require("../controllers/DigitadorController");
var LiderControllaer = require("../controllers/LiderControllaer");
var VotanteController = require("../controllers/VotanteController");




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
router.get("/comuna/:nom_comuna", ComunaController.findByIdComuna); //Consulta una de las comunas
router.put('/comuna/:id_comuna', ComunaController.updateComuna); // Actualizar una comuna
router.get("/comunaContar", ComunaController.findByIdTotalComuna); //Consulta el total de comunas
//*****************************************************************************************


//*****************************************************************************************
//******CRUD de Barrio******
router.post("/barrio", BarrioController.insertBarrio); //Inserta una barrio nueva
router.get("/barrio", BarrioController.findAllBarrio); //Consulta todas las barrio
router.delete("/barrio/:id_barrio", BarrioController.deleteByIdBarrio); //Elimina una de las barrio
router.get("/barrio/:nom_barrio", BarrioController.findByIdBarrio); //Consulta una de las barrio
router.get("/barrioComuna/:id_comunaB", BarrioController.findAllBarrioComuna); //Consulta Barrios por comuna
router.get("/barrioZona/:zona_roja", BarrioController.findAllByIdBarrioZona); //Consulta Barrios por zona_roja
router.put('/barrio/:id_barrio', BarrioController.updateBarrio); // Actualizar una barrio
router.get("/barrioContar", BarrioController.findByIdTotalBarrio); //Consulta el total de barrios
//*****************************************************************************************

//*****************************************************************************************
//******CRUD de Mesa******
router.post("/mesa", MesaController.insertMesa); //Inserta una mesa nueva
router.get("/mesa", MesaController.findAllMesa); //Consulta todas las mesas
router.delete("/mesa/:id_mesa", MesaController.deleteByIdMesa); //Elimina una de las mesas
router.get("/mesa/:nom_mesa", MesaController.findByIdMesa); //Consulta una de las mesas
router.put('/mesa/:id_mesa', MesaController.updateMesa); // Actualizar una mesas
router.get("/mesaContar", MesaController.findByIdTotalMesa); //Consulta el total las mesas
//*****************************************************************************************



//*****************************************************************************************
//******CRUD de Lugar******
router.post("/lugar", LugarController.insertLugar); //Inserta una lugar nueva
router.get("/lugar", LugarController.findAllLugar); //Consulta todas las lugar
router.delete("/lugar/:id_lugar", LugarController.deleteByIdLugar); //Elimina una de las lugar
router.get("/lugar/:nom_lugar", LugarController.findByIdLugar); //Consulta una de las lugar
router.put('/lugar/:id_lugar', LugarController.updateLugar); // Actualizar una lugar
router.get("/lugarComuna/:id_comunaL", LugarController.findAllLugarComuna); //Consultatodos los lugares de una comuna
router.get("/lugarContar", LugarController.findByIdTotalLugar); //Consulta el total los lugares
router.get("/lugarZona/:zona_roja", LugarController.findAllByIdLugarZona); //Consulta Barrios por zona_roja
//*****************************************************************************************


//*****************************************************************************************
//******CRUD de LugarMesa******
router.post("/lugarMesa", LugarMesaController.insertLugarMesa); //Inserta una LugarMesa nueva
router.get("/lugarMesa", LugarMesaController.findAllLugarMesa); //Consulta todas las LugarMesa
router.delete("/lugarMesa/:id_lugar_mesa", LugarMesaController.deleteByIdLugarMesa); //Elimina una de las LugarMesa
router.get("/lugarMesa/:id_lugar/:id_mesa", LugarMesaController.findByIdLugarMesa); //Consulta una de las LugarMesa
router.put('/lugarMesa/:id_lugar_mesa', LugarMesaController.updateLugarMesa); // Actualizar una LugarMesa
router.get("/lugarMesaLugar/:id_lugar", LugarMesaController.findAllByIdLugarMesa); //Consulta los lugares de una Mesa
router.get("/lugarmesaContar", LugarMesaController.findByIdTotalLugarMesa); //Consulta el total de Lugar Mesa
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
router.get("/agendaContar", AgendaController.findByIdTotalAgenda); //Consulta el total de Agenda
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
router.get("/usuarioAdministradorCedula", UsuarioController.findAllUsuarioAdministradorCedula); //Consulta al administrador por la Cedula
router.get("/usuarioCoordinador", UsuarioController.findAllUsuarioCoordinador); //Consulta todas los usuarios por el coordindor
router.get("/usuarioCoordinadorCedula/:ced_usuario", UsuarioController.findAllUsuarioCoordinadorCedula); //Consulta el coordinador por  la cedula
router.get("/usuario", UsuarioController.findAllUsuario); //Consulta todas los usuarios
router.get("/usuarioCedula/:ced_usuario", UsuarioController.findAllUsuarioCedula); //Consulta todas los usuarios por la cedula
router.get("/usuario/:id_usaurio", UsuarioController.findByIdUsuario); //Consulta todas los usuarios
router.put("/usuario/:id_usuario", UsuarioController.updateUsuario); //Actualiza un usuario
router.delete("/usuario/:id_usuario", UsuarioController.deleteByIdUsuario); //Elimina un usuario
router.get("/usuarioCoordinadorContar", UsuarioController.findByIdTotalUsuarioCoordinador); //Consulta todas los usuarios
//*****************************************************************************************


//*****************************************************************************************
//******CRUD de Digitador******
router.post("/digitador", DigitadorController.insertDigitador); //Inserta un digitador nuevo
router.get("/digitador", DigitadorController.findAllDigitador); //Consulta al digitador
router.get("/digitador/:id_digitador", DigitadorController.findByIdDigitador); //Consulta al digitador
router.get("/digitadorCedula/:ced_digitador", DigitadorController.findByIdDigitadorCedula); //Consulta al digitador por cedula
router.put("/digitador/:id_digitador", DigitadorController.updateDigitador); //Actualiza un digitador
router.delete("/digitador/:id_digitador", DigitadorController.deleteByIdDigitador); //Elimina un digitador
router.get("/digitadorContar", DigitadorController.findByIdTotalDigitador); //Consulta todas los usuarios 
//*****************************************************************************************


//*****************************************************************************************
//******CRUD de Lider******
router.post("/lider", LiderControllaer.insertLider); //Inserta un lider nuevo
router.get("/lider", LiderControllaer.findAllLider); //Consulta el lider
router.get("/lider/:id_lider", LiderControllaer.findByIdLider); //Consulta todos los lideres
router.get("/liderCedula/:ced_lider", LiderControllaer.findAllLiderCedula); //Consulta al lider por cedula
router.get("/liderComunaBarrio/:id_comunaB", LiderControllaer.findAllLiderComunaBarrio); //Consulta al lider por comuna de barrio
router.get("/liderComunaLugar/:id_comunaL", LiderControllaer.findAllLiderComunaLugar); //Consulta al lider por comuna de lugar
router.get("/liderUsuario/:id_usuario", LiderControllaer.findAllLiderUsuario); //Consulta al lider por usuario
router.get("/liderLugar/:id_lugar", LiderControllaer.findAllLiderLugar); //Consulta al lider por lugar
router.get("/liderBarrio/:id_barrio", LiderControllaer.findAllLiderBarrio); //Consulta al lider por barrio
router.put("/lider/:id_lider", LiderControllaer.updateLider); //Actualiza un lider
router.delete("/lider/:id_lider", LiderControllaer.deleteByIdLider); //Elimina un lider 
router.get("/liderContar", LiderControllaer.findByIdTotalLider); //Consulta todas los usuarios 
//*****************************************************************************************

//*****************************************************************************************
//******CRUD de votante******
router.post("/votante", VotanteController.insertVotante); //Inserta un votante nuevo
router.get("/votante", VotanteController.findAllVotante); //Consulta al votante
router.get("/votante/:id_votnte", VotanteController.findByIdVotante); //Consulta todos los votantes
router.get("/votanteCedula/:ced_votnte", VotanteController.findByIVotanteCedula); //Consulta al votante por cedula
router.get("/votanteComunaBarrio/:id_comunaB", VotanteController.findAllVotanteComunaBarrio); //Consulta al votante por comuna de barrio
router.get("/votanteComunaLugar/:id_comunaL", VotanteController.findAllVotanteComunaLugar); //Consulta al votante por comuna de lugar
router.get("/votanteUsuario/:id_usuario", VotanteController.findAllVotanteUsuario); //Consulta al votante por usuario
router.get("/votanteLider/:id_lider", VotanteController.findAllVotanteLider); //Consulta al votante por lider
router.get("/votanteLugar/:id_lugar", VotanteController.findAllVotanteLugar); //Consulta al votante por lugar
router.get("/votanteBarrio/:id_barrio", VotanteController.findAllVotanteBarrio); //Consulta al votante por barrio
router.put("/votante/:id_votnte", VotanteController.updateVotante); //Actualiza un votante
router.delete("/votante/:id_votnte", VotanteController.deleteByIdVotante); //Elimina un votante  
router.get("/votanteContar", VotanteController.findByIdTotalVotante); //Consulta todas los usuarios 
//*****************************************************************************************

module.exports = router;