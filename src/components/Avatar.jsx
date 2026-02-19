const Avatar = ({user, size}) => {
    return (
        <img className={`user-avatar ${size ?? ''}`} src={user.avatar} alt={user.name}/>
    )
}

export default Avatar;