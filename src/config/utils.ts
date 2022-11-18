import * as bcrypt from "bcrypt";

export default function valid(value: string,password:string) {
    return bcrypt.compareSync(value, password);
  }