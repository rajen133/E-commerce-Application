import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import bannerSvc from "../services/banner.service";

export const BannerContext = createContext({
  data: [] as any,
  loading: false,
  setLoading: (_loading: boolean) => {},
  pagination: { current: 1, pageSize: 10 },
  loadData: (_query: any) => {},
});
//

const BannerProvider = ({ children }: { children: any }) => {
  const [data, setData] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });

  const loadData = async (query: any = {}) => {
    try {
      const response = await bannerSvc.get("/products", {
        params: {
          keyword: query.keyword || "",
          page: +query.page || 1,
          limit: +query.limit || 10,
        },
      });
      const filteredData = response.data.products.map((item: any) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        category: item.category,
        price: item.price,
        images: item.images,
      }));
      setData(filteredData);
      // console.log("Banner data", filteredData);
      setPagination({
        current: response.data.products.page,
        pageSize: response.data.products.limit,
      });
    } catch (exception) {
      console.error(exception);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    //data fetching api call
    loadData();
  }, []);

  return (
    <>
      <BannerContext.Provider
        value={{
          data: data,
          loading: loading,
          setLoading: setLoading,
          pagination: pagination,
          loadData: loadData,
        }}
      >
        {children}
      </BannerContext.Provider>
    </>
  );
};
export default BannerProvider;

// Custom Banner hook
export const useBanner = () => {
  let { data, loading, setLoading, pagination, loadData } =
    useContext(BannerContext);
  return { data, loading, setLoading, pagination, loadData };
};
