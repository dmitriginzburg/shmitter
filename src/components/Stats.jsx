import Avatar from "./Avatar.jsx";
import {useContext} from "react";
import {ShmitterContext} from "../utils/context.js";

const Stats = () => {
    const {user, stats} = useContext(ShmitterContext);

    return (
        <div className={'user-stats'}>
            <div>
                <Avatar/>
                {user.name}
            </div>
            <div className={'stats'}>
                <div>Followers: {stats.followers}</div>
                <div>Following: {stats.following}</div>
            </div>
        </div>
    )
}

export default Stats;