import { Content } from "antd/es/layout/layout";
import {
  InputLabel,
  InputType,
  TextInputComponent,
  UploadSingleFile,
} from "../../components/form/input.component";
import { useForm } from "react-hook-form";
import { Button } from "antd";
import { DeleteOutlined, SendOutlined } from "@ant-design/icons";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import bannerSvc from "../../services/banner.service";
import { notify } from "../../utilities/helpers";
import { useNavigate } from "react-router";

const schemaObj = yup.object({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  category: yup.string().required("Category is required"),
  price: yup.number().required(),
  image: yup.mixed().required("Image is required"),
});

const CreateBanner = () => {
  const navigate = useNavigate();
  const {
    control,
    formState: { errors, isSubmitting },
    setValue,
    handleSubmit,
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      category: "",
      price: 0,
      image: "",
    },
    resolver: yupResolver(schemaObj),
  });

  const submitForm = async (data: any) => {
    try {
      const response = await bannerSvc.post("/products/add", data, {
        file: true,
      });
      console.log(response);
      notify("Banner created successfully", "success");

      navigate("/admin/banner");
    } catch (exception) {
      notify("Error occurred while creating banner", "error");
    }
  };
  return (
    <>
      <Content className=" h-screen bg-white p-2.5 rounded-md ">
        <div className="flex mb-4">
          <h1 className="text-2xl font-semibold text-teal-800 underline underline-offset-2">
            Create Banner
          </h1>
        </div>
        <div className="flex">
          <form className="w-full" onSubmit={handleSubmit(submitForm)}>
            <div className="flex flex-row w-full">
              <div className="w-1/4 ">
                <InputLabel
                  htmlFor="title"
                  classes="w-full font-semibold text-lg"
                >
                  Title:
                </InputLabel>
              </div>
              <div className="w-3/4 mb-4">
                <TextInputComponent
                  type={InputType.TEXT}
                  name="title"
                  control={control}
                  errorMsg={errors.title?.message as string}
                />
              </div>
            </div>
            <div className="flex flex-row w-full">
              <div className="w-1/4 ">
                <InputLabel
                  htmlFor="description"
                  classes="w-full font-semibold text-lg"
                >
                  Description:
                </InputLabel>
              </div>
              <div className="w-3/4 mb-4">
                <TextInputComponent
                  type={InputType.TEXT}
                  name="description"
                  control={control}
                  errorMsg={errors.description?.message as string}
                />
              </div>
            </div>

            <div className="flex flex-row w-full">
              <div className="w-1/4 ">
                <InputLabel
                  htmlFor="category"
                  classes="w-full font-semibold text-lg"
                >
                  Categories:
                </InputLabel>
              </div>
              <div className="w-3/4 mb-4">
                <TextInputComponent
                  type={InputType.TEXT}
                  name="category"
                  control={control}
                  errorMsg={errors.category?.message as string}
                />
              </div>
            </div>
            <div className="flex flex-row w-full">
              <div className="w-1/4 ">
                <InputLabel
                  htmlFor="price"
                  classes="w-full font-semibold text-lg"
                >
                  Price (Rs.):
                </InputLabel>
              </div>
              <div className="w-3/4 mb-4">
                <TextInputComponent
                  type={InputType.NUMBER}
                  name="price"
                  control={control}
                  errorMsg={errors.price?.message as string}
                />
              </div>
            </div>
            <div className="flex flex-row w-full">
              <div className="w-1/4 ">
                <InputLabel
                  htmlFor="image"
                  classes="w-full font-semibold text-lg"
                >
                  Image:
                </InputLabel>
              </div>

              <UploadSingleFile
                name="image"
                setValue={setValue}
                errorMsg={errors?.image?.message}
              />
            </div>
            <div className="flex flex-row w-full mb-4 gap-5 items-center justify-center">
              <Button
                htmlType="reset"
                variant="solid"
                color="red"
                icon={<DeleteOutlined />}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                htmlType="submit"
                variant="solid"
                className="bg-teal-900! text-white! hover:border-teal-950!"
                icon={<SendOutlined />}
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </Content>
    </>
  );
};

export default CreateBanner;
