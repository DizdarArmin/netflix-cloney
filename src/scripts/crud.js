import { createDocument } from "./fireStore";
import { removeDocument } from "./fireStore";
import { removeFile } from "./storage";

export async function addCourse(id, name) {
  await createDocument("courses", {
    name: "Untitled course",
    by: name,
    owner: id,
  });
}

export async function removeCourse(collection, id) {
  collection.forEach(async (element) => {
    await removeDocument(`/courses/${id}/files`, element.id);
    await removeFile(element.ref);
  });
  await removeDocument("courses", id);
}

export async function draftCreator(html, image, category) {
  const data = {
    name: html.name.placeholder,
    ageLimit: html.ageLimit.placeholder,
    description: html.description.placeholder,
    director: html.director.placeholder,
    year: html.year.placeholder,
    cast: html.cast.placeholder,
    thumbnail: image,
    thumbnailRef: null,
    published: true,
    category: category,
  };
  const document = await createDocument(category, data);
  return document;
}
