import React, { useRef, useState } from 'react';
import './AccountSettings.css';
import propic from '../Assets/propic.png';

const AccountSettings = () => {
    const [image, setImage] = useState(null);
    const imgRef = useRef(null);

    const userData = JSON.parse(localStorage.getItem('user'));
    const userEmail = userData ? userData.email : '';

    const handleImageClick = () => {
        imgRef.current.click();
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
    };

    return (
        <div className='settings-main'>
            <div className='settings'>
                <div>
                    <p>Account Settings</p>
                </div>
                <div className='account'>
                    <div className='img-content'>
                        {image ? (
                            <img src={URL.createObjectURL(image)} alt="User" onClick={handleImageClick} />
                        ) : (
                            <img src={propic} alt="Default" onClick={handleImageClick} />
                        )}
                        <input type='file' ref={imgRef} style={{ display: 'none' }} onChange={handleImageChange} />
                        <p>{userEmail}</p>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae delectus distinctio iusto atque? dignissimos architecto eos!</p>
                    <div className='dashed-line'></div>
                </div>
            </div>
        </div>
    );
}

export default AccountSettings;
