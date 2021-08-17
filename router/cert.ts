import { Router } from "express";

export const certRouter= Router();

certRouter.get('/',(req,res)=>{
  res.json(
    req.query
  )
})


