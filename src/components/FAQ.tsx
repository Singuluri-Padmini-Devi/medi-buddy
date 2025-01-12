import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQProps {
  config?: {
    questions?: Array<{
      id: string;
      question: string;
      answer: string;
    }>;
  };
}

export const FAQ: React.FC<FAQProps> = ({ config }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  if (!config?.questions?.length) return null;

  return (
    <div className="px-4 py-6">
      <h2 className="text-lg font-semibold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {config.questions.map((faq) => (
          <div key={faq.id} className="border rounded-lg">
            <button
              className="w-full flex justify-between items-center p-4 text-left"
              onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
            >
              <span className="font-medium">{faq.question}</span>
              {openId === faq.id ? (
                <ChevronUp className="h-5 w-5 text-gray-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-400" />
              )}
            </button>
            {openId === faq.id && (
              <div className="px-4 pb-4 text-sm text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}