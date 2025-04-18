import * as React from "react";
import { Heading } from "../components/parts/Heading";
import { TextField } from "../components/parts/TextField";
import { Button } from "../components/parts/button";
import { useAuth } from "../contexts/use-auth";

export const Login = () => {

const {login, userName, setUserName} = useAuth();

return(
  <main className="my-0 mx-auto w-4/5 text-center">
    <Heading level="h1">ログイン</Heading>
    <div className="flex gap-1">
      <TextField
        id="new-task"
        label="ユーザ名"
        value={userName}
        onChange={setUserName} type={"text"}
      />
      <Button onClick={login} color="blue">ログイン</Button>
    </div>
  </main>
  );
};