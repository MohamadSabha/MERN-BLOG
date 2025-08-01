import React, { useState } from "react";
import { useSelector } from "react-redux";
import { TextInput, Button } from "flowbite-react";
export default function DashProfile() {
  const { CurrentUser } = useSelector((state) => state.user);

  // upload image related code to be cheked later
  // // // const [imageFile, setImageFile] = useState(null);
  // // // const [imageFileUrl, setImageFileUrl] = useState(null);
  // // // const [imageFileUploadProgress, setImageFileUploadProgress] = useState(null);
  // // // const [imageFileUploadError, setImageFileUploadError] = useState(null);
  // // // const [imageFileUploading, setImageFileUploading] = useState(false);
  // // const handleImageChange = (e) => {
  // //   const file = e.target.files[0];
  // //   if (file) {
  // //     setImageFile(file);
  // //     setImageFileUrl(URL.createObjectURL(file));
  // //   }
  // // };
  // // useEffect(() => {
  // //   if (imageFile) {
  // //     uploadImage();
  // //   }
  // // }, [imageFile]);

  // const uploadImage = async () => {
  //   // firebase rules for storage
  //   // service firebase.storage {
  //   //   match /b/{bucket}/o {
  //   //     match /{allPaths=**} {
  //   //       allow read;
  //   //       allow write: if
  //   //       request.resource.size < 2 * 1024 * 1024 &&
  //   //       request.resource.contentType.matches('image/.*')
  //   //     }
  //   //   }
  //   // }
  //   // setImageFileUploading(true);
  //   // setImageFileUploadError(null);
  //   // const storage = getStorage(app);
  //   // const fileName = new Date().getTime() + imageFile.name;
  //   // const storageRef = ref(storage, fileName);
  //   // const uploadTask = uploadBytesResumable(storageRef, imageFile);
  //   // uploadTask.on(
  //   //   "state_changed",
  //   //   (snapshot) => {
  //   //     const progress =
  //   //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //   //     setImageFileUploadProgress(progress.toFixed(0));
  //   //   },
  //   //   (error) => {
  //   //     setImageFileUploadError(
  //   //       "Could not upload image (File must be less than 2MB)"
  //   //     );
  //   //     setImageFileUploadProgress(null);
  //   //     setImageFile(null);
  //   //     setImageFileUrl(null);
  //   //     setImageFileUploading(false);
  //   //   },
  //   //   () => {
  //   //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //   //       setImageFileUrl(downloadURL);
  //   //       setFormData({ ...formData, profilePicture: downloadURL });
  //   //       setImageFileUploading(false);
  //   //     });
  //   //   }
  //   // );
  // };
  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>
      <form className="flex flex-col gap-4">
        {/* ////////////////////////////////////////////////////////////// */}
        <input
          type="file"
          accept="image/*"
          // onChange={handleImageChange}
          // ref={filePickerRef}
          hidden
        />
        <div
          className="relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full"
          // onClick={() => filePickerRef.current.click()}
        >
          <img
            src={CurrentUser.ProfilePicture}
            alt="user"
            className="rounded-full w-full h-full object-cover border-8 border-white"
          />
        </div>
        <TextInput
          type="text"
          id="username"
          placeholder="username"
          defaultValue={CurrentUser.username}
        />
        <TextInput
          type="email"
          id="email"
          placeholder="email"
          defaultValue={CurrentUser.email}
        />
        <TextInput type="password" id="password" placeholder="password" />
        <Button
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800"
          outline
        >
          "Update"
        </Button>
      </form>
      <div className="text-red-500 flex justify-between mt-5">
        <span className="cursor-pointer">Delete Account</span>

        <span className="cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
}
