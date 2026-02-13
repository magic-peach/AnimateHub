import { Router } from "express";
import {
    generateOTP,
    verifyOTP
} from "../controllers/user.controller";
import {
    googleLoginController
} from "../controllers/googleAuth.controller.js";   
import { 
    verifyUserMailController, 
    resendVerificationEmail,
    forgotPassword,
    resetPassword 
} from "../controllers/user.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router()

// Authentication routes
router.post("/register", registerController)
router.post("/login", loginController)
router.post("/logout", logoutController)
router.get("/check", authMiddleware, getCurrentUserController)
router.post("/update-password", authMiddleware, updatePasswordController)
router.post("/google-login", googleLoginController);

// Email verification routes
router.get("/verify-email/:token", verifyUserMailController)
router.post("/resend-verification", authMiddleware, resendVerificationEmail)

// OTP routes
router.post("/generate-otp", authMiddleware, generateOTP);
router.post("/verify-otp", authMiddleware, verifyOTP)

// Password reset routes
router.post("/forgot-password", forgotPassword)
router.post("/reset-password/:token", resetPassword)


export default router