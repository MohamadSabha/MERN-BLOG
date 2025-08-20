import {
  Alert,
  Button,
  FileInput,
  Select,
  Spinner,
  Label,
  TextInput,
} from "flowbite-react";
import { Editor } from "@tinymce/tinymce-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function UpdatePost() {
  const { CurrentUser } = useSelector((state) => state.user);

  const [imageFile, setImageFile] = useState(null);
  // const [imageFileUrl, setImageFileUrl] = useState(null);
  const [imageFileUploading, setimageFileUploading] = useState(false);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);

  const navigate = useNavigate();

  const { postId } = useParams();
  useEffect(() => {
    try {
      const fetchPost = async () => {
        const res = await fetch(`/api/post/getposts?postId=${postId}`);
        const data = await res.json();
        if (!res.ok) {
          console.log(data.message);
          setPublishError(data.message);
          return;
        }
        if (res.ok) {
          setPublishError(null);
          setFormData(data.posts[0]);
        }
      };

      fetchPost();
    } catch (error) {
      console.log(error.message);
    }
  }, [postId]);

  const handleUpdloadImage = async () => {
    if (!imageFile) {
      setImageUploadError("Please select an image");
      return;
    }
    // setImageFileUrl(URL.createObjectURL(imageFile));
    const cloudForm = new FormData();
    cloudForm.append("file", imageFile);
    cloudForm.append(
      "upload_preset",
      import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
    );

    const UPLOAD_URL = import.meta.env.VITE_CLOUDINARY_UPLOAD_URL;

    setimageFileUploading(true);
    try {
      const res = await fetch(UPLOAD_URL, {
        method: "POST",
        body: cloudForm,
      });
      const data = await res.json();
      if (data.secure_url) {
        // Optionally show preview
        // setImageFileUrl(data.secure_url);
        setFormData({ ...formData, image: data.secure_url });
      }
    } catch (err) {
      setImageUploadError("Image upload failed");
      setimageFileUploading(false);
      console.log(err);
      // dispatch(updateFailure("Image upload failed:", err));
    } finally {
      setimageFileUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `/api/post/updatepost/${formData._id}/${CurrentUser._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }

      if (res.ok) {
        setPublishError(null);
        navigate(`/post/${data.slug}`);
      }
    } catch (error) {
      setPublishError(error.message || "Failed to update post");
    }
  };
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Update post</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
            value={formData.title || ""}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <Select
            value={formData.category || ""}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            <option value="uncategorized">Select a category</option>
            <option value="javascript">JavaScript</option>
            <option value="reactjs">React.js</option>
            <option value="nextjs">Next.js</option>
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border border-y-orange-600 border-x-accent rounded-md bx-3 p-3">
          <FileInput
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
          />

          <Button
            type="button"
            className="px-4 py-6 rounded-lg bg-gradient-to-r from-red-500 to-yellow-400 text-white shadow-sm transition-all duration-300 hover:brightness-90"
            // gradientDuoTone="purpleToBlue"
            size="sm"
            onClick={handleUpdloadImage}
            disabled={imageFileUploading}
          >
            {imageFileUploading ? (
              <>
                <Spinner size="sm" />
                <span className="pl-3">Loading...</span>
              </>
            ) : (
              "Upload Image"
            )}
          </Button>
        </div>

        {imageUploadError && <Alert color="failure">{imageUploadError}</Alert>}
        {formData.image && (
          <img
            src={formData.image}
            alt="upload"
            className="w-full h-72 object-cover"
          />
        )}
        {/* <ReactQuill
          theme="snow"
          placeholder="Write something..."
          className="h-72 mb-12"
          required
          onChange={(value) => {
            setFormData({ ...formData, content: value });
          }}
        /> */}
        <Editor
          apiKey="329an9qnec68io9ns95kdj7c8mkyb0kpnr78yrso5y3mh5a8" // optional for local use
          value={formData.content}
          init={{
            height: 300,
            menubar: false,
            plugins: ["link", "lists", "image", "media", "code"],
            toolbar:
              "undo redo | formatselect | bold italic underline | \
  alignleft aligncenter alignright | bullist numlist | \
  link image media | code",
          }}
          onEditorChange={(value) => {
            setFormData({ ...formData, content: value });
          }}
        />
        <Button
          type="submit"
          className=" mb-28 px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-yellow-400 text-white shadow-sm transition-all duration-300 hover:brightness-90"
        >
          Update
        </Button>
        {publishError && (
          <Alert className="mt-5" color="failure">
            {publishError}
          </Alert>
        )}
      </form>
    </div>
  );
}
