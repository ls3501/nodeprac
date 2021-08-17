import { query, Request, Router } from "express";
import { CommunityObject } from "../models/communityObject";
import {
  CommunitySubCategory,
  CommunitySubCategoryType,
} from "../models/communitysubcategory";

export const insRouter = Router();

insRouter.get<
  unknown,
  unknown,
  unknown,
  Pick<CommunitySubCategoryType, "categoryId" | "communitySubtitle">
>("/", async (req, res, next) => {
  
  const result = await CommunitySubCategory.create({
    communitySubtitle: "dd",
    categoryId: 1,
  });
  res.json({
    result,
  });
});

insRouter.get<unknown, unknown, unknown, CommunitySubCategoryType>(
  "/communityObject",
  async (req, res, next) => {
    const result = await CommunityObject.create({
      communityObjectId: parseInt(`${req.query}`),
      categoryId: 1,
      communitySubCategoryId: 1,
    });
    res.json({
      result,
    });
  }
);

insRouter.get("/21312312", (req, res, next) => {
  const a = req.query;
});
