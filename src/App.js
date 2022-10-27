import { useState, useEffect } from "react";
import User from "./components/User";
import "./App.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

function App() {
  const [users, setUsers] = useState([]);
  const [displayUsers, setDisplayUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=24", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results)
        setDisplayUsers(data.results)
      });
  }, []);

  return (
    <>
      <ButtonGroup
        style={{
          position: "absolute",
          right: "0",
        }}
        disableElevation
        variant="contained"
        aria-label="Disabled elevation buttons"
      >
        <Button
          onClick={() =>
            setDisplayUsers(users.filter((user) => user.gender === "male"))
          }
        >
          Males
        </Button>
        <Button
          onClick={() =>
            setDisplayUsers(users.filter((user) => user.gender === "female"))
          }
          color="secondary"
        >
          Females
        </Button>
        <Button color="success" onClick={() => setDisplayUsers(users)}>
          All
        </Button>
      </ButtonGroup>
      <div className="App">
        {displayUsers &&
          displayUsers.map((user) => {
            return <User user={user} />;
          })}
      </div>
    </>
  );
}

export default App;
