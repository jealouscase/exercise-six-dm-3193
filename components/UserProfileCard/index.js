import Image from "next/image";

const UserProfileCard = ({ userInformation }) => {
    return (
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <Image
                src={'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg'}
                alt="Default profile picture"
                width={80}
                height={80}
            />
            <div>
                <h2>User Profile</h2>
                <p style={{ fontSize: '20px' }}>{userInformation?.email}</p>
            </div>
        </div>
    );
}

export default UserProfileCard;