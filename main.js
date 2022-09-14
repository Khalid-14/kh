// Require the framework and instantiate it
const food = ['burger', 'pasta', 'pizza']
const cars = ['cadenza', 'toyota', 'GMC']
const clothes = ['pans', 'tshert']

const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/food', async (request, reply) => {
    return food
})
fastify.get('/cars', async (request, reply) => {
    return cars
})
fastify.get('/clothes', async (request, reply) => {
    return clothes
})
// Run the server!
const start = async () => {
    try {
        await fastify.listen({ port: 3000 })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()



