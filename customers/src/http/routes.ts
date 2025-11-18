import { checkLive } from '@/_modules/customers/controller/check-service.controller'
import { FastifyInstance } from 'fastify'
import authMiddleware from './middlewares/auth'

export const serviceRoutes = async (app: FastifyInstance) => {
  app.get('/checkLiveCustomer', checkLive)
  app.register(async (protectedRoutes) => {
    protectedRoutes.addHook('onRequest', authMiddleware)
    
  })
}
