import { useLocation } from "react-router-dom"

const Machine = () => {
  const location = useLocation();

  return <>
    {"machine" + location.pathname}
  </>
}

export default Machine; 