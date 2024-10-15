import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { getMedia } from "../../../utils/getMedia";

const FileUploader = ({ fieldChange, mediaUrl }) => {
  const [file, setFile] = useState([]);
  const [fileUrl, setFileUrl] = useState(mediaUrl);

  const onDrop = useCallback(
    (acceptedFiles) => {
      setFile(acceptedFiles);
      fieldChange(acceptedFiles);
      setFileUrl(URL.createObjectURL(acceptedFiles[0]));
    },
    [file]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpeg", ".jpg", ".svg"],
    },
  });

  return (
    <div {...getRootProps()} className="w-full">
      <input {...getInputProps()} />
      {fileUrl ? (
        <>
          <div className="flex flex-1 justify-center w-full p-2 bg-input_main rounded-lg">
            <img
              src={
                fileUrl?.split("/")?.includes("upload")
                  ? getMedia(fileUrl)
                  : fileUrl
              }
              alt="image"
              className="file_uploader-img object-cover"
            />
          </div>
          <p className="font-semibold text-white_main text-[20px]">
            Нажмите или перетащите фотографию, чтобы заменить ее.
          </p>
        </>
      ) : (
        <div className="file_uploader-box rounded-[14px]  bg-input_main ">
          <img
            src="/file-upload.svg"
            alt="file-upload"
            width={96}
            height={77}
            className="object-cover"
          />

          <h3 className="font-semibold  text-[20px] mb-2 mt-6 text-black">
            Перетащите фото сюда
          </h3>
          <p className="font-semibold  text-[20px] mb-6 text-black">
            SVG, PNG, JPG
          </p>

          <button
            type="button"
            className=" flex-center rounded-xl p-[5px] font-semibold text-white_main text-[22px] bg-button_main"
          >
            Выбрать с компьютера
          </button>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
