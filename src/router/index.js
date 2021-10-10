import Login from "../pages/Login"
import MyProfile from "../pages/MyProfile"
import Users from "../pages/Users"

export const privateRoutes = [
    { path: "/myprofile", component: MyProfile,  },
    { path: "/mentors", component: Users,  },


]

export const publicRoutes = [
    { path: "/login", component: Login, },
]