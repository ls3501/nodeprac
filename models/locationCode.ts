import { DataTypes, Model } from "sequelize";
import { sequelize } from ".";

export type LocationCodeType = {
  locationCode: number;
  lcoationKor: string;
  locationEng: string;
}

export class LocationCode extends Model<LocationCodeType>{}

LocationCode.init({
  locationCode:{
    type:DataTypes.INTEGER
  },
  lcoationKor:{
    type:DataTypes.STRING(45),
    validate:{
      is:/가-힣/g
    }
  },
  locationEng:{
    type:DataTypes.STRING(45),
    validate:{
      is:/a-zA-z/g
    }
  }
},{
  sequelize
})