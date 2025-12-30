/**
 * Validaciones para el módulo de ventas
 */
const Joi = require("joi");
const ValidacionBase = require("../ValidacionBase");

class ValidacionesVentas extends ValidacionBase {
  /**
   * Schema para obtener venta por ID
   */
  static get getVentaByIdSchema() {
    return {
      paramsSchema: Joi.object({
        id_venta: Joi.number().integer().positive().required()
          .messages({
            'number.base': 'El ID de la venta debe ser un número',
            'number.integer': 'El ID de la venta debe ser un número entero',
            'number.positive': 'El ID de la venta debe ser positivo',
            'any.required': 'El ID de la venta es requerido'
          })
      })
    };
  }
}

module.exports = ValidacionesVentas;
