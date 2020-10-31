export type UserModel = {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  patronymic: string;
};

export type TutorialPreviewModel = {
  id: number;
  title: string;
  description: string;
  isDraft: boolean;
  isPublic: boolean;
  stepsCount: number;
  author: UserModel;
  created: string;
};
