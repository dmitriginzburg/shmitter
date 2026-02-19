import Stats from "./Stats.jsx";

const Sidebar = ({user, stats}) => {
    return (
        <div className={'sidebar'}>
            <Stats user={user} stats={stats}/>
        </div>
    )
}

export default Sidebar;