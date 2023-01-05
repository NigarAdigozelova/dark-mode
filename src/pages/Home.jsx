import { Button, Container, Input, WrapItem } from "@chakra-ui/react";
import React, { useContext } from "react";
import { MainContext } from "../context/ContextProvider";
import { v4 as uuidv4 } from "uuid";
import TodoList from "../components/TodoList";

const Home = () => {
  const { todo, setTodo } = useContext(MainContext);
  const { todos, setTodos } = useContext(MainContext);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const data = { id: uuidv4(), title: todo, completed: false };


  const onFormSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos,data]);
    setTodo("");
  };
  return (
    <>
      <Container>
      <br />
      <div style={{marginLeft:"100px", color:"red",fontWeight:800,padding:"10px"}}>TODO-LIST</div>
      <form onSubmit={onFormSubmit}>
        <Input
          required
          value={todo}
          onChange={handleChange}
          placeholder="Add your todo... "
          style={{ width: "300px", border: "2px solid red" }}
        />
        <WrapItem>
          <Button type="submit" colorScheme="red" style={{ marginTop: "10px" }}>
            Add
          </Button>
        </WrapItem>
      </form>
      <TodoList />
      </Container>
    </>
  );
};

export default Home;
