'use strict';

/**
 * equipment-reservation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::equipment-reservation.equipment-reservation');
