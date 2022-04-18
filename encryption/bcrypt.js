import bcrypt from "bcrypt";

const saltRounds = 12;

export async function compareEncryptedPassword(plainTextPassword, hashedPassword){
    const isIdentical = await bcrypt.compare(plainTextPassword, hashedPassword);
    return isIdentical;
}

export async function encryptPassword(plainTextPassword){
    const hashedPassword = await bcrypt.hash(plainTextPassword, saltRounds);
    return hashedPassword;

}



