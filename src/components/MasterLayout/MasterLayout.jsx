import SideBar from "../SideBar/SideBar"


const MasterLayout = () => {
return (
    <>
        <SideBar/>
        <Outlet/>
    </>
)
}

export default MasterLayout