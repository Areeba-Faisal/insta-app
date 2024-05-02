'use client'
// AddPostForm.js
import { useState } from 'react';
import { adPosts } from '../config/firebase';
import Link from 'next/link';
import "./get.css";

const AddPostForm = () => {
    const [img, setImg] = useState(null);
    const [des, setDes] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImg(file);
    };

    const addItem = async () => {
        if (img && des) {
            await adPosts({
                des,
                img
            });
        }
    };

    return (
        <div className="add-post-form-container">
            <h2>Add New Post</h2>
            <div className="form-group">
                <label htmlFor="imageUpload">Upload Image:</label>
                <input type="file" id="imageUpload" onChange={handleImageChange} />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    placeholder="Enter description..."
                    value={des}
                    onChange={(e) => setDes(e.target.value)}
                />
            </div>
            <Link href="/route">
                <button className="btn blue-btn" onClick={addItem}>Add Post</button>
            </Link>
        </div>
    );
};

export default AddPostForm;

