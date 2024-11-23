import React, { useState, useEffect } from 'react';
import { Memo } from '../types';
import { Save, X } from 'lucide-react';

interface MemoFormProps {
  memo?: Memo;
  onSave: (memo: Omit<Memo, 'id' | 'createdAt' | 'updatedAt'>) => void;
  onCancel: () => void;
}

export function MemoForm({ memo, onSave, onCancel }: MemoFormProps) {
  const [title, setTitle] = useState(memo?.title || '');
  const [content, setContent] = useState(memo?.content || '');

  useEffect(() => {
    setTitle(memo?.title || '');
    setContent(memo?.content || '');
  }, [memo]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
          タイトル
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
          内容
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onCancel}
          className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          <X className="w-4 h-4 mr-2" />
          キャンセル
        </button>
        <button
          type="submit"
          className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          <Save className="w-4 h-4 mr-2" />
          保存
        </button>
      </div>
    </form>
  );
}