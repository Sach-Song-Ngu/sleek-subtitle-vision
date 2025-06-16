
import React from "react";
import { Helmet } from "react-helmet-async";
import HomeLink from "@/components/HomeLink";

const About = () => (
  <>
    <Helmet>
      <title>Về chúng tôi - SRT Subtitle Viewer by Sach Song Ngu</title>
      <meta name="description" content="Tìm hiểu về Sach Song Ngu và công cụ SRT Subtitle Viewer. Đội ngũ yêu công nghệ và ngôn ngữ, mang lại trải nghiệm học tập hiệu quả." />
      <link rel="canonical" href="https://sachsongngu.github.io/srt-subtitle-viewer/about" />
    </Helmet>
    <main className="bg-gradient-to-tr from-blue-50 to-indigo-100 min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <article className="max-w-2xl w-full bg-white/90 rounded-xl shadow-2xl px-6 py-8 animate-scale-in">
        <div className="flex items-center mb-3">
          <HomeLink />
          <h1 className="text-3xl sm:text-4xl font-bold text-primary text-center flex-1">
            Về chúng tôi
          </h1>
        </div>
        <div className="prose prose-lg max-w-none">
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
            <strong>SRT Subtitle Viewer by Sach Song Ngu</strong> là công cụ giúp bạn xem, tìm kiếm, phân tích phụ đề SRT một cách nhanh chóng và thân thiện. 
          </p>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
            Chúng tôi là đội ngũ <strong>Sach Song Ngu</strong> - những người yêu công nghệ và ngôn ngữ, mong muốn mang lại trải nghiệm học tập, giải trí và nghiên cứu hiệu quả cho cộng đồng yêu thích phụ đề và ngoại ngữ.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <h2 className="text-lg font-semibold text-primary mb-2">Tính năng nổi bật:</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Upload và xem file SRT dễ dàng</li>
              <li>Tìm kiếm và lọc phụ đề thông minh</li>
              <li>Phân tích ngữ pháp với AI Gemini</li>
              <li>Giao diện responsive, thân thiện</li>
              <li>Hoàn toàn miễn phí</li>
            </ul>
          </div>
        </div>
        <footer className="text-sm text-muted-foreground mt-6 pt-4 border-t"> 
          Bản quyền © 2024 bởi <strong>Sach Song Ngu</strong> - Học ngoại ngữ hiệu quả.
        </footer>
      </article>
    </main>
  </>
);

export default About;
