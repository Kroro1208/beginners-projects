import { ChangeEvent, useState } from "react";

type Diary = {
  title: string;
  content: string;
  date: string;
};

type UseSimpleDiary = () => {
  diaryList: Diary[];
  title: string;
  content: string;
  filterDate: string;
  editIndex: number | null;
  handleInputTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  handleInputContent: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSelectDate: (e: ChangeEvent<HTMLInputElement>) => void;
  handlePostDiary: () => void;
  handleEditDiary: (index: number) => void;
  handleDeleteDiary: (index: number) => void;
};

export const useSimpleDiaryText: UseSimpleDiary = () => {
  const [diaryList, setDiaryList] = useState<Diary[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [filterDate, setFilterDate] = useState<string>("");
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleInputTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleInputContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleSelectDate = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterDate(e.target.value);
  };

  const handlePostDiary = () => {
    if (!title.trim() || !content.trim() || !filterDate.trim()) return;
    const newDiary: Diary = { title, content, date: filterDate };

    if (editIndex !== null) {
      const updateDiary = diaryList.map((diary, index) =>
        index === editIndex ? newDiary : diary
      );
      setDiaryList(updateDiary);
      setEditIndex(null);
    } else {
      setDiaryList((prev) => [...prev, newDiary]);
    }

    setTitle("");
    setContent("");
    setFilterDate("");
  };

  const handleEditDiary = (index: number) => {
    const diary = diaryList[index];
    setTitle(diary.title);
    setContent(diary.content);
    setFilterDate(diary.date);
    setEditIndex(index);
  };

  const handleDeleteDiary = (index: number) => {
    const updatedDiaryList = diaryList.filter((_, i) => i !== index);
    setDiaryList(updatedDiaryList);
  };

  return {
    diaryList,
    title,
    content,
    filterDate,
    editIndex,
    handleInputTitle,
    handleInputContent,
    handleSelectDate,
    handlePostDiary,
    handleEditDiary,
    handleDeleteDiary,
  };
};
