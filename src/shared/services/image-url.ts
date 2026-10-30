import noImage from "../../assets/500px-No-Image-Placeholder.webp";
export { noImage };

const getCroppedImageUrl = (url?: string | null) => {
  if (!url) return noImage;

  const target = "media/";
  const mediaIndex = url.indexOf(target);
  if (mediaIndex === -1) return url;

  const index = mediaIndex + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
