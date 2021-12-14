import { DataTypes, Model } from "sequelize";
import { sequelize } from ".";
export type CommunitySubCategoryType = {
  communitySubCategoryId?: number;
  categoryId: number;
  communitySubtitle: string;
};
export class CommunitySubCategory extends Model<CommunitySubCategoryType> {}

CommunitySubCategory.init(
  {
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    communitySubCategoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    communitySubtitle: {
      type: DataTypes.STRING(45),
      allowNull: false,
      validate: {
        isLowercase: true,
      },
    },
  },
  {
    sequelize,
    tableName: "communitysubcategory",
    createdAt: false,
    updatedAt: false,
    hooks:{
      beforeFind:(options)=>{
      },
      afterFind:(instances:any[],options)=>{
        for(const instance of instances){
          CommunitySubCategory.update({
            communitySubtitle:instance.getDataValue('communitySubtitle').replace(/[1-9ㄱ-ㅎ]/ig,''),
          },{
            where:{
              communitySubCategoryId:instance.getDataValue('communitySubCategoryId'),
            }
          })
        }  
      },
      beforeUpdate:(instance,option) => {
        isEven: ()=>{
          
        }
      }
    },
    

  }
);
