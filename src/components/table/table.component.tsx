/* eslint-disable compat/compat */
import { useState } from "react";
import type { GetProp, TableProps } from "antd";
import { Table } from "antd";
import type { SorterResult } from "antd/es/table/interface";

export type ColumnsType<T extends object = object> = TableProps<T>["columns"];
type TablePaginationConfig = Exclude<
  GetProp<TableProps, "pagination">,
  boolean
>;

interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: SorterResult<any>["field"];
  sortOrder?: SorterResult<any>["order"];
  filters?: Parameters<GetProp<TableProps, "onChange">>[1];
}

export interface ITableProps {
  columns: ColumnsType;
  data: Array<any>;
  loading?: boolean;
  setLoading?: Function;
  pagination?: {
    current: number;
    pageSize: number;
  };
}

//Table Component
const TableComponent = ({
  columns,
  data,
  loading,
  pagination,
}: ITableProps) => {
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: pagination,
  });

  const handleTableChange: TableProps<any>["onChange"] = (pagination) => {
    setTableParams({
      pagination,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      // setData([]);
    }
  };

  return (
    <Table<any>
      columns={columns}
      rowKey={(record, index) => record.id || record._id || index}
      dataSource={data}
      pagination={tableParams.pagination}
      loading={loading}
      onChange={handleTableChange}
      className="h-screen overflow-y-scroll "
      sticky={true}
    />
  );
};

export default TableComponent;
