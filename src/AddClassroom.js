import React from "react";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";
import "./AddClassroom.css";

export default function AddClassroom() {
  return (
    <div className="AddClassroom">
      <div className="AddClassroom_header">
        <Sidebar SidebuttonTypeOne={true} SidebuttonTypeFive={true} />
      </div>
      <div className="AddClassroom_body">
        <Card
          title="sejal"
          ImageUrl="https://etimg.etb2bimg.com/photo/75729614.cms"
          body="lorem"
        />
        <Card
          title="sejal"
          ImageUrl="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fHN0dWR5fGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
          body="lorem"
        />
        <Card
          title="sejal"
          ImageUrl="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fHN0dWR5fGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
          body="lorem"
        />
        <Card
          title="sejal"
          ImageUrl="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fHN0dWR5fGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
          body="lorem"
        />
        <Card
          title="sejal"
          ImageUrl="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fHN0dWR5fGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
          body="lorem"
        />
      </div>
    </div>
  );
}
