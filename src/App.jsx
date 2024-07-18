import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
import ConditionalComponent from "./components/ConditionalComponent";
import Counter from "./components/Counter";
import { useState } from "react";
import MyButton from "./components/MyButton";
import Board from "./components/Board";
import Section from "./Section";
import Heading from "./Heading";

const person = {
  name: "Rob",
  message: "Hi there!",
};

function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  // return (
  //   <Section>
  //     <Heading>Title</Heading>
  //     <Section>
  //       <Heading>Heading</Heading>
  //       <Heading>Heading</Heading>
  //       <Heading>Heading</Heading>
  //       <Section>
  //         <Heading>Sub-heading</Heading>
  //         <Heading>Sub-heading</Heading>
  //         <Heading>Sub-heading</Heading>
  //         <Section>
  //           <Heading>Sub-sub-heading</Heading>
  //           <Heading>Sub-sub-heading</Heading>
  //           <Heading>Sub-sub-heading</Heading>
  //         </Section>
  //       </Section>
  //     </Section>
  //   </Section>
  // );

  return (
    <Section>
      <Heading>My Profile</Heading>
      <Post
        title="Hello traveller!"
        body="Read about my adventures."
      />
      <AllPosts />
    </Section>
  )
}


function AllPosts() {
  return (
    <Section>
      <Heading>Posts</Heading>
      <RecentPosts />
    </Section>
  );
}

function RecentPosts() {
  return (
    <Section>
      <Heading>Recent Posts</Heading>
      <Post
        title="Flavors of Lisbon"
        body="...those pastéis de nata!"
      />
      <Post
        title="Buenos Aires in the rhythm of tango"
        body="I loved it!"
      />
    </Section>
  );
}

function Post({ title, body }) {
  return (
    <Section isFancy={true}>
      <Heading>
        {title}
      </Heading>
      <p><i>{body}</i></p>
    </Section>
  );
}

export default App;
