import useRequest from "../../../../../Services/Hooks/useRequest";
import CitizenInvite from "./CitizenInvite";
import FamilyTree from "./FamilyTree";
import { useEffect, useState } from "react";

const tree_members = {
  parent: [],
  siblings: [],
  spouse: [],
  children: [],
};
const citizen_items = [
  {
    id: 1,
    name: "آلیس جانسون",
    image: "alice.jpg",
    code: "HM-20000004",
    level: "beginner",
    age: 28,
    role: "مادر",
  },
  {
    id: 2,
    name: "باب اسمیت",
    image: "bob.jpg",
    code: "HM-20000005",
    level: "intermediate",
    age: 34,
    role: "برادر",
  },
  {
    id: 3,
    name: "چارلی دیویس",
    image: "charlie.jpg",
    code: "HM-20000006",
    level: "advanced",
    age: 10,
    role: "برادر",
  },
  {
    id: 4,
    name: "دایانا مارتینز",
    image: "diana.jpg",
    code: "HM-20000007",
    level: "beginner",
    age: 25,
    role: "خواهر",
  },
  {
    id: 5,
    name: "ایوان براون",
    image: "evan.jpg",
    code: "HM-20000008",
    level: "intermediate",
    age: 30,
    role: "خواهر",
  },
  {
    id: 6,
    name: "فیونا ویلسون",
    image: "fiona.jpg",
    code: "HM-20000009",
    level: "advanced",
    age: 7,
    role: "فرزند",
  },
  {
    id: 7,
    name: "جورج لی",
    image: "george.jpg",
    code: "HM-20000010",
    level: "beginner",
    age: 32,
    role: "برادر",
  },
  {
    id: 8,
    name: "هانا کلارک",
    image: "hannah.jpg",
    code: "HM-20000011",
    level: "intermediate",
    age: 29,
    role: "خواهر",
  },
  {
    id: 9,
    name: "آیزاک رودریگز",
    image: "isaac.jpg",
    code: "HM-20000012",
    level: "advanced",
    age: 35,
    role: "برادر",
  },
  {
    id: 10,
    name: "جسیکا لوئیس",
    image: "jessica.jpg",
    code: "HM-20000013",
    level: "beginner",
    age: 31,
    role: "خواهر",
  },
  {
    id: 11,
    name: "کوین یانگ",
    image: "kevin.jpg",
    code: "HM-20000014",
    level: "intermediate",
    age: 33,
    role: "پدر",
  },
  {
    id: 12,
    name: "لورا واکر",
    image: "laura.jpg",
    code: "HM-20000015",
    level: "advanced",
    age: 6,
    role: "فرزند",
  },
  {
    id: 13,
    name: "مایکل هال",
    image: "michael.jpg",
    code: "HM-20000016",
    level: "beginner",
    age: 15,
    role: "برادر",
  },
  {
    id: 14,
    name: "نینا آدامز",
    image: "nina.jpg",
    code: "HM-20000017",
    level: "intermediate",
    age: 24,
    role: "خواهر",
  },
  {
    id: 15,
    name: "الیور بیکر",
    image: "oliver.jpg",
    code: "HM-20000018",
    level: "advanced",
    age: 36,
    role: "همسر",
  },
];

const DynastyMembers = () => {
  const [members, setMembers] = useState(tree_members);
  const [citizens, setCitizens] = useState(citizen_items);
  const [mode, setMode] = useState(1);
  const { Request } = useRequest();

  const [family, setFamily] = useState([]);
  const [membersData, setMembersData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const dynastyResponse = await Request("dynasty");
      setDynastyId(dynastyResponse.data.data);
      setMode(1);
      if (dynastyResponse.data.data["user-has-dynasty"]) {
        const familyResponse = await Request(
          `dynasty/${dynastyResponse.data.data.id}/family/${dynastyResponse.data.data.family_id}`
        );
        setFamily(familyResponse.data.data);
        setMode(2);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {mode === 1 && <FamilyTree setMode={setMode} members={members} />}
      {mode === 2 && (
        <CitizenInvite
          setMode={setMode}
          mode={mode}
          citizens={citizens}
          members={members}
          setMembers={setMembers}
        />
      )}
    </div>
  );
};

export default DynastyMembers;
