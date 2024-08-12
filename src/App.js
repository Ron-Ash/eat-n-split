import { useState } from "react";
import FriendsList from "./FriendsList";
import SplitingClaculator from "./SplitingCalculator";
import GetInitialData from "./GetInitialData";

function App() {
  const [data, setData] = useState(GetInitialData());
  const [selectedId, setSelectedId] = useState(null);

  function handhandleAddFriend(name, url) {
    const newFriend = {
      id: Date.now(),
      name: name,
      image: url,
      balance: 0,
    };
    setData((data) => {
      return [...data, newFriend];
    });
  }

  function handleSelectedId(id) {
    selectedId === id ? setSelectedId(null) : setSelectedId(id);
  }

  function handleNewBill(id, addedValue) {
    setData((data) => {
      return data.map((datapoint) =>
        datapoint.id === id
          ? { ...datapoint, balance: datapoint.balance + addedValue }
          : datapoint
      );
    });
  }

  return (
    <div className="app">
      <FriendsList
        data={data}
        handleAddFriendF={handhandleAddFriend}
        selectedId={selectedId}
        handleSelectedIdF={handleSelectedId}
      />
      {selectedId && (
        <SplitingClaculator
          userId={selectedId}
          name={data.reduce(
            (acc, datapoint) =>
              datapoint.id === selectedId ? datapoint.name : acc,
            null
          )}
          handleNewBillF={handleNewBill}
        />
      )}
    </div>
  );
}

export default App;
