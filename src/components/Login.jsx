import React from "react";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase";

export default function Login() {
  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-xl font-bold text-center mb-6">เข้าสู่ระบบหรือสร้างบัญชีผู้ใช้</h2>

        <button
          onClick={handleGoogleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded-full font-semibold mb-3 hover:bg-blue-700"
        >
          เข้าสู่ระบบด้วยบัญชี Google
        </button>

        <button className="w-full border py-2 rounded-full font-semibold mb-3 hover:bg-blue-50">
          เข้าสู่ระบบด้วยบัญชี Facebook
        </button>

        <div className="text-center my-4 text-gray-500">หรือ</div>

        <input
          type="email"
          placeholder="อีเมล"
          className="w-full p-2 border border-gray-300 rounded-md mb-3"
          disabled
        />

        <button
          className="w-full bg-gray-300 text-gray-700 py-2 rounded-full cursor-not-allowed"
          disabled
        >
          ดำเนินการต่อ
        </button>

        <div className="text-center mt-4">
          <a href="#" className="text-blue-500 text-sm underline hover:opacity-80">
            วิธีอื่นๆ สำหรับเข้าสู่ระบบ
          </a>
        </div>

        <p className="text-xs text-center text-gray-500 mt-4">
          การดำเนินการต่อแสดงว่าคุณยอมรับ{" "}
          <a href="#" className="text-blue-500 underline">ข้อกำหนดการใช้งาน</a> และ{" "}
          <a href="#" className="text-blue-500 underline">นโยบายความเป็นส่วนตัว</a>
        </p>
      </div>
    </div>
  );
}
