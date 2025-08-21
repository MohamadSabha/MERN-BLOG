import {
  Modal,
  Table,
  Button,
  TableHeadCell,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  ModalHeader,
  ModalBody,
  Label,
  TextInput,
} from "flowbite-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { FaCheck, FaTimes } from "react-icons/fa";

export default function DashCategories() {
  const { CurrentUser } = useSelector((state) => state.user);
  const [Categories, setCategories] = useState([]);
  const [showMore, setShowMore] = useState(true);

  //delete modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [CategoryIdToDelete, setCategoryIdToDelete] = useState("");

  // Create modal
  const [createError, setCreateError] = useState("");

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");

  // Edit modal
  const [editError, setEditError] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [categoryToEdit, setCategoryToEdit] = useState({ _id: "", name: "" });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`/api/category/getCategories`);
        const data = await res.json();
        if (res.ok) {
          setCategories(data.categories);
          if (data.categories.length < 9) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (CurrentUser.isAdmin) {
      fetchCategories();
    }
  }, [CurrentUser._id]);

  const handleShowMore = async () => {
    const startIndex = Categories.length;
    try {
      const res = await fetch(
        `/api/category/getCategories?startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setCategories((prev) => [...prev, ...data.categories]);
        if (data.categories.length < 9) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDeleteCategory = async () => {
    setShowDeleteModal(false);
    try {
      const res = await fetch(
        `/api/category/deleteCategory/${CategoryIdToDelete}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      if (res.ok) {
        setCategories((prev) =>
          prev.filter((category) => category._id !== CategoryIdToDelete)
        );
        setShowDeleteModal(false);
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleCreateCategory = async () => {
    setCreateError(""); // reset error before request

    try {
      const res = await fetch(`/api/category/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newCategoryName }),
      });
      const data = await res.json();
      if (res.ok) {
        setCategories((prev) => [data, ...prev]);
        setShowCreateModal(false);
        setNewCategoryName("");
      } else {
        setCreateError(data.message || "Something went wrong");
      }
    } catch (error) {
      setCreateError(error.message || "Something went wrong");
    }
  };

  const handleEditCategory = async () => {
    setEditError("");

    try {
      const res = await fetch(
        `/api/category/editCategory/${categoryToEdit._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: categoryToEdit.name }),
        }
      );
      const data = await res.json();
      if (res.ok) {
        setCategories((prev) =>
          prev.map((cat) => (cat._id === categoryToEdit._id ? data : cat))
        );
        setShowEditModal(false);
      } else {
        setEditError(data.message || "Something went wrong");
      }
    } catch (error) {
      setEditError(error.message || "Something went wrong");
    }
  };

  return (
    <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
      {CurrentUser.isAdmin && (
        <div className="flex justify-center my-4">
          <Button
            onClick={() => setShowCreateModal(true)}
            type="button"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-yellow-400 text-white shadow-sm transition-all duration-300 hover:brightness-90"
          >
            Create a new category
          </Button>
        </div>
      )}
      {CurrentUser.isAdmin && Categories.length > 0 ? (
        <>
          <Table hoverable className="shadow-md">
            <TableHead>
              <TableHeadCell className="dark:bg-primary  bg-slate-50  dark:text-white text-primary border-b-2 border-accent">
                Date updated
              </TableHeadCell>
              <TableHeadCell className="dark:bg-primary  bg-slate-50  dark:text-white text-primary border-b-2 border-accent">
                Category Name
              </TableHeadCell>

              <TableHeadCell className="dark:bg-primary  bg-slate-50  dark:text-white text-primary border-b-2 border-accent">
                Edit
              </TableHeadCell>
              <TableHeadCell className="dark:bg-primary  bg-slate-50  dark:text-white text-primary border-b-2 border-accent">
                Delete
              </TableHeadCell>
            </TableHead>
            {Categories.map((category) => (
              <TableBody className="divide-y" key={category._id}>
                <TableRow
                  className="dark:bg-primary dark:hover:bg-gradient-to-r dark:hover:from-black dark:hover:to-slate-500 dark:hover:text-white hover:text-accent bg-slate-50
                  hover:bg-white "
                >
                  <TableCell>
                    {category.updatedAt
                      ? new Date(category.updatedAt).toLocaleDateString()
                      : "-"}
                  </TableCell>
                  <TableCell>{category.name}</TableCell>
                  {/* <TableCell>
                    {category.userId
                      ? category.userId.username
                      : "deleted user"}
                  </TableCell> */}
                  <TableCell>
                    <Button
                      outline
                      onClick={() => {
                        setShowEditModal(true);
                        setCategoryToEdit(category);
                      }}
                      className=" hover:bg-orange-500 Dark:hover:text-white dark:hover:border-orange-500 px-4 py-5"
                      size="sm"
                    >
                      {" "}
                      Edit
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      outline
                      onClick={() => {
                        setShowDeleteModal(true);
                        setCategoryIdToDelete(category._id);
                      }}
                      className="font-medium text-red-500 hover:underline hover:bg-red-800 cursor-pointer border-red-600"
                      size="sm"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            ))}
          </Table>
          {showMore && (
            <button
              onClick={handleShowMore}
              className="w-full self-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400 font-medium text-sm transition-all duration-300 ease-in-out hover:brightness-90"
            >
              Show more
            </button>
          )}
        </>
      ) : (
        <p>You have no categories yet!</p>
      )}

      {/* delete modal  */}
      <Modal
        show={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        popup
        size="md"
        className="dark:bg-black/70"
      >
        <ModalHeader className="dark:bg-primary" />
        <ModalBody className="dark:bg-primary">
          <div className="text-center">
            <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto" />
            <h3 className="mb-5 text-lg text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this category?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="red" onClick={handleDeleteCategory}>
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={() => setShowDeleteModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>

      {/* Create Modal */}
      <Modal
        show={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        popup
        size="md"
      >
        <ModalHeader>Create New Category</ModalHeader>
        <ModalBody>
          <div className="flex flex-col gap-4">
            <div>
              <Label htmlFor="categoryName">Category Name</Label>
              <TextInput
                id="categoryName"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                placeholder="Enter category name"
                required
              />
            </div>
            <Button color="green" onClick={handleCreateCategory}>
              Create
            </Button>

            {createError && (
              <div className="flex items-center text-red-600 gap-2">
                <HiOutlineExclamationCircle />
                <span>{createError}</span>
              </div>
            )}
          </div>
        </ModalBody>
      </Modal>

      {/* Edit Modal */}
      <Modal
        show={showEditModal}
        onClose={() => setShowEditModal(false)}
        popup
        size="md"
      >
        <ModalHeader>Edit Category</ModalHeader>
        <ModalBody>
          <div className="flex flex-col gap-4">
            <div>
              <Label htmlFor="editCategoryName">Category Name</Label>
              <TextInput
                id="editCategoryName"
                value={categoryToEdit.name}
                onChange={(e) =>
                  setCategoryToEdit((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
                placeholder="Enter category name"
                required
              />
            </div>
            <Button color="blue" onClick={handleEditCategory}>
              Save Changes
            </Button>
            {editError && (
              <div className="flex items-center text-red-600 gap-2">
                <HiOutlineExclamationCircle />
                <span>{editError}</span>
              </div>
            )}
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}
