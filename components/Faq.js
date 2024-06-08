"use client";
import { useState } from "react";

const Faq = () => {
  const faqs = [
    {
      id: 1,
      title: "Development & Design",
      content:
        "There are many variations of passages of available but the Ut elit tellus luctus nec ullamcorper at mattis",
    },
    {
      id: 2,
      title: "How Quickly Are you Able to Issue a Quote",
      content:
        "There are many variations of passages of available but the Ut elit tellus luctus nec ullamcorper at mattis",
    },
    {
      id: 3,
      title: "tart With Mentors",
      content:
        "There are many variations of passages of available but the Ut elit tellus luctus nec ullamcorper at mattis",
    },
    {
      id: 4,
      title: "The Best Way to Boost Your",
      content:
        "There are many variations of passages of available but the Ut elit tellus luctus nec ullamcorper at mattis",
    },
    {
      id: 5,
      title: "What Can I do to Help?",
      content:
        "There are many variations of passages of available but the Ut elit tellus luctus nec ullamcorper at mattis",
    },
  ];

  const [active, setActive] = useState("event-1");

  return (
    <div className="tab_container">
      <div id="tab1" className="tab_content">
        <ul className="accordion">
          {faqs.map((faq) => (
            <li key={faq.id}>
              <a
                href="#"
                className={active == `event-${faq.id}` ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  setActive(
                    active == `event-${faq.id}` ? null : `event-${faq.id}`
                  );
                }}
              >
                <span> {faq.title} </span>{" "}
                <i className="bi bi-chevron-double-right" />
              </a>
              <p
                style={{
                  display: active == `event-${faq.id}` ? "block" : "none",
                }}
              >
                {faq.content}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Faq;
