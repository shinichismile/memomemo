import React from 'react';
import { Memo } from '../types';
import { Edit2, Trash2 } from 'lucide-react';

interface MemoListProps {
  memos: Memo[];
  onEdit: (memo: Memo) => void;
  onDelete: (id: string) => void;
}

export function MemoList({ memos, onEdit, onDelete }: MemoListProps) {
  return (
    <div className="space-y-4">
      {memos.map((memo) => (
        <div
          key={memo.id}
          className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-gray-800">{memo.title}</h3>
            <div className="flex space-x-2">
              <button
                onClick={() => onEdit(memo)}
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Edit2 className="w-5 h-5" />
              </button>
              <button
                onClick={() => onDelete(memo.id)}
                className="text-red-600 hover:text-red-800 transition-colors"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
          <p className="text-gray-600 whitespace-pre-wrap">{memo.content}</p>
          <div className="mt-2 text-sm text-gray-500">
            更新日: {memo.updatedAt.toLocaleString('ja-JP')}
          </div>
        </div>
      ))}
    </div>
  );
}