import { useState } from "react";
import FormInput from "./FormInput";

function AddFriend({ handleAddFriendFF, urlImgPlaceholder }) {
  const [name, setName] = useState("");
  const [urlImg, setUrlImg] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (name === "") return;
    urlImg === ""
      ? handleAddFriendFF(name, urlImgPlaceholder)
      : handleAddFriendFF(name, urlImg);
    setName("");
    setUrlImg("");
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="form-add-friend">
        <FormInput inputT="text" inputV={name} onChangeF={setName}>
          <p>
            <span>🧑‍🤝‍👩</span>Friend name
          </p>
        </FormInput>
        <FormInput
          inputT="text"
          inputV={urlImg}
          onChangeF={setUrlImg}
          placeholderV={urlImgPlaceholder}
        >
          <p>
            <span>🌅</span>Image URL
          </p>
        </FormInput>
        <button className="button">Add</button>
      </div>
    </form>
  );
}

function Friend({ id, name, urlImg, balance, selected, handleAddFriendFF }) {
  return (
    <li className={selected ? "selected" : ""}>
      <img src={urlImg} alt="*" />
      <div>
        <h3>{name}</h3>
        <p
          style={
            balance < 0
              ? { color: "red" }
              : balance > 0
              ? { color: "green" }
              : {}
          }
        >
          {balance < 0
            ? `You owe ${name} $${balance * -1}`
            : balance > 0
            ? `${name} owes you $${balance}`
            : `You and ${name} are even`}
        </p>
      </div>
      <button className="button" onClick={() => handleAddFriendFF(id)}>
        {selected ? "Close" : "Select"}
      </button>
    </li>
  );
}

export default function FriendsList({
  data,
  handleAddFriendF,
  selectedId,
  handleSelectedIdF,
}) {
  const [addFriend, setAddFriend] = useState(false);

  return (
    <div className="sidebar">
      <ul>
        {data.map((friend) => (
          <Friend
            key={friend.id}
            id={friend.id}
            name={friend.name}
            urlImg={friend.image}
            balance={friend.balance}
            selected={selectedId === friend.id}
            handleAddFriendFF={handleSelectedIdF}
          />
        ))}
      </ul>
      {!addFriend ? (
        <button className="button" onClick={() => setAddFriend(true)}>
          Add Friend
        </button>
      ) : (
        <>
          <AddFriend
            handleAddFriendFF={handleAddFriendF}
            urlImgPlaceholder={`https://i.pravatar.cc/${Math.floor(
              Math.random() * 1000
            )}`}
          />
          <button className="button" onClick={() => setAddFriend(false)}>
            Close
          </button>
        </>
      )}
    </div>
  );
}
