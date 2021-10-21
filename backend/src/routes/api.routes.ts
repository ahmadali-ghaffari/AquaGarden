import express from 'express';
import cors from 'cors';
import errorMiddleware from '../middlewares/error-handler';
import { plantController } from '../controllers/plant-controller';
import { registrationController } from '../controllers/registration-controller';
import { loginController } from '../controllers/login-controller';
import verifyToken from '../middlewares/authorization';

const router = express.Router();

router.use(cors());
router.use(express.json());

router.post('/register', registrationController.newUser);
router.post('/login', loginController.checkUserData);
router.get('/plants', plantController.getAllPlants);
router.put('/plants/:plantId/upvote', plantController.upvotePlantPostById);
router.put('/plants/:plantId/downvote', plantController.downvotePlantPostById);

router.use(errorMiddleware)
// router.use(verifyToken)

export default router;
