import { DataTypes, Model } from "sequelize";
import { sequelize } from "./index";


export class CommunityCategory extends Model<{
  categoryId:number;
  categoryName:string;
}>{}

CommunityCategory.init({
  categoryId:{
    type:DataTypes.INTEGER,
    primaryKey:true
  },
  categoryName:{
    type:DataTypes.STRING(45),
    allowNull:false
  },
  
},{
  sequelize,
  tableName:"communitycategory",
  createdAt:false,
  updatedAt:false,

})


