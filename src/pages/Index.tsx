
import React, { useState, Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";

// Lazy load components để code splitting
const SubtitleUploader = lazy(() => import("@/components/SubtitleUploader"));
const SubtitleList = lazy(() => import("@/components/SubtitleList"));

import { parseSRT, SubtitleItem } from "@/lib/srtParser";

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

const Index = () => {
  const [subtitles, setSubtitles] = useState<SubtitleItem[] | null>(null);

  const handleSrtUpload = (content: string) => {
    const result = parseSRT(content);
    setSubtitles(result);
  };

  // Footer navigation dưới cùng khung viewer
  const FooterLinks = () => (
    <footer className="w-full max-w-[750px] mx-auto flex flex-col items-center justify-center text-center pt-6 pb-2 gap-2 text-sm">
      <nav className="flex flex-wrap justify-center gap-3 text-muted-foreground font-medium">
        <a href="/about" className="hover:underline" rel="nofollow">Về chúng tôi</a>
        <a href="/contact" className="hover:underline" rel="nofollow">Liên hệ</a>
        <a href="/terms" className="hover:underline" rel="nofollow">Điều khoản</a>
        <a href="/privacy" className="hover:underline" rel="nofollow">Bảo mật</a>
      </nav>
      <div className="text-xs text-muted-foreground">
        © 2024 <strong>Sach Song Ngu</strong> - Học ngoại ngữ hiệu quả
      </div>
    </footer>
  );

  if (subtitles) {
    return (
      <>
        <Helmet>
          <title>Đang xem phụ đề SRT - SRT Subtitle Viewer by Sach Song Ngu</title>
          <meta name="description" content="Đang xem và phân tích file phụ đề SRT với công cụ của Sach Song Ngu. Tìm kiếm, lọc và học ngữ pháp dễ dàng." />
        </Helmet>
        <main className="h-screen min-h-0 bg-gradient-to-tr from-blue-50 to-indigo-100 flex flex-col items-center justify-center py-0 px-0">
          <section className="flex flex-col w-full h-full max-w-[750px] mx-auto flex-1 min-h-0 px-1 sm:px-0" aria-label="Danh sách phụ đề">
            <Suspense fallback={<LoadingSpinner />}>
              <SubtitleList items={subtitles} />
            </Suspense>
          </section>
          <FooterLinks />
        </main>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>SRT Subtitle Viewer by Sach Song Ngu - Xem phụ đề SRT miễn phí</title>
        <meta name="description" content="Công cụ xem phụ đề SRT miễn phí từ Sach Song Ngu. Upload file .srt, tìm kiếm, lọc và phân tích ngữ pháp với AI. Hỗ trợ học ngoại ngữ hiệu quả." />
        <link rel="canonical" href="https://sachsongngu.github.io/srt-subtitle-viewer/" />
      </Helmet>
      <main className="h-screen min-h-0 bg-gradient-to-tr from-blue-50 to-indigo-100 flex flex-col items-center justify-center py-0 px-0">
        <section className="flex flex-col w-full h-full max-w-[750px] mx-auto flex-1 min-h-0 justify-center px-1 sm:px-0" aria-label="Trang tải lên phụ đề">
          <div className="bg-white/90 shadow-2xl rounded-xl px-2 sm:px-8 py-5 sm:py-10 flex flex-col items-center gap-6 animate-scale-in w-full">
            <header className="text-center">
              <h1 className="text-3xl sm:text-5xl font-extrabold text-primary mb-2 tracking-tight drop-shadow">
                SRT Subtitle Viewer
              </h1>
              <div className="text-lg sm:text-xl font-semibold text-primary/80 -mt-1 mb-4">
                by Sach Song Ngu
              </div>
            </header>
            <p className="text-base sm:text-lg text-muted-foreground mb-2 max-w-xl text-center">
              Xem, lọc và tìm kiếm file phụ đề .srt dễ dàng! Kéo thả file hoặc chọn file trên máy bạn để bắt đầu.
            </p>
            <Suspense fallback={<LoadingSpinner />}>
              <SubtitleUploader onUpload={handleSrtUpload} />
            </Suspense>
            <div className="text-sm mt-3 text-muted-foreground">Chưa có file nào được tải lên</div>
          </div>
        </section>
        <FooterLinks />
      </main>
    </>
  );
};

export default Index;
