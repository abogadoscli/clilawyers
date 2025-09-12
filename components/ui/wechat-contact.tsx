
'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/language-context';
import { Button } from './button';
import { MessageCircle } from 'lucide-react';

interface WeChatContactProps {
  showWhatsAppForNonChinese?: boolean;
  className?: string;
}

export function WeChatContact({ showWhatsAppForNonChinese = true, className = "" }: WeChatContactProps) {
  const { language } = useLanguage();

  if (language === 'zh') {
    return (
      <div className={`bg-white p-4 rounded-lg shadow-xl ${className}`}>
        <div className="text-center mb-2">
          <p className="text-sm font-medium text-gray-700">微信联系</p>
        </div>
        <Image
          src="/wechat-qr.jpg"
          alt="WeChat QR Code"
          width={120}
          height={120}
          className="mx-auto rounded-lg"
        />
        <div className="text-center mt-2">
          <p className="text-xs text-gray-600">扫码添加微信</p>
          <p className="text-sm font-medium text-gray-800">622909303</p>
        </div>
      </div>
    );
  }

  if (!showWhatsAppForNonChinese) {
    return null;
  }

  return (
    <Button className={`bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-bold shadow-xl transform hover:scale-105 transition-all duration-300 ${className}`} asChild>
      <a href="https://wa.me/34666232223" target="_blank" rel="noopener noreferrer">
        <MessageCircle className="mr-3 h-5 w-5" />
        WhatsApp
      </a>
    </Button>
  );
}
