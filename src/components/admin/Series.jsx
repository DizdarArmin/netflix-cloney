import html from "../../data/AddForm.json";

import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";
import ReactPlayer from "react-player";
import Checkbox from "./Checkbox";
import {
  createDocument,
  createDocumentWithId,
  removeDocument,
} from "../../scripts/fireStore";
import { useState, useEffect } from "react";
import useDocument from "../../hooks/useDocument";
export default function Series({ id }) {
  const [editEpisode, setEditEpisode] = useState({});
  const [name, setName] = useState("");
  const [season, setSeason] = useState(0);
  const [episode, setEpisode] = useState(0);
  const [published, setPublished] = useState(false);
  const [video, setVideo] = useState();
  const [description, setDescription] = useState();

  const { document } = useDocument(
    `/series/${id}/seasons/${season}/episodes`,
    episode
  );

  useEffect(() => {
    setName(editEpisode.name || "");
    setVideo(editEpisode.video || "");
    setDescription(editEpisode.description || "");
    setPublished(editEpisode.published);
  }, [editEpisode]);

  useEffect(() => {
    setEditEpisode(document);
  }, [document]);

  const data = {
    name: name,
    description: description,
    published: published,
    video: video,
  };
  async function onSubmit(e) {
    e.preventDefault();
    await createDocumentWithId(`/series/${id}/seasons`, season, {
      season: season,
      published: published,
    });
    const response = await createDocumentWithId(
      `/series/${id}/seasons/${season}/episodes`,
      episode,
      data
    );
    if (response === episode) {
      alert("Success");
    }
  }
  async function onDelete() {
    const confirm = window.confirm("Are you sure you want to delete this?");
    if (confirm) {
      await removeDocument(`/series/${id}/seasons/${season}/episodes`, episode);
      window.location.reload();
    } else return null;
  }
  return (
    <form className="add-series" onSubmit={(e) => onSubmit(e)}>
      <h1>Series</h1>
      <div className="form">
        <div>
          <Input hook={[html.name, name, setName]} />
        </div>
        <div>
          <Select hook={["Season", season, setSeason]} />
        </div>
        <div>
          <Select hook={["Episode", episode, setEpisode]} />
        </div>
      </div>
      <div>
        <Input hook={[html.video, video, setVideo]} />
        <div className="bottom">
          <div className="wrapp">
            <TextArea hook={[html.description, description, setDescription]} />
            <Checkbox hook={[html.publish, published, setPublished]} />
            <div className="btns">
              <button
                type="reset"
                onClick={onDelete}
                className="outline-button"
              >
                Delete
              </button>
              <button type="submit" className="red-button">
                Save
              </button>
            </div>
          </div>
          {document && <ReactPlayer controls width="100%" url={video} />}
        </div>
      </div>
    </form>
  );
}
