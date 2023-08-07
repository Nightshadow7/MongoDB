export const isAdminRole = ( req, res, next ) => {
  if ( !req.usuario ) {
    return res.status(500).json({
      msg: 'Se quiere verificar el role sin validar el token primero'
    });
  };
  const { Rol, Nombre } = req.usuario;
  if ( Rol !== 'ADMIN' ) {
    return res.status(401).json({
      msg: `${ Nombre } no es administrador - No puedes hacer esto`
    });
  };
  next();
};