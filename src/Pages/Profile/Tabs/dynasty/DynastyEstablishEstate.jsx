import DynastyEstablish from "./dynasty-establish/DynastyEstablish";
import DynastyEstate from "./dynasty-estate/DynastyEstate";

const members_rows = [
  { id: 1, name: "پدر", psc: 10000000, plus: 7, cage: 7, rial: 2, gif: "-" },
  { id: 2, name: "مادر", psc: 10000000, plus: 7, cage: 7, rial: 2, gif: "-" },
  { id: 3, name: "همسر", psc: 10000000, plus: 7, cage: 7, rial: 2, gif: "-" },
  { id: 4, name: "خواهر", psc: 10000000, plus: 7, cage: 7, rial: 2, gif: "-" },
  { id: 5, name: "برادر", psc: 10000000, plus: 7, cage: 7, rial: 2, gif: "-" },
  { id: 6, name: "فرزند", psc: 10000000, plus: 7, cage: 7, rial: 2, gif: "-" },
];
const DynastyEstablishEstate = ({ mode, setMode }) => {
  if (mode === 1)
    return <DynastyEstablish members={members_rows} setMode={setMode} />;
  if (mode === 2) return <DynastyEstate />;
};

export default DynastyEstablishEstate;
