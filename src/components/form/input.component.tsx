import { Input } from "antd";
import { Controller } from "react-hook-form";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
export enum InputType {
  EMAIL = "email",
  TEXT = "text",
  TEL = "tel",
  URL = "url",
}
export interface TextInputProps {
  name: string;
  errorMsg: string | null;
  type: InputType;
  control: any;
}
export const TextInputComponent = ({
  name,
  errorMsg = null,
  type = InputType.TEXT,
  control,
}: TextInputProps) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <Input
              type={type}
              id={name}
              placeholder={`Enter your ${name}`}
              status={errorMsg ? "error" : ""}
              {...field}
            />
            <span className="text-red-800 text-sm italic">{errorMsg}</span>
          </>
        )}
      />
    </>
  );
};

export const PasswordInputComponent = ({
  name,
  errorMsg = null,
  control,
}: TextInputProps) => {
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
              iconRender={(visible: any) =>
                visible ? <AiFillEye /> : <AiFillEyeInvisible />
              }
              {...field}
            />
            <span className="text-red-800 text-sm italic">{errorMsg}</span>
          </>
        )}
      />
    </>
  );
};
export interface LabelProps {
  classes?: string;
  htmlFor?: string | undefined;
  children: any;
}

export const InputLabel = ({
  classes = "w-1/3",
  htmlFor,
  children,
}: LabelProps) => {
  return (
    <>
      <label className={classes} htmlFor={htmlFor}>
        {children}
      </label>
    </>
  );
};
