import { Router } from 'express'
import { literal } from 'sequelize';
import { sequelize } from '../models';

import {CommunityCategory} from '../models/communitycategory';
import { CommunitySubCategory } from '../models/communitysubcategory';


const router = Router();

export const indexRouter = router.get('/',async(req,res,next)=>{
  try{
    CommunityCategory
    const data = await CommunitySubCategory.findAll({
      where:{
        //categoryId:parseInt(`${req.query.pk}`),
        //communitySubCategoryId:parseInt(`${req.query.sub}`)
      },
      order:[
        ['communitySubCategoryId','desc']
      ],
      
    })
    res.json({
      data
    })
  }catch(e){
    throw e
  }
  
  
  
})

