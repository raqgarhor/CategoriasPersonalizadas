import { hasRole, isLoggedIn } from '../middlewares/AuthMiddleware.js'
import * as RestaurantCategoryValidation from '../controllers/validation/RestaurantCategoryValidation.js'
import RestaurantCategoryController from '../controllers/RestaurantCategoryController.js'
import { handleValidation } from '../middlewares/ValidationHandlingMiddleware.js'

// SOLUCION
const loadFileRoutes = function (app) {
  app.route('/restaurantCategories')
    .get(RestaurantCategoryController.index)

    .post(
      isLoggedIn,
      hasRole('owner'),
      RestaurantCategoryValidation.create,
      handleValidation,
      RestaurantCategoryController.create)
}
export default loadFileRoutes
