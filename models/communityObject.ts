import { DataTypes, Model } from "sequelize";
import { sequelize } from ".";

export type CommunityObjectType = {
  communityObjectId: number;
  communitySubCategoryId: number;
  categoryId: number;
}

export class CommunityObject extends Model<CommunityObjectType> {}

CommunityObject.init(
  {
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    communityObjectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    communitySubCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "communityObject",
    createdAt:false,
    updatedAt:false,
  }
);
