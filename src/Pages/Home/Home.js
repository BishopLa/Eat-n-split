import React, { useState } from 'react'
import "../../index.css"
import FriendsList from '../../Components/FriendsList/FriendsList'
import FormFriends from '../../Components/Form/formFriends';
import Button from '../../Components/Button/Button';
import FormSplitBill from '../../Components/FormSplitBill/FormSplitBill';


const initialFriends = [
  {
    id: 118836,
    name: "Biire",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Labaika",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Baygon",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

  const Home = () => {
    const [friends, setFriend] = useState(initialFriends);
    const[showAddFriend, setShowAddFriend] = useState(false);
    const[selectedFriend, setSelectedFriend] = useState(null);


    function handleShowAddFriend(){
      setShowAddFriend((show)=> !show);
    }
    function handleAddFriend(friend){
      setFriend((friends) => [...friends, friend]);
      setShowAddFriend(false);
    }

    function handleSelection(friend) {
      // setSelectedFriend(friend);
      setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
      setShowAddFriend(false)
    };

    function handlesplitBill(value){
      setFriend((friends) => 
      friends.map(friend => 
        friend.id === selectedFriend.id 
        ?{...friend, balance: friend.balance + value} 
        : friend
        )
        );
        setSelectedFriend(null)
    }

    return (
      <div className= "home">

        <div className="sidebar">
            <FriendsList 
            friends={friends} 
            selectedFriend={selectedFriend}
            onSelection={handleSelection}
            />

           {showAddFriend && <FormFriends onAddFriend= {handleAddFriend}/>}

            <Button onClick={handleShowAddFriend}>{showAddFriend ? "Close" : "Add Friend"}</Button>
        </div>

        {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handlesplitBill}/>}
      </div>
    )
  }
  
  export default Home