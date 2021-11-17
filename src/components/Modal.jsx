import ReactDom from "react-dom";

export default function Modal({ children, hook }) {
  const [modal, setShowModal] = hook;

  if (!modal) return null;
  return ReactDom.createPortal(
    <div className="overlay-style" onClick={() => setShowModal(false)}>
      <div onClick={(e) => e.stopPropagation()} className="modal-style">
        <i
          onClick={() => setShowModal(false)}
          className="fas fa-times-circle"
        />
        {children}
      </div>
    </div>,
    document.getElementById("portal")
  );
}
