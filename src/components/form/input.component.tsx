import { Input } from "antd";
import { Controller } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export enum InputType {
  TEXT = "text",
  EMAIL = "email",
  TEL = "tel",
  URL = "url",
  NUMBER = "number",
}
interface ITextInputProps {
  name: string;
  errorMsg?: string | null;
  type?: InputType;
  control: any;
}

export interface IInputLabelProps {
  classes?: string;
  htmlFor?: string | undefined;
  children: any;
}

export const InputLabel = ({
  classes = "w-1/3",
  htmlFor = "",
  children,
}: IInputLabelProps) => {
  return (
    <>
      <label className={classes} htmlFor={htmlFor}>
        {children}
      </label>
    </>
  );
};
export const TextInputComponent = ({
  name,
  errorMsg = null,
  type = InputType.TEXT,
  control,
}: ITextInputProps) => {
  return (
    <>
      {/* Using <Controller/> component for validation */}
      <Controller
        name={name}
        control={control}
        //defaultvalue={}
        render={({ field }) => (
          <>
            <Input
              type={type}
              id={name}
              placeholder={`Enter your ${name}`}
              status={errorMsg ? "error" : ""}
              className="w-full"
              {...field}
            />
            <div className="flex flex-col">
              <span className="text-red-800 text-xs italic">{errorMsg}</span>
            </div>
          </>
        )}
      />
    </>
  );
};

export interface IPasswordInputProps {
  name: string;
  errorMsg?: string | null;
  control: any;
}

export const PasswordInputComponent = ({
  name,
  errorMsg,
  control,
}: IPasswordInputProps) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <Input.Password
              type="password"
              id={name}
              placeholder={`Enter your ${name}`}
              status={errorMsg ? "error" : ""}
              iconRender={(visible) =>
                visible ? <AiFillEye /> : <AiFillEyeInvisible />
              }
              {...field}
            />
            <span className="text-red-800 text-xs italic">{errorMsg}</span>
          </>
        )}
      />
    </>
  );
};
