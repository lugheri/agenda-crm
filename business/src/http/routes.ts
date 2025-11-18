import { checkLive } from '@/_modules/business/controller/check-service.controller'
import businessRoute from '@/_modules/business/routes/business.route'
import { FastifyInstance } from 'fastify'
import authMiddleware from './middlewares/auth'
import planRoute from '@/_modules/plans/routes/plan.route'
import typeBusinessRoute from '@/_modules/type_business/routes/type-business.route'

export const serviceRoutes = async (app: FastifyInstance) => {
  app.get('/checkLiveBusiness', checkLive)
  app.register(async (protectedRoutes) => {
    protectedRoutes.addHook('onRequest', authMiddleware)
    businessRoute(protectedRoutes)
    planRoute(protectedRoutes)
    typeBusinessRoute(protectedRoutes)
  })
}
