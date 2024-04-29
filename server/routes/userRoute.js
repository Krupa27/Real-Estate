import express  from 'express';
import { allBookings, allFavlist, bookVisit, cancelBooking, createUser, tofavList } from '../controllers/userCntrl.js'
// import jwtCheck from '../config/auth0Config.js';
const router = express.Router();

router.post("/register", createUser);
router.post("/bookVisit/:id",bookVisit);
router.post("/allBookings",allBookings);
router.post("/removeBooking/:id", cancelBooking);
router.post("/toFav/:rid",tofavList);
router.get("/allFav",allFavlist);

export {router as userRoute}
