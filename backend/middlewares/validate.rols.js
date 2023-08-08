export const isNotUserRole = ( req, res, next ) => {
  if ( !req.usuario ) {
    return res.status(500).json({
      msg: 'Se quiere verificar el role sin validar el token primero'
    });
  };
  const { rol, nombre } = req.usuario;
  if ( rol === 'USER' ) {
    return res.status(401).json({
      msg: `${ nombre } no es Administrador, Psicologa o *ᄃΉЯӨПӨƧ* - No puedes hacer esto`
    });
  };
  next();
};