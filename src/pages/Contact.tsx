
import React from "react";
import { Helmet } from "react-helmet-async";
import HomeLink from "@/components/HomeLink";

const Contact = () => (
  <>
    <Helmet>
      <title>Liên hệ - SRT Subtitle Viewer by Sach Song Ngu</title>
      <meta name="description" content="Liên hệ với đội ngũ Sach Song Ngu. Gửi góp ý, câu hỏi hoặc đề xuất hợp tác về SRT Subtitle Viewer." />
      <link rel="canonical" href="https://sachsongngu.github.io/srt-subtitle-viewer/contact" />
    </Helmet>
    <main className="bg-gradient-to-tr from-blue-50 to-indigo-100 min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <article className="max-w-2xl w-full bg-white/90 rounded-xl shadow-2xl px-6 py-8 animate-scale-in">
        <div className="flex items-center mb-3">
          <HomeLink />
          <h1 className="text-3xl sm:text-4xl font-bold text-primary text-center flex-1">
            Liên hệ
          </h1>
        </div>
        <div className="prose prose-lg max-w-none">
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
            Nếu bạn có câu hỏi, góp ý hoặc muốn hợp tác với <strong>Sach Song Ngu</strong>, hãy liên hệ với chúng tôi:
          </p>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-4">
            <h2 className="text-lg font-semibold text-primary mb-3">Thông tin liên hệ:</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-primary font-medium">📧 Email:</span>
                <a href="mailto:contact@sachsongngu.com" className="underline text-primary hover:text-primary/80">
                  contact@sachsongngu.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary font-medium">📘 Facebook:</span>
                <a href="https://facebook.com/sachsongngu" target="_blank" rel="noopener noreferrer" className="underline text-primary hover:text-primary/80">
                  fb.com/sachsongngu
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary font-medium">🌐 Website:</span>
                <a href="https://sachsongngu.github.io" target="_blank" rel="noopener noreferrer" className="underline text-primary hover:text-primary/80">
                  sachsongngu.github.io
                </a>
              </div>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-sm text-green-700 font-medium">
              ⚡ Chúng tôi sẽ phản hồi trong vòng 24h làm việc!
            </p>
          </div>
        </div>
      </article>
    </main>
  </>
);

export default Contact;
