import Table from "./components/Table";

export default function Home() {
  const tableData = [
    { id: 6, name: "Frank", age: 27 },
    { id: 7, name: "Grace", age: 31 },
    { id: 8, name: "Henry", age: 29 },
    { id: 9, name: "Isabel", age: 26 },
    { id: 10, name: "Jack", age: 33 },
    { id: 11, name: "Katherine", age: 24 },
    { id: 12, name: "Liam", age: 32 },
    { id: 13, name: "Mia", age: 23 },
    { id: 14, name: "Nathan", age: 30 },
    { id: 15, name: "Olivia", age: 28 },
    { id: 16, name: "Peter", age: 34 },
    { id: 17, name: "Quinn", age: 25 },
    { id: 18, name: "Rachel", age: 27 },
    { id: 19, name: "Samuel", age: 29 },
    { id: 20, name: "Tina", age: 31 },
    { id: 21, name: "Ursula", age: 30 },
    { id: 22, name: "Victor", age: 26 },
    { id: 23, name: "Wendy", age: 32 },
    { id: 24, name: "Xander", age: 28 },
    { id: 25, name: "Yasmine", age: 27 },
  ];
  
  return <Table data={tableData} />;
}
