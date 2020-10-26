import { UserModel } from "./UserModel";

export type TutorialPreviewModel = {
  id: number;
  title: string;
  description: string;
  isDraft: boolean;
  isPublic: boolean;
  stepsCount: number;
  author: UserModel;
};
