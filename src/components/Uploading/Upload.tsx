import { ChangeEvent, FC, useState } from "react";
import upload from "./../../upload.jpeg";

export const Upload: FC = () => {
  const [picture, setPicture] = useState<any>(null);
  let $imagePreview = null;

  if (picture) {
    $imagePreview = <img className="previewT_image" src={picture} alt="" />;
  } else {
    $imagePreview = (
      <div className="previewText">Please select an Image for Preview</div>
    );
  }

  const uploadImage = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e: ProgressEvent<FileReader>) => {
      setPicture(reader.result);

      const image = new Image();
      image.src = e.target!.result as string;

      image.addEventListener("load", (e) => {
          console.log(image.width, image.height);
        },{
          once: true,
        }
      );
    };
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files![0];
    uploadImage(file);
  };

  const DragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const DragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const DragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    let file = e.dataTransfer.files[0];
    uploadImage(file);
  };


  return (
    <div className="upload_container">
      <h4>Uploading with preview </h4>
      <form>
        <label className="input_file">
          Choose file
          <input type="file" hidden onChange={handleImageChange} />
        </label>
      </form>

      <div
        className="drag_upload active"
        onDragStart={(e) => {
          DragStart(e);
        }}
        onDragLeave={(e) => {
          DragLeave(e);
        }}
        onDragOver={(e) => {
          DragOver(e);
        }}
        onDrop={(e) => {
          onDrop(e);
        }}>
        Or Drag and Drop image here{" "}
        <img className="drag_upload-image" src={upload} alt="" />{" "}
      </div>

      <div className="upload_preview">{$imagePreview}</div>
    </div>
  );
};
