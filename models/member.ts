import { DataTypes, Model } from "sequelize";
import { sequelize } from ".";

export type MemberType = {
  memNo:number;
  locationCode:string;
}

export class Member extends Model<MemberType>{}

Member.init(
  {
    memNo:{
      type:DataTypes.INTEGER,
      primaryKey:true
    },
    locationCode:{
      type:DataTypes.STRING(45),
      allowNull:false
    }
  },
  {
    sequelize,
    updatedAt:false,
    createdAt:false,
  }
)
