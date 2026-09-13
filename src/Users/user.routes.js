import { Router } from "express";
import { getUsers, putUser, updatePassword, getUsersPending, activeUsers } from "./user.controller.js";
import { passwordValidatorMiddleware } from "../middlewares/validatePassword.js";
import { validatorListDataUser, validatorUpdateUser } from "../middlewares/validatorUser.js";
import { validatorActiveUser, validatorListPending } from "../middlewares/validatorAdmin.js";
import { valueJWT } from "../middlewares/valueJWT.js";


const router = Router()

router.get(
    "/personalData",
    validatorListDataUser,
    getUsers
)

router.put(
    "/updateData",
    validatorUpdateUser,
    putUser
)

router.put(
    "/updatePassword/:id",
    valueJWT,
    passwordValidatorMiddleware,
    updatePassword
)

// //////////////////////// Administrador //////////////////////// //

router.get(
    "/pending",
    validatorListPending,
    getUsersPending
);

router.post(
    "/active/:id",
    validatorActiveUser,
    activeUsers
);

export default router