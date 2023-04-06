import React from "react";
import "./Tabs.css";

const Tabs = ({ tabs, activeTab, setActiveTab, children }) => {
  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab-btn ${tab.id === activeTab ? "active" : ""}`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.name}
        </button>
      ))}
      <div className="tab-content">{children}</div>
    </div>
  );
};

export default Tabs;
