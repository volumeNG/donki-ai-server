import bcryptjs from 'bcryptjs';
import config from '../config';
const createBycryptPassword = async (password: string): Promise<string> => {
  const bcryptPass = await bcryptjs.hash(
    password,
    Number(config.bycrypt_salt_rounds)
  );

  return bcryptPass;
};
export default createBycryptPassword;
