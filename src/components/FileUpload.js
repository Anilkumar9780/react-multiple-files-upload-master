import React, { useState, useRef } from 'react';
import axios from 'axios';

const Fileuploading = () => {
    const [file, setFile] = useState('');
    const inputRef = useRef();

    const handleonSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData();
        for (const key of Object.keys(file)) {
            formData.append('file', file[key])
        }
        axios.post("http://localhost:4000/api/upload-images", formData, {
        }).then(res => {
            console.log(res.data)
        })
        inputRef.current.value = "";
    }

    return (
        <div className="container">
            <div className="row">
                <form onSubmit={handleonSubmit}>
                    <div className="form-group">
                        <input type="file" name="file" ref={inputRef} onChange={(e) => setFile(e.target.files)} />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit">Upload</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Fileuploading;
