
function ProfilePicture() {

    const imageURL = './src/assets/react.svg';
    const handleCLick = (e) => e.target.style.display = "none";

    return (
        <img onClick={(e) => handleCLick(e)} src={imageURL}></img>
    )
}

export default ProfilePicture;