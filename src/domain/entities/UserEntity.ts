enum UserRoleEnum {
  normal = 'normal',
}

interface UserParams {
  id: number;
  username: string;
  phoneNumber: string;
  role: UserRoleEnum;
  createdAt: string;
  updatedAt: string;
  __v: number;
  _id: string;
}

export class UserEntity {}
