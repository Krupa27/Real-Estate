import express  from 'express';
import { allBookings, allFavlist, bookVisit, cancelBooking, createUser, tofavList } from '../controllers/userCntrl.js'
const router = express.Router();

router.post("/register",createUser);
router.post("/bookVisit/:id",bookVisit);
router.post("/allBookings",allBookings);
router.post("/cancelBooking/:id",cancelBooking);
router.post("/FavList/:rid",tofavList);
router.get("/AllFavList/",allFavlist);

export {router as userRoute}