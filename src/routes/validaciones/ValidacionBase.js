/**
 * Clase base para validaciones con Joi
 */
class ValidacionBase {
  /**
   * Middleware genérico de validación
   * @param {String} schemaName - Nombre del schema a usar
   * @returns {Function} Middleware de Express
   */
  static validate(schemaName) {
    return (req, res, next) => {
      const schema = this[schemaName];

      if (!schema) {
        return res.status(500).json({
          success: false,
          message: `Schema de validación '${schemaName}' no encontrado`
        });
      }

      const { bodySchema, paramsSchema, querySchema } = schema;
      const errors = [];

      // Validar body
      if (bodySchema) {
        const { error } = bodySchema.validate(req.body, { abortEarly: false });
        if (error) {
          errors.push(...error.details.map(d => ({
            campo: d.path.join('.'),
            mensaje: d.message,
            tipo: 'body'
          })));
        }
      }

      // Validar params
      if (paramsSchema) {
        const { error } = paramsSchema.validate(req.params, { abortEarly: false });
        if (error) {
          errors.push(...error.details.map(d => ({
            campo: d.path.join('.'),
            mensaje: d.message,
            tipo: 'params'
          })));
        }
      }

      // Validar query
      if (querySchema) {
        const { error } = querySchema.validate(req.query, { abortEarly: false });
        if (error) {
          errors.push(...error.details.map(d => ({
            campo: d.path.join('.'),
            mensaje: d.message,
            tipo: 'query'
          })));
        }
      }

      if (errors.length > 0) {
        return res.status(400).json({
          success: false,
          message: 'Error de validación',
          errors
        });
      }

      next();
    };
  }
}

module.exports = ValidacionBase;
