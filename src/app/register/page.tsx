"use client";
import CustomCheckbox from "@/components/CustomCheckbox";

export default function Page() {
    const handleCheckboxChange = (isChecked: boolean) => {
        console.log("Checkbox durumu:", isChecked ? "Aktif" : "Pasif");
    };

    return (
        <div className="flex items-center justify-center w-full h-screen">
            <div className="w-[300px] p-2 flex flex-col gap-2  text-center ">
                <div className="w-full flex justify-center">
                <img src={"/logo.png"} className="w-[100px] h-[100px]" />

                </div>
                <p className="text-black/50 text-[0.7rem]">Play Chess / Register</p>
                <div className="w-full flex flex-col gap-2 justify-center items-center">
                    <input type="email" className="w-full h-[35px] text-[0.9rem] p-1 rounded outline-none border-2 transition-all ease-in-out duration-300 border-gray-400 focus:border-blue-600 " placeholder="E-mail Adress" />
                    <input type="text" className="w-full h-[35px] text-[0.9rem] p-1 rounded outline-none border-2 transition-all ease-in-out duration-300 border-gray-400 focus:border-blue-600 " placeholder="Username" />

                    <input type="password" className="w-full h-[35px] p-1 rounded text-[0.9rem] outline-none border-2 border-gray-400 transition-all ease-in-out duration-300 focus:border-blue-600" placeholder="Password" />
                </div>
        
                <button
                    className="relative w-full cursor-pointer bg-black text-white text-[0.9rem] h-[40px] rounded transition-all ease-in-out duration-300 
          hover:bg-blue-600 overflow-hidden"

                >
                    Register
                </button>
                <p className="text-[0.8rem]">Do you have an account? <a className="text-blue-600 cursor-pointer" href="/login">Login</a> now!</p>


            </div>
        </div>
    )
}