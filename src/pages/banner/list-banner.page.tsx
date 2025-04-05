import { NavLink } from "react-router";
import TableComponent, {
  ColumnsType,
} from "../../components/table/table.component";
import { useBanner } from "../../context/banner.context";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { Button, Popconfirm } from "antd";

const deleteBanner = (id: string) => {
  console.log(id);
};

const columns: ColumnsType<any> = [
  {
    title: "Title",
    dataIndex: "title",
  },
  {
    title: "Description",
    dataIndex: "description",
    width: "30%",
  },
  {
    title: "Categories",
    dataIndex: "category",
  },
  {
    title: "Price",
    dataIndex: "price",
  },
  {
    title: "Images",
    dataIndex: "images",
    render: (value) => (
      <>
        <img src={value?.optimized_url} alt="Image" className="w-20" />
      </>
    ),
  },
  {
    title: "Action",
    dataIndex: "id",
    render: (value) => (
      <>
        <div className="flex gap-3">
          <NavLink
            to={"/admin/banner/" + value}
            className={
              "flex items-center justify-center rounded-full w-8! h-8! border-teal-700! bg-teal-700! text-white! hover:bg-teal-800! hover:border-teal-800!"
            }
          >
            <AiOutlineEdit />
          </NavLink>

          <Popconfirm
            title="Delete Banner!"
            description="Are you sure want to delete?"
            okText="Delete"
            cancelText="Cancel"
            onConfirm={() => {
              deleteBanner(value);
            }}
          >
            <Button
              variant="solid"
              className="w-8 h-8 rounded-full! bg-red-700! border-red-700! text-white!"
              icon={<AiOutlineDelete />}
            ></Button>
          </Popconfirm>
        </div>
      </>
    ),
  },
];

const ListBanner = () => {
  const { data, loading, setLoading, pagination } = useBanner();
  return (
    <>
      <div className="flex flex-col bg-white p-4 h-screen w-full rounded-md">
        <div>
          <h1 className="text-teal-800 text-semibold text-2xl underline underline-offset-2">
            Banner Listing
          </h1>
        </div>

        <TableComponent
          columns={columns}
          data={data}
          loading={loading}
          setLoading={setLoading}
          pagination={pagination}
        />
      </div>
    </>
  );
};

export default ListBanner;
