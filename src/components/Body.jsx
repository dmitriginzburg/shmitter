import Sidebar from "./Sidebar.jsx";
import Content from "./Content.jsx";

const Body = () => {
    return (
        <div className={'body'}>
            <Sidebar/>
            <Content/>
        </div>
    )
}

export default Body;