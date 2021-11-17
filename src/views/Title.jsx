import Navbar from "../components/home/Navbar";
import { useParams } from "react-router";
import useDocument from "../hooks/useDocument";
import { useEffect, useState } from "react";
import AddForm from "../components/admin/AddForm";
import Series from "../components/admin/Series";
export default function Title() {
  const { category, id } = useParams();
  const { document } = useDocument(category, id);
  const [title, setTitle] = useState([]);

  useEffect(() => {
    setTitle(document);
  }, [document]);

  return (
    <div className="manage-title">
      <Navbar></Navbar>
      <div className="manage-container">
        <AddForm document={title} />
        {category === "series" && <Series id={id} />}
      </div>
    </div>
  );
}
