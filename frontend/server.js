const jsonServer = require('json-server')
const auth = require('json-server-auth')
const jwt = require('jsonwebtoken')

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const SECRET_KEY = 'ProjectSecretKey'

server.db = router.db
const restrictMethods = (req, res, next) => {
  const restrictedMethods = ['PUT', 'POST', 'DELETE']

  if (restrictedMethods.includes(req.method) && !isWhitelisted(req.path)) {
    return res
      .status(403)
      .json({ message: `${req.method} is not allowed for this endpoint.` })
  }

  next()
}
const isWhitelisted = (path) => {
  const whitelistedPaths = ['/user/login', '/user/signup'] // Add endpoints that are exempt
  return whitelistedPaths.includes(path)
}
server.use(middlewares)
server.use(restrictMethods)
const authenticateToken = (req, res, next) => {
  if (req.path === '/user/login' || req.path === '/user/signup') {
    return next()
  }

  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    return res
      .status(401)
      .json({ message: 'Access denied. Please log in or sign up.' })
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res
        .status(403)
        .json({ message: 'Invalid or expired token. Please log in again.' })
    }
    req.user = user
    next()
  })
}

server.use(middlewares)
server.use(auth)
server.use(authenticateToken)

server.post('/user/login', (req, res) => {
  const { email, password } = req.body
  const user = server.db.get('users').find({ email, password }).value()

  if (user) {
    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
      expiresIn: '1h',
    })
    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    })
  } else {
    res.status(401).json({ message: 'Invalid email or password.' })
  }
})

server.use(router)

const PORT = 3001
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`)
})
