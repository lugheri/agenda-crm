import { checkLive } from '@/_modules/professional/controller/check-service.controller'
import { FastifyInstance } from 'fastify'
import authMiddleware from './middlewares/auth'
import profissionalRoute from '@/_modules/professional/routes/profissional.route'
import specialtyRoute from '@/_modules/specialty/routes/specialty.route'
import routesProduct from '@/_modules/product/routes/product.route'
import customerRoute from '@/_modules/customer/routes/customer.route'

export const serviceRoutes = async (app: FastifyInstance) => {
  app.get('/checkLiveCustomer', checkLive)
  app.register(async (protectedRoutes) => {
    protectedRoutes.addHook('onRequest', authMiddleware)
    profissionalRoute(protectedRoutes)
    specialtyRoute(protectedRoutes)
    routesProduct(protectedRoutes)
    customerRoute(protectedRoutes)
  })
}
