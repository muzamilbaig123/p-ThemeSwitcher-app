"use client"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { switcher } from "@/lib/slices/themeSwicther";

export default function Themes() {

    const toogleColor = useAppSelector((state) => state.theme.isDarkMode);
    const dispatch = useAppDispatch();

    const themeHandler = () => {
        dispatch(switcher())
    }

    const bgTextDark = {
        backgroundColor: "#000",
        color: "#fff" 
    }

    return (
        <>
            <div className="w-full h-screen flex flex-col justify-center items-center gap-3" style={toogleColor ? bgTextDark : {}}>

            <h1 className="text-3xl underline">Themes Switcher App</h1>
                <input type="checkbox" className="toggle toggle-success" defaultChecked 
                onClick={themeHandler}
                />
            </div>
        </>
    )
}