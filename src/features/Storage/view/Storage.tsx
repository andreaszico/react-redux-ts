import { Button } from "@atoms/buttons";
import { Input } from "@atoms/inputs";
import { FC } from "react";

export const storageRoutName = "/storage";

const Storage: FC = () => {
  return (
    <div className="flex flex-col p-4">
      <p className="font-bold mb-2 uppercase">Buttons</p>
      <div className="button flex flex-wrap gap-2">
        <Button text="Primary" type="primary" />
        <Button text="Secondary" type="secondary" />
      </div>
      <p className="font-bold mt-5 mb-2 uppercase">Input</p>
      <div className="flex flex-wrap gap-2">
        <Input label="Username" placeholder="Masukkan username" />
        <Input
          label="Password"
          placeholder="Masukkan password"
          obscure={true}
        />
      </div>
      <p className="font-bold mt-5 mb-2 uppercase">Alerts</p>
      <div className="flex flex-wrap gap-2">
        <p></p>
      </div>
    </div>
  );
};

export default Storage;
