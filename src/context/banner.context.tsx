import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import bannerSvc from "../services/banner.service";

export const BannerContext = createContext({
  data: [] as any,
  loading: false,
  setLoading: (loading: boolean) => {},
});

const BannerProvider = ({ children }: { children: any }) => {
  const [data, setData] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(true);

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
        title: item.title,
        description: item.description,
        category: item.category,
        price: item.price,
        images: item.images,
      }));
      setData(filteredData);
      console.log("Banner data", filteredData);
    } catch (exception) {
      console.error(exception);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    //data fetching api call
    loadData();
    console.log("BannerProvider mounted");
  }, []);

  return (
    <>
      <BannerContext.Provider
        value={{
          data: data,
          loading: loading,
          setLoading: setLoading,
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
  let { data, loading, setLoading } = useContext(BannerContext);
  return { data, loading, setLoading };
};
