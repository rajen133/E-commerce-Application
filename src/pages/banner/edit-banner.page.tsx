import { useParams, useSearchParams } from "react-router";

const EditBanner = () => {
  //params
  const params = useParams();

  //query
  const [query, setQuery] = useSearchParams();
  console.log(query.get("test"));
  return <>The content of {params.id}</>;
};

export default EditBanner;
