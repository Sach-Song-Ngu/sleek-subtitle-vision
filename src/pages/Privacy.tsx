
import React from "react";
import { Helmet } from "react-helmet-async";
import HomeLink from "@/components/HomeLink";

const Privacy = () => (
  <>
    <Helmet>
      <title>Chính sách bảo mật - SRT Subtitle Viewer by Sach Song Ngu</title>
      <meta name="description" content="Chính sách bảo mật và quyền riêng tư của SRT Subtitle Viewer by Sach Song Ngu. Cam kết bảo vệ thông tin cá nhân người dùng." />
      <link rel="canonical" href="https://sachsongngu.github.io/srt-subtitle-viewer/privacy" />
    </Helmet>
    <main className="bg-gradient-to-tr from-blue-50 to-indigo-100 min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <article className="max-w-2xl w-full bg-white/90 rounded-xl shadow-2xl px-6 py-8 animate-scale-in">
        <div className="flex items-center mb-3">
          <HomeLink />
          <h1 className="text-3xl sm:text-4xl font-bold text-primary text-center flex-1">
            Chính sách bảo mật
          </h1>
        </div>
        <div className="prose prose-lg max-w-none">
          <p className="text-base sm:text-lg text-muted-foreground mb-4">
            <strong>Sach Song Ngu</strong> cam kết bảo mật thông tin cá nhân của bạn khi sử dụng SRT Subtitle Viewer:
          </p>
          <div className="bg-green-50 p-6 rounded-lg mb-4">
            <h2 className="text-lg font-semibold text-green-700 mb-3">🔒 Cam kết bảo mật:</h2>
            <ul className="list-disc ml-6 text-green-600 space-y-2">
              <li>Không lưu trữ lâu dài bất cứ file/phụ đề nào bạn tải lên.</li>
              <li>Không chia sẻ dữ liệu cá nhân của bạn cho bên thứ ba.</li>
              <li>Xử lý file hoàn toàn trên trình duyệt (client-side).</li>
              <li>Không thu thập thông tin cá nhân không cần thiết.</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg mb-4">
            <h2 className="text-lg font-semibold text-blue-700 mb-3">📊 Dữ liệu sử dụng:</h2>
            <ul className="list-disc ml-6 text-blue-600 space-y-2">
              <li>API key Gemini được lưu cục bộ trên máy bạn (localStorage).</li>
              <li>Không gửi dữ liệu về server của chúng tôi.</li>
              <li>Chỉ gọi API Gemini khi bạn yêu cầu phân tích.</li>
              <li>Log analytics cơ bản để cải thiện dịch vụ (không chứa nội dung file).</li>
            </ul>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg mb-4">
            <h2 className="text-lg font-semibold text-yellow-700 mb-3">⚠️ Lưu ý về API:</h2>
            <p className="text-yellow-600 text-sm">
              Khi sử dụng tính năng phân tích AI, nội dung phụ đề sẽ được gửi đến Google Gemini API theo chính sách của Google.
            </p>
          </div>
        </div>
        <footer className="text-xs text-muted-foreground mt-6 pt-4 border-t">
          <p className="mb-2">
            Nếu có thắc mắc về bảo mật, liên hệ: 
            <a href="mailto:contact@sachsongngu.com" className="underline ml-1">contact@sachsongngu.com</a>
          </p>
          <p>Cập nhật lần cuối: Tháng 12/2024 bởi <strong>Sach Song Ngu</strong></p>
        </footer>
      </article>
    </main>
  </>
);

export default Privacy;
