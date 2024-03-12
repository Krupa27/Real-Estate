import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

export const createUser = asyncHandler(async (req, res) => {
  console.log("Checking user in our database");

  let { email } = req.body;
  const userExists = await prisma.user.findUnique({ where: { email: email } });
  if (!userExists) {
    const user = await prisma.user.create({ data: req.body });
    res.send({
      message: "Registered Successfully",
      user: user,
    });
  } else {
    res.send({ message: "User already exists", data: req.body }).status(201);
    console.log(email + " -> Already registered");
  }
});

export const bookVisit = asyncHandler(async(req,res)=>{
  const {email,date} = req.body;
  const {id} = req.params;

  try{
    const bookedalready = await prisma.user.findUnique({
      where:{email},
      select: {bookedvisits:true}
    })

    if(bookedalready.bookedvisits.some((visit)=> visit.id === id )){
      res.json({ message: "This residency is booked by you" }).status(401);
    }
    else{
      await prisma.user.update({
        where:{email},
        data:{
          bookedvisits:{push: {id,date}}
        }

      })
      res.send("Successfully Booked").status(201);
    }

  }catch(err){
    throw new Error(err.message);
  }


})

export const allBookings = asyncHandler(async(req,res)=>{
  const {email} = req.body;

  try{
    const bookings = await prisma.user.findUnique({
      where:{email},
      select:{bookedvisits:true}
    })
    res.send(bookings).status(200);
  }catch(err){
    throw new Error(err.message);
  }


})

export const cancelBooking = asyncHandler(async(req,res)=>{
  const {email} = req.body;
  const {id} = req.params;

  const user = await prisma.user.findUnique({
    where:{email},
    select:{bookedvisits:true}
  })

  const index = user.bookedvisits.findIndex((visit)=> visit.id === id);

  if(index === -1){
    res.json({message:"No Bookings"}).status(401);
  }else{

    user.bookedvisits.splice(index,1)

    await prisma.user.update({
      where:{email},
      data:{
        bookedvisits: user.bookedvisits
      }
    })

    res.send("Booking cancelled successfully")


  }
})

export const tofavList = asyncHandler(async(req,res)=>{
  const {email} = req.body;
  const {rid} = req.params;


  try{

    const user = await prisma.user.findUnique({
      where:{email}
    })
  
    if(user.favResidenciesID.includes(rid)){
      const updatefav = await prisma.user.update({
        where:{email},
        data:{
          favResidenciesID: {
            set: user.favResidenciesID.filter((id)=> id !== rid)
          }
        }
      }) 
  
      res.send({message:"Removed from Favlist",user:updatefav})
    }else{
      const updatefav = await prisma.user.update({
        where:{email},
        data:{
          favResidenciesID:{
            push:rid
          }
        }
      })
      res.send({message:"Pushed into Favlist",user:updatefav})
    }
  }catch(err){
    throw new Error(err.message);
  }
})

export const allFavlist = asyncHandler(async(req,res)=>{
  const {email} = req.body;
  try{

    const favresid = await prisma.user.findUnique({
      where: { email },
      select: { favResidenciesID: true },
    });
    res.send(favresid).status(201);


  }catch(err){
    throw new Error(err.message);
  }

  
})
