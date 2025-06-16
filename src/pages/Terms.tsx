
import React from "react";
import { Helmet } from "react-helmet-async";
import HomeLink from "@/components/HomeLink";

const Terms = () => (
  <>
    <Helmet>
      <title>Điều khoản sử dụng - SRT Subtitle Viewer by Sach Song Ngu</title>
      <meta name="description" content="Điều khoản và điều kiện sử dụng SRT Subtitle Viewer của Sach Song Ngu. Quy định về quyền và trách nhiệm khi sử dụng dịch vụ." />
      <link rel="canonical" href="https://sachsongngu.github.io/srt-subtitle-viewer/terms" />
    </Helmet>
    <main className="bg-gradient-to-tr from-blue-50 to-indigo-100 min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <article className="max-w-2xl w-full bg-white/90 rounded-xl shadow-2xl px-6 py-8 animate-scale-in">
        <div className="flex items-center mb-3">
          <HomeLink />
          <h1 className="text-3xl sm:text-4xl font-bold text-primary text-center flex-1">
            Điều khoản sử dụng
          </h1>
        </div>
        <div className="prose prose-lg max-w-none">
          <p className="text-base sm:text-lg text-muted-foreground mb-4">
            Khi sử dụng <strong>SRT Subtitle Viewer by Sach Song Ngu</strong>, bạn đồng ý tuân thủ các điều khoản sau:
          </p>
          <div className="bg-amber-50 p-6 rounded-lg mb-4">
            <h2 className="text-lg font-semibold text-primary mb-3">Quy định sử dụng:</h2>
            <ul className="list-disc ml-6 text-muted-foreground space-y-2">
              <li>Chỉ dùng công cụ cho mục đích hợp pháp, không vi phạm bản quyền.</li>
              <li>Không khai thác dữ liệu với mục đích thương mại khi chưa được cho phép.</li>
              <li>Không sử dụng để phân phối nội dung vi phạm pháp luật.</li>
              <li>Tôn trọng quyền sở hữu trí tuệ của các tác phẩm.</li>
            </ul>
          </div>
          <div className="bg-red-50 p-6 rounded-lg mb-4">
            <h2 className="text-lg font-semibold text-red-700 mb-3">Miễn trách nhiệm:</h2>
            <ul className="list-disc ml-6 text-red-600 space-y-2">
              <li>Chúng tôi không chịu trách nhiệm với nội dung bạn tải lên.</li>
              <li>Dịch vụ được cung cấp "như hiện tại" không bảo đảm hoàn hảo.</li>
              <li>Không bảo đảm tính chính xác 100% của AI phân tích.</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-700">
              <strong>Lưu ý:</strong> Chúng tôi có quyền cập nhật điều khoản bất cứ lúc nào. Việc tiếp tục sử dụng đồng nghĩa với việc chấp nhận các thay đổi.
            </p>
          </div>
        </div>
        <footer className="text-xs text-muted-foreground mt-6 pt-4 border-t">
          Cập nhật lần cuối: Tháng 12/2024 bởi <strong>Sach Song Ngu</strong>
        </footer>
      </article>
    </main>
  </>
);

export default Terms;
