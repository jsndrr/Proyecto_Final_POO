import { Router } from "express"
import { login, register, verifyEmail } from "./auth.controller.js"

import { loginValidator, registerValidator } from "../middlewares/validatorAuth.js"
import { passwordValidatorMiddleware } from "../middlewares/validatePassword.js"

const router = Router()

router.post(
    "/login",
    loginValidator,
    login
)

router.post(
    "/register",
    passwordValidatorMiddleware,
    registerValidator,
    register
)

router.get(
    "/verify",
    verifyEmail
)

export default router