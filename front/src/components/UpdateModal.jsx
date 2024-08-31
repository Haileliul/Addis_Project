// components/UpdateModal.js
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { FaTimes } from "react-icons/fa";
import axios from "axios"; // Import axios
import { fetchSongs } from "../Redux/songsSlice";
import { useSelector, useDispatch } from "react-redux";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 80%;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const UpdateModal = ({ isOpen, onClose, onSubmit, initialData }) => {
  const dispatch = useDispatch();
  const { songs, status } = useSelector((state) => state.songs); // Access songs and status from the Redux store
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
    album: "",
    genre: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
      // Assuming you have an 'id' in initialData for identifying the record to update
      await axios.put(
        `https://addis-project-3typ.onrender.com/api/Song/${initialData._id}`,
        formData
      );
      onSubmit(formData); // Call the onSubmit callback if needed
      dispatch(fetchSongs());
      onClose(); // Close the modal
      alert("Song Updated Successfully");
    } catch (error) {
      console.error("There was an error updating the song!", error);
    }
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <FaTimes />
        </CloseButton>
        <h2>Edit Song</h2>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="artist">Artist</Label>
            <Input
              id="artist"
              name="artist"
              value={formData.artist}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="album">Album</Label>
            <Input
              id="album"
              name="album"
              value={formData.album}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="genre">Genre</Label>
            <Input
              id="genre"
              name="genre"
              value={formData.genre}
              onChange={handleChange}
            />
          </FormGroup>
          <Button type="submit">Save Changes</Button>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default UpdateModal;
