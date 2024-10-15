import { useMemo } from "react";
import { photoService } from "../../services/photo.service";

export const usePhoto = (folder) => {
  const uploadPhoto = async (file) => {
    if (!file) return;
    const formData = new FormData();
    formData.append("image", file[0]);

    const imageUrl = await photoService.uploadPhoto(formData, folder);

    return imageUrl;
  };

  return useMemo(
    () => ({
      uploadPhoto,
    }),
    [uploadPhoto]
  );
};
