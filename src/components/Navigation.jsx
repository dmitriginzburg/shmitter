import Avatar from "./Avatar.jsx";

const Navigation = ({user}) => {
    return (
        <div className={'nav'}>
            <Avatar user={user} size={'small'}/>
        </div>
    )
}

export default Navigation;