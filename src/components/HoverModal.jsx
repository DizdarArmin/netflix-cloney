import ReactDom from "react-dom";

export default function HoverModal({ children, hook }) {
  const [modal, setShowModal, id, isMoreDetails, onClose] = hook;

  if (!modal) return null;

  return ReactDom.createPortal(
    <div className="overlay-style-hover" onClick={() => setShowModal(false)}>
      <div onClick={(e) => e.stopPropagation()} className="modal-style-hover">
        {children}
      </div>
    </div>,
    document.getElementById(id)
  );
}
