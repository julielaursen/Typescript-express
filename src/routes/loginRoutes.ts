import { Router, Request, Response, NextFunction } from 'express'
interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined }
}

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session && req.session.loggedIn) {
    next()
    return
  } else {
    res.status(403)
    res.send('Not permitted')
  }
}

const router = Router()

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome to protected route, logged in user')
})

export { router }
