// This file is the "entry point" for our website. You can think of it as the root of the component tree that makes up the website

// Here, we're importing the ListTitle and List components
import ListTitle from "@/components/ListTitle";
import List from "@/components/List";

export default function Home() {
  return (
    <div id="main-content">
      <ListTitle />
      <List />
    </div>
  );
}
