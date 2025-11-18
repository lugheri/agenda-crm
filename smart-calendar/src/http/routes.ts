import { checkLive } from '@/_modules/_module_template/controller/check-service.controller'
import { FastifyInstance } from 'fastify'

export const serviceRoutes = async (app: FastifyInstance) => {
  app.get('/checkLiveAccount', checkLive)
}
