import { Input, Upload, Button } from "antd";
import { Controller } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadFile, UploadProps } from "antd";
import { useState } from "react";

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

export interface IUploadFileProps {
  name: string;
  setValue: Function;
  errorMsg?: string;
}
export const UploadSingleFile = ({
  name,
  setValue,
  errorMsg = "",
}: IUploadFileProps) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const props: UploadProps = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      //   setFileList([...fileList, file]);
      setFileList([file]);
      setValue(name, file as any);
      return false;
    },
    fileList,
  };
  return (
    <>
      <div className="w-2/4 mb-4">
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Select file</Button>
        </Upload>
        {errorMsg}
      </div>
      <div className="w-1/4">
        {fileList && fileList.length > 0 ? (
          <>
            <img
              src={URL.createObjectURL(fileList[0] as any)}
              alt="Image"
              className="w-32 border border-teal-100 rounded-sm"
            />
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
