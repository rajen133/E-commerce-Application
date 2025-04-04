// import { Table } from "antd";
import TableComponent from "../../components/table/table.component";

// const columns = [
//   {
//     title: "Title",
//     key: "title",
//     dataIndex: "title",
//   },
//   {
//     title: "Description",
//     key: "description",
//     dataIndex: "description",
//   },
//   {
//     title: "Category",
//     key: "category",
//     dataIndex: "category",
//   },
//   {
//     title: "Price (Rs.)",
//     key: "price",
//     dataIndex: "price",
//   },
//   {
//     title: "Image",
//     key: "image",
//     dataIndex: "image",
//     render: (val: any) => <img src={val.optimized_url} alt="image" />,
//   },
//   {
//     title: "Action",
//     key: "action",
//     render: (_: any, data: any) => (
//       <>
//         <a href={"/admin/banner" + data._id} className="me-3">
//           Edit
//         </a>
//         <a href="/admin/banner">Delete</a>
//       </>
//     ),
//   },
// ];

// const data = [
//   {
//     key: 1,
//     _id: 1234,
//     title: "Dell",
//     price: 80000,
//     description: "Purchase on 01 January",
//     category: "Laptop",
//     image: { url: "", optimized_url: "" },
//   },
//   {
//     key: 2,
//     _id: 12345,
//     title: "Acer",
//     price: 80000,
//     description: "Purchase on 01 January",
//     category: "Desktop",
//     image: { url: "", optimized_url: "" },
//   },
// ];

const ListBanner = () => {
  return (
    <>
      <div className="flex flex-col bg-white p-4 h-screen w-full rounded-md">
        <div>
          <h1 className="text-teal-800 text-semibold text-2xl underline underline-offset-2">
            Banner Listing
          </h1>
        </div>
        {/* <Table columns={columns} dataSource={data} className="w-full!"></Table> */}

        <TableComponent />
      </div>
    </>
  );
};

export default ListBanner;
