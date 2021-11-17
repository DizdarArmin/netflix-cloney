import Navbar from "../components/home/Navbar";
import { useParams } from "react-router";
import AddForm from "../components/admin/AddForm";

export default function Add() {
  const { category } = useParams();
  return (
    <div className="manage-add">
      <Navbar />
      <div className="manage-container">
        <AddForm />
      </div>
    </div>
  );
}
