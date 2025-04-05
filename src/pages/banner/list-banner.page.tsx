import TableComponent, {
  ColumnsType,
} from "../../components/table/table.component";
import { useBanner } from "../../context/banner.context";

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
    render: () => <>Edit/Delete</>,
  },
];

const ListBanner = () => {
  const { data, loading, setLoading } = useBanner();
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
        />
      </div>
    </>
  );
};

export default ListBanner;
