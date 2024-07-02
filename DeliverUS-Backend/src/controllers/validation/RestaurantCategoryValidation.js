import { check } from 'express-validator'
import { RestaurantCategory } from '../../models/models.js'

// SOLUCION
const checkNoRepetidos = async (value, { req }) => {
  try {
    const FindRestaurantCategory = await RestaurantCategory.findOne({
      where: { name: value }
    })
    if (!FindRestaurantCategory) {
      return Promise.resolve('ok')
    } else {
      return Promise.reject(new Error('The category ' + value + ' already exists.'))
    }
  } catch (err) {
    return Promise.reject(new Error(err))
  }
}

const create = [
  check('name').exists().isString().isLength({ min: 1, max: 50 }).trim(),
  check('name').custom(checkNoRepetidos)
]

export { create }
