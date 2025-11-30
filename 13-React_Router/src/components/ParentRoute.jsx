import { Outlet } from "react-router-dom";

function ParentRoute() {
    return (
        <div className="parent-route-container">
            <Outlet />
        </div>
    )
}
export default ParentRoute