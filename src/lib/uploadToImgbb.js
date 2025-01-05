export const uploadToImgbb = async (formData) => {
  const key = import.meta.env.VITE_imgbbAPI;
  const res = await fetch(`https://api.imgbb.com/1/upload?key=${key}`, {
    method: "POST",
    body: formData,
  });
  const data = await res.json();
  return data.data;
};
