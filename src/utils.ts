import bcrypt from "bcryptjs";

export const toCryptPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};
export const toCryptPasswordSync = (password: string) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

export const toComparePassword = async (password: string, hashKey: string) => {
  return await bcrypt.compare(password, hashKey);
};

export const getUser = (login: string) => {

}

