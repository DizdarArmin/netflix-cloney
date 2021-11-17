import AddImage from "./AddImage";
import { useState, useEffect } from "react";
import html from "../../data/AddForm.json";
import Input from "./Input";
import TextArea from "./TextArea";
import Checkbox from "./Checkbox";

import { useParams, useNavigate } from "react-router";
import { draftCreator } from "../../scripts/crud";
import { updateDocument } from "../../scripts/fireStore";
import ButtonSave from "./ButtonSave";
import ButtonBack from "./ButtonBack";

import Header from "./Header";
import ButtonDelete from "./ButtonDelete";

export default function AddForm({ document }) {
  const { category, id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState({});
  const [image, setImage] = useState();
  const [video, setVideo] = useState();
  const [trailer, setTrailer] = useState();
  const [imageRef, setImageRef] = useState();
  const [genres, setGenres] = useState();
  const [about, setAbout] = useState();
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [description, setDescription] = useState();
  const [director, setDirector] = useState();
  const [year, setYear] = useState();
  const [cast, setCast] = useState();
  const [publish, setPublish] = useState();

  useEffect(() => {
    setName(title.name);
    setAge(title.ageLimit);
    setDescription(title.description);
    setTrailer(title.trailer);
    setVideo(title.video);
    setDirector(title.director);
    setGenres(title.genres);
    setAbout(title.about);
    setYear(title.year);
    setCast(title.cast);
    setPublish(title.published);
    setImage(title.thumbnail);
    setImageRef(title.thumbnailRef);
  }, [title]);

  useEffect(() => {
    if (document) {
      setTitle(document);
    } else {
      draftCreator(html, image, imageRef, category);
    }
  }, [document]);

  async function onSubmit(e) {
    e.preventDefault();
    const data = {
      name: name,
      ageLimit: age,
      description: description,
      trailer: trailer,
      video: video,
      genres: genres,
      about: about,
      director: director,
      year: year,
      cast: cast,
      thumbnail: image,
      published: publish,
    };
    const update = await updateDocument(category, id, data);
    console.log(update);
    navigate(-1);
  }

  return (
    <form className="title-container" onSubmit={onSubmit}>
      <h1>{name}</h1>
      <div className="buttons">
        <ButtonBack navigate={navigate} />
        <ButtonDelete hook={[navigate, category, id, imageRef]} />
        <ButtonSave />
      </div>
      <div className="form">
        <div>
          <Input hook={[html.name, name, setName]} />
          <Input hook={[html.ageLimit, age, setAge]} />
          <TextArea hook={[html.description, description, setDescription]} />
          <AddImage hook={[name, image, setImage, setImageRef]} />
        </div>
        <div>
          <Input hook={[html.trailer, trailer, setTrailer]} />
          <Input hook={[html.director, director, setDirector]} />
          <TextArea hook={[html.genres, genres, setGenres]} />
          <Input hook={[html.about, about, setAbout]} />
        </div>
        <div>
          <Input hook={[html.video, video, setVideo]} />
          <Input hook={[html.year, year, setYear]} />
          <TextArea hook={[html.cast, cast, setCast]} />
          <Checkbox hook={[html.publish, publish, setPublish]} />
        </div>
      </div>
      <Header image={image} trailer={trailer} video={video} />
    </form>
  );
}
