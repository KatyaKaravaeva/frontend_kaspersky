import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTableData } from "../store/actionCreators/tableCreators";
import Table from "../components/table/table";
import WelcomePage from "../components/welcome/welcome";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTableData());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/table" element={<Table />} />
    </Routes>
  );
};
