import { ChangeEvent, useState } from "react";

type UseFilterSystem = () => {
  userName: string;
  userAge: string;
  userGender: string;
  searchName: string;
  searchAge: string;
  searchGender: string;
  handleInputName: (e: ChangeEvent<HTMLInputElement>) => void;
  handleInputAge: (e: ChangeEvent<HTMLInputElement>) => void;
  handleInputGender: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleSubmit: () => void;
  handleSearchInputName: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSearchInputAge: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSearchInputGender: (e: ChangeEvent<HTMLSelectElement>) => void;
  filteringUser: {
    name: string;
    age: string;
    gender: string;
  }[];
};

export const FilterSystemHook: UseFilterSystem = () => {
  const [userName, setName] = useState("");
  const [userAge, setAge] = useState("");
  const [userGender, setGender] = useState("");
  const [userData, setUserData] = useState<
    Array<{ name: string; age: string; gender: string }>
  >([]);
  const [searchName, setSearchName] = useState("");
  const [searchAge, setSearchAge] = useState("");
  const [searchGender, setSearchGender] = useState("");

  const handleInputName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleInputAge = (e: ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
  };

  const handleInputGender = (e: ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value);
  };

  const handleSubmit = () => {
    if (!userName.trim() || !userAge.trim() || !userGender.trim()) return;
    const newUser = { name: userName, age: userAge, gender: userGender };
    setUserData((prev) => [...prev, newUser]);
    setName("");
    setAge("");
    setGender("");
  };

  const handleSearchInputName = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value);
  };

  const handleSearchInputAge = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchAge(e.target.value);
  };

  const handleSearchInputGender = (e: ChangeEvent<HTMLSelectElement>) => {
    setSearchGender(e.target.value);
  };

  const filteringUser = userData.filter(
    (user) =>
      user.name.toLowerCase().includes(searchName.toLowerCase()) &&
      (searchAge === "" || user.age === searchAge) &&
      (searchGender === "" || user.gender === searchGender)
  );

  return {
    userName,
    userAge,
    userGender,
    searchName,
    searchAge,
    searchGender,
    handleInputName,
    handleInputAge,
    handleInputGender,
    handleSubmit,
    handleSearchInputName,
    handleSearchInputAge,
    handleSearchInputGender,
    filteringUser,
  };
};
