/**
 * Validaciones para el módulo de vehículos
 */
const Joi = require("joi");
const ValidacionBase = require("../ValidacionBase");

class ValidacionesVehiculos extends ValidacionBase {
  /**
   * Schema para obtener vehículo por ID
   */
  static get getVehiculoByIdSchema() {
    return {
      paramsSchema: Joi.object({
        id_vehiculo: Joi.number().integer().positive().required()
          .messages({
            'number.base': 'El ID del vehículo debe ser un número',
            'number.integer': 'El ID del vehículo debe ser un número entero',
            'number.positive': 'El ID del vehículo debe ser positivo',
            'any.required': 'El ID del vehículo es requerido'
          })
      })
    };
  }
}

module.exports = ValidacionesVehiculos;
