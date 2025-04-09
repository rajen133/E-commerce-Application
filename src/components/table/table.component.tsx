import { useEffect, useState } from "react";
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
  loadData?: (params: any) => void;
}

const TableComponent = ({
  columns,
  data,
  loading,
  setLoading,
  pagination,
  loadData,
}: ITableProps) => {
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: pagination,
  });

  useEffect(() => {
    setTableParams((prev) => ({
      ...prev,
      pagination,
    }));
  }, [pagination]);

  const handleTableChange: TableProps<any>["onChange"] = (pagination) => {
    const params = {
      page: pagination.current,
      limit: pagination.pageSize,
    };

    setTableParams({
      pagination,
    });

    if (loadData) {
      setLoading?.(true);
      loadData(params);
    }
  };

  return (
    <Table<any>
      columns={columns}
      rowKey={(record) => record.id || record._id}
      dataSource={data}
      pagination={tableParams.pagination}
      loading={loading}
      onChange={handleTableChange}
      className="h-screen overflow-y-scroll"
      sticky
    />
  );
};

export default TableComponent;
